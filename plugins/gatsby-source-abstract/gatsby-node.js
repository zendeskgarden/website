/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const createNodeHelpers = require('gatsby-node-helpers').default;
const envalid = require('envalid');
const AbstractSdk = require('abstract-sdk');
const Bottleneck = require('bottleneck');
const { createRemoteFileNode } = require('gatsby-source-filesystem');

require('dotenv').config();
envalid.cleanEnv(process.env, { ABSTRACT_TOKEN: envalid.str() });

/** Limit Abstract requests to avoid rate limiting */
const rateLimiter = new Bottleneck({
  minTime: 600
});

const { createNodeFactory } = createNodeHelpers({
  typePrefix: 'Abstract'
});

const abstractFileNode = createNodeFactory('File');
const abstractAssetNode = createNodeFactory('Asset', node => {
  node.internal.mediaType = 'image/png';

  return node;
});

exports.sourceNodes = async (
  { actions: { createNode, createParentChildLink }, createNodeId, cache, getCache, reporter },
  configOptions
) => {
  const abstractClient = new AbstractSdk.Client({
    accessToken: configOptions.apiToken
  });

  const files = await rateLimiter.schedule(() => {
    reporter.info('Retrieving files from Abstract...');

    return abstractClient.files.list({
      projectId: configOptions.projectId,
      branchId: configOptions.branch,
      sha: configOptions.sha
    });
  });

  return Promise.all(
    files.map(async file => {
      const fileNode = abstractFileNode(file);

      await createNode(fileNode);

      const FILE_CACHE_KEY = `abstract-file-${file.id}-${file.lastChangedAtSha}`;

      try {
        let assets = await cache.get(FILE_CACHE_KEY);

        if (assets) {
          reporter.info(`Retrieving assets for file "${file.name}" with CACHE...`);
        } else {
          assets = await rateLimiter.schedule(() => {
            reporter.info(`Retrieving assets for file "${file.name}" with API...`);

            return abstractClient.assets.file({
              projectId: configOptions.projectId,
              branchId: configOptions.branch,
              fileId: file.id,
              sha: file.sha
            });
          });

          cache.set(FILE_CACHE_KEY, assets);
        }

        /**
         * TEMPORARY
         *
         * The Abstract SDK does not filter by `sha` https://github.com/goabstract/abstract-sdk/issues/230
         */
        assets = assets.filter(asset => asset.sha === file.sha);

        return Promise.all(
          assets.map(async asset => {
            const assetNode = abstractAssetNode(asset, {
              parent: fileNode.id
            });

            await createNode(assetNode);

            createParentChildLink({ parent: fileNode, child: assetNode });

            await createRemoteFileNode({
              url: assetNode.url,
              parentNodeId: assetNode.id,
              getCache,
              createNode,
              createNodeId,
              httpHeaders: {
                Authorization: `Bearer ${configOptions.apiToken}`
              },
              ext: `.${assetNode.fileFormat}`,
              name: `${assetNode.layerName}${assetNode.formatName && `-${assetNode.formatName}`}`,
              reporter
            });
          })
        );
      } catch (error) {
        reporter.warn(`Unable to retrieve assets for file "${file.name}"`, error);
      }

      return true;
    })
  );
};
