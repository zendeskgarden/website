/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const { createNodeHelpers } = require('gatsby-node-helpers');
const { optimize } = require('svgo');

const iconTokens = require('./icon-tokens');

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

exports.onCreateNode = async ({
  node,
  actions: { createNode, createNodeField, createParentChildLink },
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
    ...parsedContent
  });

  createNodeField({
    node,
    name: 'token',
    value: iconTokens.get(node.name)
  });
  createNode(svgNode);
  createParentChildLink({ parent: node, child: svgNode });
};
