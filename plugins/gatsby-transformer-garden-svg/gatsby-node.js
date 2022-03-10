/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const { createNodeHelpers } = require('gatsby-node-helpers');
const { optimize } = require('svgo');

const tokens = require('./icons-tokens.json');

const config = {
  plugins: [
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [{ focusable: false }, { role: 'presentation' }]
      }
    },
    {
      name: 'removeViewBox',
      active: false
    }
  ]
};

const parseSvg = svgContent => {
  const { data: content } = optimize(svgContent, config);

  return {
    content,
    originalContent: svgContent
  };
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
    type Token implements Node @dontInfer {
      name: String
      alt_name: [String]
    }
  `;

  createTypes(typeDefs);
};

exports.onCreateNode = async ({
  node,
  actions: { createNode, createParentChildLink },
  loadNodeContent,
  createNodeId,
  createContentDigest
}) => {
  if (node.internal.mediaType !== 'image/svg+xml') {
    return;
  }

  const { createNodeFactory } = createNodeHelpers({
    typePrefix: 'Garden',
    createNodeId,
    createContentDigest
  });

  const gardenSvgNode = createNodeFactory('Svg');
  const content = await loadNodeContent(node);
  const parsedContent = parseSvg(content);

  const svgNode = gardenSvgNode({
    id: `${node.relativeDirectory}-${node.name}`,
    parent: node.id,
    token: tokens[node.name]?.name || '',
    altName: tokens[node.name]?.altName,
    ...parsedContent
  });

  createNode(svgNode);
  createParentChildLink({ parent: node, child: svgNode });
};
