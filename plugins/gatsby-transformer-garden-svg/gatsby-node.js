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

exports.onPreInit = async ({ reporter }, configOptions) => {
  const { figmaApiToken, fileId, nodeId } = configOptions;
  const baseURL = 'https://api.figma.com/v1';
  const headers = {
    'Content-Type': 'application/json',
    'X-FIGMA-TOKEN': figmaApiToken
  };

  try {
    const fileResponse = await fetch(`${baseURL}/files/${fileId}/nodes?ids=${nodeId}`, { headers });
    const { nodes } = await fileResponse.json();
    const frame = nodes[Object.keys(nodes)[0]];
    const { children } = frame.document;

    for (const node of children) {
      if (node.type === 'COMPONENT') {
        const name = node.name.replace(/(?:\s+token)/u, '').toLowerCase();
        const id = node.id;
        const iconId = node.children[0]?.componentId;

        if (!iconId) {
          // have a better description later
          reporter.info(`Skipped ${name}; can't find iconId`);
          continue;
        }

        const icon = node.children[0].name
          // .replace(/\s+?(?:_)(?:\s+-.*)/gu, '')
          .split('-')[0]
          .trim()
          .replace('_', '')
          .replace(/\s/gu, '-')
          .toLowerCase();

        reporter.info(`Fetched ${name} -> ${icon}`);
        tokens.set(name, {
          id,
          iconId,
          icon
        });
      }
    }

    for (const [key, value] of tokens) {
      const { id, iconId } = value;
      const metadata = frame.components[id];
      let style = frame.components[iconId].name.substring(6).toLowerCase();

      if (style !== 'stroke' && style !== 'fill') {
        style = null;
      }

      let synonyms = metadata.description.split(':')[1]?.split(',');

      synonyms = synonyms?.map(token => token.trim().replace('\n', ''));

      const { icon } = tokens.get(key);

      tokens.set(key, {
        icon,
        style,
        synonyms
      });
    }
  } catch (error) {
    reporter.info(error.message);
  }
};

const cache = new Set();
const getToken = nodeName => {
  for (const [key, value] of tokens) {
    if (cache.has(key)) continue;
    const { icon, style, synonyms } = value;
    const variant = style ? `${icon}-${style}` : icon;

    if (variant === nodeName) {
      cache.add(key);

      return {
        token: key,
        synonyms
      };
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
