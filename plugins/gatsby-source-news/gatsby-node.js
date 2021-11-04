/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const { createNodeHelpers } = require('gatsby-node-helpers');

const TYPE_PREFIX = 'Garden';
const GARDEN_NEWS_ID = 'News';

/**
 * Retrieve Garden news items from yaml file
 */
exports.sourceNodes = ({ actions, reporter, createNodeId, createContentDigest }) => {
  const { createNodeFactory } = createNodeHelpers({
    typePrefix: TYPE_PREFIX,
    createNodeId,
    createContentDigest
  });

  const gardenNewsNode = createNodeFactory(GARDEN_NEWS_ID);

  const { createNode } = actions;

  const news = yaml.load(
    fs.readFileSync(path.resolve(__dirname, '../../content/news/news.yml'), 'utf-8')
  );

  reporter.info('Reading news.yml...');

  for (let i = 0; i < news.length; i++) {
    const node = gardenNewsNode({ id: i, ...news[i] });

    createNode(node);
  }
};

/**
 * Link relative url in `image` field to a `File` node
 */
exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;

  const { createTypeName } = createNodeHelpers({
    typePrefix: TYPE_PREFIX
  });

  const typeDefs = [
    schema.buildObjectType({
      name: createTypeName(GARDEN_NEWS_ID),
      fields: {
        image: {
          type: 'File',
          resolve(source, args, context) {
            return context.nodeModel.runQuery({
              query: {
                filter: { sourceInstanceName: { eq: 'news' }, relativePath: { eq: source.image } }
              },
              type: 'File',
              firstOnly: true
            });
          }
        }
      },
      interfaces: ['Node']
    })
  ];

  createTypes(typeDefs);
};
