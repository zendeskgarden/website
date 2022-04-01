/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const fetch = require('node-fetch');
const { createNodeHelpers } = require('gatsby-node-helpers');
const { optimize } = require('svgo');

const tokens = new Map();

exports.onPreInit = async (_, configOptions) => {
  const { figmaApiToken, fileId, nodeId } = configOptions;
  const baseURL = 'https://api.figma.com/v1';
  const headers = {
    'Content-Type': 'application/json',
    'X-FIGMA-TOKEN': figmaApiToken
  };

  // Fetch for all the components ids.
  const file = await fetch(`${baseURL}/files/${fileId}/nodes?ids=${nodeId}`, { headers });
  const { nodes } = await file.json();
  const frame = nodes[Object.keys(nodes)[0]];
  const nodeIds = [];
  const metadata = new Map();

  for (const [key, value] of Object.entries(frame.components)) {
    let name = value.name;
    const description = value.description;

    if (name !== 'Style=Stroke' && name.includes('token')) {
      let synonyms = description.split(':')[1]?.split(',');

      synonyms = synonyms?.map(token => token.trim().replace('\n', ''));
      // eslint-disable-next-line prefer-named-capture-group
      name = name.replace(/\b(\stoken)\b/u, '');

      metadata.set(key, {
        name,
        synonyms
      });

      nodeIds.push(key);
    }
  }

  // Based on the components, makes another fetch to get the children metadata.
  const components = await fetch(`${baseURL}/files/${fileId}/nodes?ids=${nodeIds.join(',')}`, {
    headers
  });
  const { nodes: icons } = await components.json();

  for (const [key, value] of Object.entries(icons)) {
    const { children } = value.document;
    const { name, synonyms } = metadata.get(key);
    const icon = children[0].name
      .split('-')[0]
      .trim()
      .replace('_', '')
      .replace(/\s/gu, '-')
      .toLowerCase();

    tokens.set(name, {
      icon,
      synonyms
    });
  }
};

const cache = new Set();
const getToken = nodeName => {
  for (const [key, value] of tokens) {
    if (cache.has(key)) continue;
    const { icon, synonyms } = value;
    const variants = [icon, `${icon}-stroke`, `${icon}-fill`];

    for (const variant of variants) {
      if (variant === nodeName) {
        cache.add(key);

        return {
          token: key,
          synonyms
        };
      }
    }
  }

  return null;
};

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
      token: String
      synonyms: [String]
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
  const token = getToken(node.name);

  const svgNode = gardenSvgNode({
    id: `${node.relativeDirectory}-${node.name}`,
    parent: node.id,
    token: token?.token ? token.token : '',
    synonyms: token?.synonyms ? token.synonyms : [],
    ...parsedContent
  });

  createNode(svgNode);
  createParentChildLink({ parent: node, child: svgNode });
};
