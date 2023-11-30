/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { GatsbyNode } from 'gatsby';
import { createRemoteFileNode } from 'gatsby-source-filesystem';
import { createNodeHelpers } from 'gatsby-node-helpers';
import {
  getNewsMetadata,
  getNavigationMetadata,
  getFigmaAssetsMetadata,
  fetchFigmaFileDocument,
  fetchFigmaFileNodes,
  fetchFigmaImages,
  transformNavigation
} from './utils';

// graphql types
const TYPE_PREFIX = 'Garden';
const GARDEN_NEWS_ID = 'News';
const GARDEN_NAV_ID = 'Navigation';
const GARDEN_FIGMA_ID = 'FigmaAsset';
// identifiers
const PLUGIN_NAME = 'garden-content';
const GATSBY_PLUGIN_NAME = `gatsby-source-${PLUGIN_NAME}`;
const CACHE_PREFIX = `cache-${PLUGIN_NAME}`;
// cache keys
let newsCacheKey = `${CACHE_PREFIX}-news`;
let navCacheKey = `${CACHE_PREFIX}-nav`;
let figmaDictionaryCacheKey = `${CACHE_PREFIX}-figma-dictionary`;
let figmaAssetsCacheKey = `${CACHE_PREFIX}-figma-assets`;

export const pluginOptionsSchema: GatsbyNode['pluginOptionsSchema'] = ({ Joi }) => {
  return Joi.object({
    figmaApiToken: Joi.string()
  });
};

export const onPreBootstrap: GatsbyNode['onPreBootstrap'] = async (
  { tracing, reporter, cache },
  config
) => {
  const span = tracing.startSpan(`${GATSBY_PLUGIN_NAME}:bootstrap`);

  try {
    reporter.info('read and cache content data');

    reporter.info('load news content from source');
    span.setTag(PLUGIN_NAME, 'load-news');
    const { news, hash: newsHash } = getNewsMetadata();

    newsCacheKey = [newsCacheKey, newsHash].join('-');

    if (!!(await cache.get(newsCacheKey)) === false) {
      reporter.info('cache news content');
      span.setTag(PLUGIN_NAME, 'caching-news');
      await cache.set(newsCacheKey, news);
    }

    reporter.info('load nav content from source');
    span.setTag(PLUGIN_NAME, 'load-nav');
    const { hash: navHash, ...nav } = getNavigationMetadata();

    navCacheKey = [navCacheKey, navHash].join('-');

    if (!!(await cache.get(navCacheKey)) === false) {
      reporter.info('cache nav content');
      span.setTag(PLUGIN_NAME, 'caching-nav');
      await cache.set(navCacheKey, nav);
    }

    reporter.info('load Figma content dictionary from source');
    span.setTag(PLUGIN_NAME, 'load-figma-dictionary');
    const { hash: assetsHash, ...figmaDictionary } = getFigmaAssetsMetadata();

    figmaDictionaryCacheKey = [figmaDictionaryCacheKey, assetsHash].join('-');

    if (!!(await cache.get(figmaDictionaryCacheKey)) === false) {
      reporter.info('cache Figma content dictionary');
      span.setTag(PLUGIN_NAME, 'caching-figma-dictionary');
      await cache.set(figmaDictionaryCacheKey, figmaDictionary);
    }

    if (figmaDictionary) {
      reporter.info('load remote Figma image assets');

      const figmaApiToken = (config.figmaApiToken as string) || process.env.FIGMA_TOKEN;
      const { fileId, nodeIds, scale } = figmaDictionary;

      if (!figmaApiToken) {
        throw new Error(
          'Figma API key is missing, please check if the `FIGMA_TOKEN` environment variable is set'
        );
      }

      span.setTag(PLUGIN_NAME, 'fetching-remote-figma-assets-document');
      const { lastModified } = await fetchFigmaFileDocument({ figmaApiToken, fileId });

      figmaAssetsCacheKey = [figmaAssetsCacheKey, fileId, lastModified].join('-');

      if (!!(await cache.get(figmaAssetsCacheKey)) === false) {
        reporter.info('fetch Figma image assets from API');

        span.setTag(PLUGIN_NAME, 'fetching-remote-figma-assets-nodes');
        const { nodes } = await fetchFigmaFileNodes({
          figmaApiToken,
          fileId,
          nodeIds
        });

        span.setTag(PLUGIN_NAME, 'fetching-remote-figma-assets-images');
        const { images } = await fetchFigmaImages({
          figmaApiToken,
          fileId,
          nodeIds,
          scale
        });

        const gatsbyFigmaImages = [];

        span.setTag(PLUGIN_NAME, 'validating-remote-figma-assets-images');
        for (const nodeId of nodeIds) {
          const node = nodes[nodeId];
          const image = images[nodeId];

          if (!node) {
            reporter.warn(
              `Figma image node ID "${nodeId}" was not found, please check the ID is correct and it is present in the Figma file`
            );
            // eslint-disable-next-line no-negated-condition
          } else if (!image) {
            reporter.warn(
              `Figma image "${nodeId}" was not found, please check if it was exported properly from the Figma file`
            );
          } else {
            gatsbyFigmaImages.push({
              id: nodeId,
              name: node.document.name,
              imageUrl: image
            });
          }
        }

        span.setTag(PLUGIN_NAME, 'caching-remote-figma-assets-images');
        await cache.set(figmaAssetsCacheKey, gatsbyFigmaImages);
      } else {
        reporter.info('loaded remote Figma images from the cache');
      }
    }
  } catch (error: unknown) {
    const errorMessage = (error as Error).message as string;

    span.log({ error: true, message: errorMessage });

    reporter.panic(errorMessage, error as Error);
  }

  span.finish();
};

export const sourceNodes: GatsbyNode['sourceNodes'] = async ({
  cache,
  actions,
  createNodeId,
  createContentDigest
}) => {
  const { createNode } = actions;
  const { createNodeFactory, createTypeName } = createNodeHelpers({
    typePrefix: TYPE_PREFIX,
    createNodeId,
    createContentDigest
  });

  const gardenNewsNode = createNodeFactory(GARDEN_NEWS_ID);
  const news = await cache.get(newsCacheKey);

  await Promise.all(
    news.map((node: any, id: number) => createNode(gardenNewsNode({ id, ...node })))
  );

  const gardenFigmaNode = createNodeFactory(GARDEN_FIGMA_ID);
  const figma = await cache.get(figmaAssetsCacheKey);

  await Promise.all(
    await figma.map(async (node: any) => {
      createNode(
        gardenFigmaNode({
          ...node,
          id: createNodeId(node.id),
          imageUrl: node.imageUrl
        })
      );
    })
  );

  // const gardenNavNode = createNodeFactory(GARDEN_NAV_ID);
  const nav = await cache.get(navCacheKey);

  transformNavigation(nav, { createNodeId }).forEach(group => {
    group.forEach(function traverse({ items, ...node }) {
      createNode({
        ...node,
        internal: {
          type: createTypeName(GARDEN_NAV_ID),
          contentDigest: createContentDigest(node)
        }
      });

      if (items && items.length > 0) {
        items.forEach(traverse);
      }
    });
  });
};

export const onCreateNode: GatsbyNode['onCreateNode'] = async ({
  node,
  actions: { createNode, createNodeField },
  createNodeId,
  createContentDigest,
  getCache
}) => {
  const { createTypeName } = createNodeHelpers({
    typePrefix: TYPE_PREFIX,
    createNodeId,
    createContentDigest
  });

  if (node.internal.type === createTypeName(GARDEN_FIGMA_ID)) {
    const fileNode = await createRemoteFileNode({
      ...node,
      url: node.imageUrl as any,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      getCache
    });

    if (fileNode) {
      createNodeField({ node, name: 'localFile', value: fileNode.id });
    }
  }
};

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({
  actions,
  schema,
  createNodeId,
  createContentDigest
}) => {
  const { createTypes } = actions;
  const { createTypeName } = createNodeHelpers({
    typePrefix: TYPE_PREFIX,
    createNodeId,
    createContentDigest
  });

  createTypes([
    `type ${createTypeName(GARDEN_FIGMA_ID)} implements Node {
      childFile: File @link(from: "fields.localFile")
    }`,
    `type ${createTypeName(GARDEN_NAV_ID)} implements Node {
      id: ID
      title: String
      group: String
      url: String
      root: Boolean
      items: [${createTypeName(GARDEN_NAV_ID)}] @link(from: "children")
    }`,
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
  ]);
};
