/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const fetch = require('node-fetch');
const { createRemoteFileNode } = require('gatsby-source-filesystem');

const NODE_TYPE = 'FIGMA_ASSET';

exports.sourceNodes = async (
  { actions: { createNode }, createContentDigest, cache, reporter },
  configOptions
) => {
  const { nodeIds, fileId, scale, figmaApiToken } = configOptions;
  const baseUrl = 'https://api.figma.com/v1';
  const headers = {
    'Content-Type': 'application/json',
    'X-FIGMA-TOKEN': figmaApiToken
  };

  try {
    const fileResponse = await fetch(`${baseUrl}/files/${fileId}`, { headers });
    const { document } = await fileResponse.json();
    const idsParam = nodeIds.join(',');
    const nodesResponse = await fetch(`${baseUrl}/files/${fileId}/nodes?ids=${idsParam}`, {
      headers
    });
    const { nodes } = await nodesResponse.json();
    const FILE_CACHE_KEY = `figma-file-${fileId}-${document.lastModified}`;
    const cachedImages = await cache.get(FILE_CACHE_KEY);

    if (cachedImages) {
      reporter.info(`Retrieving images for Figma file "${fileId}" from CACHE...`);
    } else {
      reporter.info(`Retrieving images for Figma file "${fileId}" from API...`);
      const imagesResponse = await fetch(
        `${baseUrl}/images/${fileId}?ids=${idsParam}&scale=${scale}`,
        {
          headers
        }
      );

      const { images } = await imagesResponse.json();

      cache.set(FILE_CACHE_KEY, images);
    }

    const images = await cache.get(FILE_CACHE_KEY);

    for (const id in nodes) {
      if (images[id]) {
        const node = nodes[id];

        createNode({
          ...node.document,
          parent: null,
          children: [],
          imageUrl: images[id],
          internal: {
            type: NODE_TYPE,
            content: JSON.stringify(node),
            contentDigest: createContentDigest(node)
          }
        });
      }
    }
  } catch (error) {
    reporter.error(error.message);
  }
};

/** 
   Optimize remote images
   See: https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/creating-a-source-plugin/#optimize-remote-images
   */
exports.onCreateNode = async ({ node, actions: { createNode }, createNodeId, getCache }) => {
  if (node.internal.type === NODE_TYPE) {
    const fileNode = await createRemoteFileNode({
      url: node.imageUrl,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      getCache
    });

    if (fileNode) {
      node.childFile___NODE = fileNode.id; // eslint-disable-line require-atomic-updates
    }
  }
};
