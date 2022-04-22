/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const fetch = require('node-fetch');

/**
 * @param {string} iconName expected format '_[Match match] - 16px icon'
 *
 * @returns the extracted SVG file basename; ex. '[match-match]'
 */
const getBasename = iconName => {
  const regex = /_*(?<icon>.*)\s+-/u;
  const match = iconName.trim().toLowerCase().match(regex);

  if (!match) {
    throw new Error(`Failed to match known icon format for ${iconName}`);
  }

  return match.groups.icon.replace(/\s+/gu, '-');
};

/**
 * @param {string} nodeName expected format '[Match match] Token',
 *
 * @returns the extracted token; ex. '[match match]'
 */
const getTokenName = nodeName => {
  const regex = /(?<token>.*)\s+token/u;
  const match = nodeName.trim().toLowerCase().match(regex);

  if (!match) {
    throw new Error(`Failed to match known token format for ${nodeName}`);
  }

  return match.groups.token.replace(/\s\s+/u, ' ');
};

/**
 * @param {string} list expected format 'alt search terms: [Match match]',
 *
 * @returns synonyms seperated by commas
 */
const getSynonyms = list => {
  const regex = /alt search terms:\s(?<synonyms>.*)/u;
  const match = list.trim().toLowerCase().match(regex);

  return match?.groups.synonyms.replace(/,\s+/gu, ',') || '';
};

/**
 * @param {string} nodeName expected format '[Match match] Token',
 *
 * @returns the extracted token; ex. '[match match]'
 */
const getStyle = name => {
  const regex = /style=(?<style>.*)/u;
  const match = name.trim().toLowerCase().match(regex);

  return match?.groups.style || null;
};

/**
 *
 * {
 *  document {
 *   id,
 *   name,
 *   type,
 *   children,
 *   componentId,
 *   ...
 *  },
 *  components: {
 *   id: {
 *    key,
 *    name,
 *    description
 *    ...
 *   }
 *  },
 *  componentSets: {
 *    id: {
 *    key,
 *    name,
 *    description
 *    ...
 *  }
 * }
 *
 * Returns all the nodes within the node that's being fetched.
 * The document contains a tree structure of all the nodes.
 */
async function getFigmaNodes(configOptions) {
  const { figmaApiToken, fileId, nodeId } = configOptions;
  const baseURL = 'https://api.figma.com/v1';
  const headers = {
    'Content-Type': 'application/json',
    'X-FIGMA-TOKEN': figmaApiToken
  };

  const fileResponse = await fetch(`${baseURL}/files/${fileId}/nodes?ids=${nodeId}`, { headers });
  const { nodes } = await fileResponse.json();
  const frame = nodes[Object.keys(nodes)[0]];

  return frame;
}

const NODE_TYPE = 'ICON_TOKEN';

exports.sourceNodes = async (
  { actions: { createNode }, createContentDigest, reporter },
  configOptions
) => {
  const { components, document } = await getFigmaNodes(configOptions);
  const nodes = document.children;

  reporter.info(`Getting sourceNodes for icon tokens.`);

  /**
   *
   * Node {
   *  id,
   *  name,
   *  type,
   *  children
   * }
   *
   * Depending on the node type, there can have additional properties associated with it.
   *
   */
  const parseNode = node => {
    const tokenName = getTokenName(node.name);

    const iconNode = node.children[0];
    const iconName = getBasename(iconNode.name);
    const iconComponentId = iconNode?.componentId;

    if (!iconComponentId) {
      throw new Error("Failed to get Icon's componentId");
    }

    const iconComponent = components[iconComponentId];
    const style = getStyle(iconComponent.name);

    const component = components[node.componentId];

    if (!component) {
      throw new Error(`Failed to get component for node: ${node.id}`);
    }

    const synonyms = getSynonyms(component.description)?.split(',');

    const token = {
      icon: iconName,
      style,
      synonyms
    };

    createNode({
      ...token,
      parent: null,
      children: [],
      id: tokenName,
      internal: {
        type: NODE_TYPE,
        content: JSON.stringify(token),
        contentDigest: createContentDigest(token)
      }
    });
  };

  // Performs a breadth-first search for `COMPONENT` type nodes.
  const queue = [nodes];

  while (queue.length) {
    const currentNode = queue.shift();
    // Have to store the length within a vairable,
    // because the length could be mutated while traversing through the nodes.
    const length = currentNode.length;

    for (let i = 0; i < length; i++) {
      const node = currentNode[i];

      if (node?.children) {
        // The second condition ensure it's not a inner-instance, which is the icon itself.
        if (node.type === 'INSTANCE' && node.id.charAt(0) !== 'I') {
          parseNode(node);
        }
        queue.push(node.children);
      }
    }
  }
};
