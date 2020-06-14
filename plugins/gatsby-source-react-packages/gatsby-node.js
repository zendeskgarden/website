/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const fs = require('fs');
const util = require('util');
const path = require('path');
const reactDocgenTypescript = require('react-docgen-typescript');
const createNodeHelpers = require('gatsby-node-helpers').default;

const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const lstat = util.promisify(fs.lstat);

const GARDEN_REACT_COMPONENT = 'ReactComponent';
const GARDEN_REACT_PACKAGE_ID = 'ReactPackage';
const GARDEN_REACT_PROP_SHEET_ID = 'PropSheetJson';
const { createNodeFactory, generateTypeName } = createNodeHelpers({
  typePrefix: `Garden`
});

const componentNode = createNodeFactory(GARDEN_REACT_COMPONENT);
const packageNode = createNodeFactory(GARDEN_REACT_PACKAGE_ID);
const propSheetJsonNode = createNodeFactory(GARDEN_REACT_PROP_SHEET_ID);
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
    const props = {};

    Object.keys(component.props)
      .sort()
      .forEach(key => {
        const prop = component.props[key];

        props[key] = {
          description: prop.description,
          default: prop.defaultValue && prop.defaultValue.value,
          required: prop.required,
          type: prop.type.name.replace('"', "'")
        };
      });

    return {
      name: component.displayName,
      description: component.description,
      props
    };
  });
};

/**
 * Remove all `extends` prop sheets (i.e. `HTMLAttributes`)
 */
const parsePropSheet = reactDocgenTypescript.withCustomConfig(
  path.resolve(__dirname, '../../react-components/tsconfig.json'),
  {
    propFilter: props => {
      return props.parent.fileName.indexOf('node_modules') === -1;
    }
  }
).parse;

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
    type ${generateTypeName(GARDEN_REACT_PROP_SHEET_ID)} @dontInfer {
      displayName: String
      description: String
      props: JSON
      methods: [JSON]
    }
    type ${generateTypeName(GARDEN_REACT_COMPONENT)} @dontInfer {
      name: String
      description: String
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
      // Add a `propSheet` resolver as the build time can be long if added as a transformer plugin.
      propSheet: {
        type: generateTypeName(GARDEN_REACT_PROP_SHEET_ID),
        resolve: async source => {
          // Use the files digest as the cache invalidation key.
          const propSheetCacheKey = `prop-sheet-cache-${source.internal.contentDigest}`;
          let cachedPropSheet = await cache.get(propSheetCacheKey);

          if (!cachedPropSheet) {
            cachedPropSheet = parsePropSheet(source.absolutePath)[0];

            await cache.set(propSheetCacheKey, cachedPropSheet);
          }

          return propSheetJsonNode(cachedPropSheet);
        }
      },
      component: {
        type: generateTypeName(GARDEN_REACT_COMPONENT),
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
      reactPropSheets: {
        type: [generateTypeName(GARDEN_REACT_PROP_SHEET_ID)],
        resolve: async (source, args, context) => {
          if (source.frontmatter.propSheets) {
            const propSheetFileNodes = await Promise.all(
              source.frontmatter.propSheets.map(propSheet =>
                context.nodeModel.runQuery({
                  query: {
                    filter: {
                      sourceInstanceName: { eq: 'react-components' },
                      relativePath: { eq: propSheet }
                    }
                  },
                  type: 'File',
                  firstOnly: true
                })
              )
            );

            const propSheetAbsolutePaths = propSheetFileNodes.map(
              propSheet => propSheet.absolutePath
            );

            return parsePropSheet(propSheetAbsolutePaths);
          }

          return undefined;
        }
      },
      reactComponents: {
        type: [generateTypeName(GARDEN_REACT_COMPONENT)],
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
