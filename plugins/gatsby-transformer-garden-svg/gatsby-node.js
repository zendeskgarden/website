/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const createNodeHelpers = require('gatsby-node-helpers').default;
const SVGO = require('svgo');

const svgo = new SVGO({
  plugins: [
    {
      addAttributesToSVGElement: {
        attributes: [{ focusable: false, role: 'presentation' }]
      }
    },
    { removeViewBox: false }
  ]
});

const { createNodeFactory } = createNodeHelpers({
  typePrefix: `Garden`
});

const GARDEN_SVG_ID = 'Svg';

const gardenSvgNode = createNodeFactory(GARDEN_SVG_ID);

const parseSvg = async svgContent => {
  const { data: content } = await svgo.optimize(svgContent);

  return {
    content,
    originalContent: svgContent
  };
};

exports.onCreateNode = async ({
  node,
  actions: { createNode, createParentChildLink },
  loadNodeContent
}) => {
  if (node.internal.mediaType !== 'image/svg+xml') {
    return;
  }

  const content = await loadNodeContent(node);
  const parsedContent = await parseSvg(content);

  const svgNode = gardenSvgNode(parsedContent, {
    id: `${node.relativeDirectory}-${node.name}`,
    parent: node.id
  });

  createNode(svgNode);
  createParentChildLink({ parent: node, child: svgNode });
};
