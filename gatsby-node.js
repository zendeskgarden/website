/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const { sourceInstanceName } = getNode(node.parent);
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: 'slug',
      node,
      value
    });

    createNodeField({
      name: 'sourceInstanceName',
      node,
      value: sourceInstanceName
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allFile(filter: { sourceInstanceName: { eq: "content" }, extension: { eq: "mdx" } }) {
        edges {
          node {
            childMdx {
              id
              fields {
                slug
              }
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  const contentPosts = result.data.allFile.edges;

  contentPosts.forEach(({ node }) => {
    createPage({
      path: `/content${node.childMdx.fields.slug}`,
      component: path.resolve(`./src/templates/ContentTemplate.tsx`),
      context: { id: node.childMdx.id }
    });
  });
};
