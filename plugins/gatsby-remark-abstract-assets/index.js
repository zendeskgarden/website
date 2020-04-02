/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const path = require(`path`);
const visit = require(`unist-util-visit`);

/**
 * This plugin allows markdown images to support referencing Abstract assets.
 *
 * `[Alt text](abstract:{LAYER_NAME}-{FORMAT}.{EXTENSION})`
 */
module.exports = ({ files, markdownNode, markdownAST, getNode }) => {
  visit(markdownAST, 'image', image => {
    const imageUrl = image.url;

    /**
     * Only transform images that match the abstract template
     */
    if (!imageUrl.startsWith('abstract:')) {
      return;
    }

    const layerFileName = imageUrl.replace('abstract:', '');
    const matchingFileNode = files.find(file => file.base === layerFileName);

    /**
     * Transform if matching File is found
     */
    if (!matchingFileNode) {
      return;
    }

    const parentDirectory = getNode(markdownNode.parent).dir;

    /**
     * Update image path to Abstract Asset
     */
    image.url = path.relative(parentDirectory, matchingFileNode.absolutePath);
  });

  return markdownAST;
};
