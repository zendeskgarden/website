/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const fs = require('fs');
const util = require('util');
const path = require('path');
const { createNodeHelpers } = require('gatsby-node-helpers');
const { cmdDocgen } = require('@zendeskgarden/scripts');

const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const lstat = util.promisify(fs.lstat);

const TYPE_PREFIX = 'Garden';
const GARDEN_REACT_COMPONENT_ID = 'ReactComponent';
const GARDEN_REACT_PACKAGE_ID = 'ReactPackage';

const componentDoc = async (paths, cache) => {
  const file = path.resolve(__dirname, '../../react-components/packages/theming/package.json');
  const packageJson = JSON.parse(await readFile(file, { encoding: 'utf8' }));
  const key = `cache-components-${packageJson.version}`;
  let components = await cache.get(key);

  if (!components) {
    const elementPaths = path.join(__dirname, '../../react-components/packages/**/elements/**');

    components = await cmdDocgen({ paths: elementPaths });
    await cache.set(key, components);
  }

  return components.filter(component => paths.includes(component.file));
};

exports.createSchemaCustomization = ({ actions, createNodeId, createContentDigest }) => {
  const { createTypes } = actions;

  const { createTypeName } = createNodeHelpers({
    typePrefix: TYPE_PREFIX,
    createNodeId,
    createContentDigest
  });

  const typeDefs = `
     type ${createTypeName(GARDEN_REACT_COMPONENT_ID)} @dontInfer {
       name: String
       description: String,
       extends: String,
       props: JSON
     }
   `;

  createTypes(typeDefs);
};

/**
 * Retrieve Garden package information from `package.json` files
 */
exports.sourceNodes = async ({ actions, reporter, createNodeId, createContentDigest }) => {
  const { createNodeFactory } = createNodeHelpers({
    typePrefix: TYPE_PREFIX,
    createNodeId,
    createContentDigest
  });

  const { createNode } = actions;
  const packageNode = createNodeFactory(GARDEN_REACT_PACKAGE_ID);
  const packagesRoot = path.resolve(__dirname, '../../react-components/packages');

  reporter.info('Sourcing Garden react-component packages...');

  /* eslint-disable no-await-in-loop */
  for (const file of await readdir(packagesRoot)) {
    if (file === '.template') {
      continue;
    }

    if (!(await lstat(path.join(packagesRoot, file))).isDirectory()) {
      continue;
    }

    const packageJson = JSON.parse(
      await readFile(path.join(packagesRoot, file, 'package.json'), { encoding: 'utf-8' })
    );

    const node = packageNode({
      id: packageJson.name,
      name: packageJson.name,
      description: packageJson.description,
      version: packageJson.version,
      packageName: file
    });

    await createNode(node);
  }
  /* eslint-enable no-await-in-loop */
};

exports.createResolvers = ({ createResolvers, cache, createNodeId, createContentDigest }) => {
  const { createNodeFactory, createTypeName } = createNodeHelpers({
    typePrefix: TYPE_PREFIX,
    createNodeId,
    createContentDigest
  });

  const componentNode = createNodeFactory(GARDEN_REACT_COMPONENT_ID);

  const resolvers = {
    File: {
      // Add a `component` resolver as the build time can be long if added as a transformer plugin.
      component: {
        type: createTypeName(GARDEN_REACT_COMPONENT_ID),
        resolve: async source => {
          const key = `component-cache-${source.internal.contentDigest}`;
          let component = await cache.get(key);

          if (!component) {
            component = await componentDoc(source.absolutePath, cache)[0];

            await cache.set(key, component);
          }

          return componentNode(component);
        }
      }
    },
    Mdx: {
      reactPackage: {
        type: createTypeName(GARDEN_REACT_PACKAGE_ID),
        resolve: (source, args, context) => {
          if (source.frontmatter.package) {
            return context.nodeModel.runQuery({
              query: {
                filter: {
                  name: { eq: source.frontmatter.package }
                }
              },
              type: createTypeName(GARDEN_REACT_PACKAGE_ID),
              firstOnly: true
            });
          }

          return undefined;
        }
      },
      reactComponents: {
        type: [createTypeName(GARDEN_REACT_COMPONENT_ID)],
        resolve: async (source, args, context) => {
          const components = source.frontmatter.components;

          if (components) {
            const componentNodes = await Promise.all(
              components.map(component => {
                const query = {
                  query: {
                    filter: {
                      sourceInstanceName: { eq: 'react-components' },
                      relativePath: { eq: component }
                    }
                  },
                  type: 'File',
                  firstOnly: true
                };

                return context.nodeModel.runQuery(query);
              })
            );
            const filePaths = componentNodes.map(node => node.absolutePath);

            return componentDoc(filePaths, cache);
          }

          return undefined;
        }
      }
    }
  };

  createResolvers(resolvers);
};
