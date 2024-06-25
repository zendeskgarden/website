/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import path from 'node:path';
import { GatsbyNode, Page } from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';
import smartquotes from 'smartquotes';
import { IPageContext } from './src/components/types';

function getGroup(page: Page) {
  let retVal = null;

  if (page.path.startsWith('/components')) {
    retVal = 'components';
  } else if (page.path.startsWith('/content')) {
    retVal = 'content';
  } else if (page.path.startsWith('/design')) {
    retVal = 'design';
  } else if (page.path.startsWith('/patterns')) {
    retVal = 'patterns';
  }

  return retVal;
}

export const createPages: GatsbyNode['createPages'] = ({ actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: `/components/select-native`,
    toPath: `/components/select`
  });
};

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const { sourceInstanceName } = getNode(node.parent!)!;

    const slug =
      (node as unknown as IPageContext).slug ||
      createFilePath({ node, getNode, trailingSlash: false });

    createNodeField({
      name: 'slug',
      node,
      value: slug
    });

    createNodeField({
      name: 'sourceInstanceName',
      node,
      value: sourceInstanceName
    });

    createNodeField({
      name: `group`,
      node,
      value: getGroup({ path: slug, component: '' })
    });
  }
};

export const onCreatePage: GatsbyNode['onCreatePage'] = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  const componentExt = path.extname(page.component);

  if (componentExt === '.md' || componentExt === '.mdx') {
    deletePage(page);

    const pageContext = page.context || {};

    if (pageContext.frontmatter) {
      const frontmatter = pageContext.frontmatter as IPageContext['frontmatter'];

      if (frontmatter) {
        if (frontmatter.description) {
          frontmatter.description = smartquotes(frontmatter.description);
        }

        if (frontmatter.title) {
          frontmatter.title = smartquotes(frontmatter.title);
        }
      }
    }

    createPage({
      ...page,
      context: {
        ...pageContext,
        group: getGroup(page),
        slug: page.path
      }
    });
  }
};

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({
  schema,
  actions
}) => {
  const mdxTypeName = 'Mdx';
  const navigationTypeName = 'GardenNavigation';
  const packageTypeName = 'GardenReactPackage';
  const componentTypeName = 'GardenReactComponent';

  const mdxResolvers = schema.buildObjectType({
    name: mdxTypeName,
    fields: {
      navigation: {
        type: [navigationTypeName],
        resolve: async (source, args, context) => {
          if (source.fields.slug) {
            const { entries } = await context.nodeModel.findAll({
              query: {
                filter: { group: { eq: source.fields.group }, root: { eq: true } }
              },
              type: navigationTypeName
            });

            return entries;
          }

          return [];
        }
      },
      reactPackage: {
        type: packageTypeName,
        resolve: (source, args, context) => {
          if (source.frontmatter.package) {
            return context.nodeModel.findOne({
              query: {
                filter: {
                  name: { eq: source.frontmatter.package }
                }
              },
              type: packageTypeName
            });
          }

          return null;
        }
      },
      reactComponents: {
        type: [componentTypeName],
        resolve: async (source, args, context) => {
          const components = source.frontmatter.components;

          if (components) {
            const { entries } = await context.nodeModel.findAll({
              query: {
                filter: {
                  path: { in: components }
                }
              },
              type: componentTypeName
            });

            return entries;
          }

          return [];
        }
      },
      reactSubcomponents: {
        type: [componentTypeName],
        resolve: async (source, args, context) => {
          const subcomponents = source.frontmatter.subcomponents;

          if (subcomponents) {
            const { entries } = await context.nodeModel.findAll({
              query: {
                filter: {
                  path: { in: subcomponents }
                }
              },
              type: componentTypeName
            });

            return entries;
          }

          return [];
        }
      }
    }
  });

  actions.createTypes(mdxResolvers);
};
