/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const path = require('path');
const smartquotes = require('smartquotes');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: `/components/select-native`,
    toPath: `/components/select`
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const { sourceInstanceName } = getNode(node.parent);
    const slug = createFilePath({ node, getNode });

    createNodeField({
      name: 'slug',
      node,
      value: node.frontmatter.slug || slug
    });

    createNodeField({
      name: 'sourceInstanceName',
      node,
      value: sourceInstanceName
    });
  }
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  const componentExt = path.extname(page.component);

  if (componentExt === '.md' || componentExt === '.mdx') {
    deletePage(page);

    const pageContext = page.context;

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
        fileAbsolutePath: page.component
      }
    });
  }
};
