/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const fs = require('fs');
const util = require('util');
const path = require('path');
const { parse } = require('comment-parser');
const reactDocgenTypescript = require('react-docgen-typescript');
const createNodeHelpers = require('gatsby-node-helpers').default;

const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const lstat = util.promisify(fs.lstat);

const GARDEN_REACT_COMPONENT_ID = 'ReactComponent';
const GARDEN_REACT_PACKAGE_ID = 'ReactPackage';
const { createNodeFactory, generateTypeName } = createNodeHelpers({
  typePrefix: `Garden`
});

const componentNode = createNodeFactory(GARDEN_REACT_COMPONENT_ID);
const packageNode = createNodeFactory(GARDEN_REACT_PACKAGE_ID);
const TSCONFIG_PATH = path.resolve(__dirname, '..', '..', 'react-components', 'tsconfig.json');
const PARSER_OPTIONS = {
  propFilter: props =>
    !(props.description.includes('@ignore') || props.parent.fileName.includes('node_modules')),
  shouldRemoveUndefinedFromOptional: true
};
const PARSER = reactDocgenTypescript.withCustomConfig(TSCONFIG_PATH, PARSER_OPTIONS);

const parseComponents = filePaths => {
  const components = PARSER.parse(filePaths);

  return components.map(component => {
    const data = parse(`/** ${component.description} */`)[0];
    const extendsTag = data ? data.tags.find(tag => tag.tag === 'extends') : null;
    const props = {};

    Object.keys(component.props)
      .sort()
      .forEach(key => {
        const prop = component.props[key];
        const description = parse(`/** ${prop.description} */`)[0];
        const type = prop.type.name.replace(/"/gu, "'");
        let defaultValue =
          prop.defaultValue && prop.defaultValue.value && prop.defaultValue.value.toString();

        if (
          (type === 'string' && defaultValue !== null) ||
          type.indexOf(`'${defaultValue}'`) !== -1
        ) {
          // Surround default string literals with quotes.
          defaultValue = `'${defaultValue}'`;
        }

        const params = {};
        let returns;

        if (description) {
          description.tags
            .filter(tag => tag.tag === 'param')
            .forEach(param => (params[param.name] = param.description));
          returns = description.tags.find(tag => tag.tag.startsWith('return'));
        }

        props[key] = {
          description: description ? description.description : '',
          defaultValue,
          required: prop.required,
          type,
          params,
          returns: returns ? returns.description : undefined
        };
      });

    return {
      name: component.displayName,
      description: data ? data.description : '',
      extends: extendsTag ? extendsTag.name : '',
      props
    };
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
    type ${generateTypeName(GARDEN_REACT_COMPONENT_ID)} @dontInfer {
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
exports.sourceNodes = async ({ actions, reporter }) => {
  const { createNode } = actions;
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

exports.createResolvers = ({ createResolvers, cache }) => {
  const resolvers = {
    File: {
      // Add a `component` resolver as the build time can be long if added as a transformer plugin.
      component: {
        type: generateTypeName(GARDEN_REACT_COMPONENT_ID),
        resolve: async source => {
          const key = `component-cache-${source.internal.contentDigest}`;
          let component = await cache.get(key);

          if (!component) {
            component = parseComponents(source.absolutePath)[0];

            await cache.set(key, component);
          }

          return componentNode(component);
        }
      }
    },
    Mdx: {
      reactPackage: {
        type: generateTypeName(GARDEN_REACT_PACKAGE_ID),
        resolve: (source, args, context) => {
          if (source.frontmatter.package) {
            return context.nodeModel.runQuery({
              query: {
                filter: {
                  name: { eq: source.frontmatter.package }
                }
              },
              type: generateTypeName(GARDEN_REACT_PACKAGE_ID),
              firstOnly: true
            });
          }

          return undefined;
        }
      },
      reactComponents: {
        type: [generateTypeName(GARDEN_REACT_COMPONENT_ID)],
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

            return parseComponents(filePaths);
          }

          return undefined;
        }
      }
    }
  };

  createResolvers(resolvers);
};
