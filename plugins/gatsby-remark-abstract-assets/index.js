/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const path = require(`path`);
const visit = require(`unist-util-visit`);
const cheerio = require(`cheerio`);

/**
 * This plugin allows markdown images to support referencing Abstract assets.
 *
 * `[Alt text](abstract:{LAYER_NAME}-{FORMAT}.{EXTENSION})`
 */
module.exports = ({ files, markdownNode, markdownAST, getNode }) => {
  const retrieveAbstractUrl = imageUrl => {
    /**
     * Only transform images that match the abstract template
     */
    if (!imageUrl.startsWith('abstract:')) {
      return imageUrl;
    }

    const layerFileName = imageUrl.replace('abstract:', '');
    const matchingFileNode = files.find(file => file.base === layerFileName);

    /**
     * Transform if matching File is found
     */
    if (!matchingFileNode) {
      return imageUrl;
    }

    const parentDirectory = getNode(markdownNode.parent).dir;

    return path.relative(parentDirectory, matchingFileNode.absolutePath);
  };

  /**
   * Update markdown image path to Abstract Asset
   */
  visit(markdownAST, 'image', image => {
    image.url = retrieveAbstractUrl(image.url);
  });

  /**
   * Parse and update <img> nodes in HTML and JSX
   */
  visit(markdownAST, ['html', 'jsx'], node => {
    if (!node.value) {
      return;
    }

    const $ = cheerio.load(node.value);
    const images = $('img');

    if (images.length === 0) {
      return;
    }

    const srcMappings = {};

    images.each(function imageIterator() {
      // eslint-disable-next-line no-invalid-this
      const imageNode = $(this); // this is necessary for cheerio usage
      const originalSrc = imageNode.attr('src');

      srcMappings[originalSrc] = retrieveAbstractUrl(originalSrc);
    });

    for (const originalSrc of Object.keys(srcMappings)) {
      node.value = node.value.replace(originalSrc, srcMappings[originalSrc]);
    }
  });

  return markdownAST;
};
