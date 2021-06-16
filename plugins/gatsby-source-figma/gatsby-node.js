/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const fetch = require('node-fetch');
const { createRemoteFileNode } = require('gatsby-source-filesystem');

const NODE_TYPE = 'FIGMA_ASSET';

// Flattens a tree into a list and associates nodes using a parent-child relationship
const createNodeList = root => {
  const nodes = [root];
  const nodeList = [];

  while (nodes.length) {
    let node = nodes[0];

    if (node.children) {
      const children = node.children.map(child => ({ ...child, parent: node }));

      nodes.push(...children);
    }

    node = nodes.shift();
    nodeList.push(node);
  }

  return nodeList;
};

exports.sourceNodes = async (
  { actions: { createNode }, createContentDigest, cache, reporter },
  configOptions
) => {
  const baseUrl = 'https://api.figma.com/v1';
  const headers = {
    'Content-Type': 'application/json',
    'X-FIGMA-TOKEN': configOptions.figmaApiToken
  };

  try {
    const response = await fetch(`${baseUrl}/files/${configOptions.fileId}`, { headers });
    const { document } = await response.json();
    const nodes = createNodeList(document).filter(node => node.type === 'FRAME');
    const ids = nodes.map(node => node.id).join(',');
    const FILE_CACHE_KEY = `figma-file-${configOptions.fileId}-${document.lastModified}`;
    const cachedImages = await cache.get(FILE_CACHE_KEY);

    if (cachedImages) {
      reporter.info(`Retrieving images for Figma file "${configOptions.fileId}" from CACHE...`);
    } else {
      reporter.info(`Retrieving images for Figma file "${configOptions.fileId}" from API...`);
      const imagesResponse = await fetch(
        `${baseUrl}/images/${configOptions.fileId}?ids=${ids}&scale=2`,
        {
          headers
        }
      );

      const { images } = await imagesResponse.json();

      cache.set(FILE_CACHE_KEY, images);
    }

    const images = await cache.get(FILE_CACHE_KEY);

    nodes.forEach(node => {
      if (images[node.id]) {
        node.imageUrl = images[node.id];

        createNode({
          ...node,
          parent: node.parent ? node.parent.id : null,
          children: node.children ? node.children.map(child => child.id) : [],
          internal: {
            type: NODE_TYPE,
            content: JSON.stringify(node),
            contentDigest: createContentDigest(node)
          }
        });
      }
    });
  } catch (error) {
    reporter.error(error.message);
  }
};

/** 
   Optimize remote images
   See: https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/creating-a-source-plugin/#optimize-remote-images
   */
exports.onCreateNode = async ({
  node, // the node that was just created
  actions: { createNode },
  createNodeId,
  getCache
}) => {
  if (node.internal.type === NODE_TYPE) {
    const fileNode = await createRemoteFileNode({
      // the url of the remote image to generate a node for
      url: node.imageUrl,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      getCache
    });

    if (fileNode) {
      node.remoteImage___NODE = fileNode.id; // eslint-disable-line require-atomic-updates
    }
  }
};
