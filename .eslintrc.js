/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/**
 * Disables Gatsby's built-in eslint-loader called by `gatsby develop`.
 * @see https://www.gatsbyjs.com/docs/how-to/custom-configuration/eslint/#disabling-eslint
 * Rules required by Gatsby for fast-refresh are automatcally applied.
 * @see https://github.com/gatsbyjs/gatsby/blob/gatsby%405.13.6/packages/gatsby/src/utils/webpack.config.js#L269
 * @see https://github.com/gatsbyjs/gatsby/blob/gatsby%405.13.6/packages/gatsby/src/utils/webpack-utils.ts#L820-L846
 * This does not interfere with this project ESLint V9's flat config.
 */
module.exports = {};
