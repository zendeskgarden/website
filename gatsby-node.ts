/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import path from 'path';
import { createFilePath } from 'gatsby-source-filesystem';
import smartquotes from 'smartquotes';
import readingTime from 'reading-time';
import { GatsbyNode } from 'gatsby';

function getGroup(page) {
  let group = null;

  switch (true) {
    case page.path.startsWith('/components'):
      group = 'components';
      break;
    case page.path.startsWith('/content'):
      group = 'content';
      break;
    case page.path.startsWith('/design'):
      group = 'design';
      break;
    case page.path.startsWith('/patterns'):
      group = 'patterns';
      break;
  }

  return group;
}

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const { sourceInstanceName } = getNode(node.parent);

    const slug = node.frontmatter.slug || createFilePath({ node, getNode, trailingSlash: false });

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
      name: `timeToRead`,
      node,
      value: readingTime(node.body as string)
    });

    createNodeField({
      name: `group`,
      node,
      value: getGroup({ path: slug })
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
      if (pageContext.frontmatter.description) {
        pageContext.frontmatter.description = smartquotes(pageContext.frontmatter.description);
      }

      if (pageContext.frontmatter.title) {
        pageContext.frontmatter.title = smartquotes(pageContext.frontmatter.title);
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
