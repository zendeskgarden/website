/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const createNodeHelpers = require('gatsby-node-helpers').default;

const { createNodeFactory, generateTypeName } = createNodeHelpers({
  typePrefix: `Garden`
});

const GARDEN_NEWS_ID = 'News';

const gardenNewsNode = createNodeFactory(GARDEN_NEWS_ID);

exports.sourceNodes = ({ actions }) => {
  const { createNode } = actions;

  const news = yaml.safeLoad(
    fs.readFileSync(path.resolve(__dirname, '../../content/news/news.yml'), 'utf-8')
  );

  for (const newsItem of news) {
    const node = gardenNewsNode(newsItem);

    createNode(node);
  }
};

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    [generateTypeName(GARDEN_NEWS_ID)]: {
      imageFile: {
        type: 'File',
        resolve(source, args, context) {
          return context.nodeModel.runQuery({
            query: {
              filter: { sourceInstanceName: { eq: 'news' }, relativeDirectory: { eq: 'images' } }
            },
            type: 'File',
            firstOnly: true
          });
        }
      }
    }
  };

  createResolvers(resolvers);
};
