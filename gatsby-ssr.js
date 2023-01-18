/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';

import { Provider, Layout } from './src/components';

export const wrapRootElement = ({ props, element }) => <Provider {...props}>{element}</Provider>;

export const wrapPageElement = ({ props, element }) => <Layout {...props}>{element}</Layout>;

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents, setPostBodyComponents }) => {
  setHtmlAttributes({ lang: 'en' });

  // Algolia
  const algoliaDocsearchVersion = 2;

  setHeadComponents([
    <link
      key="docsearch-css"
      rel="stylesheet"
      href={`https://cdn.jsdelivr.net/npm/docsearch.js@${algoliaDocsearchVersion}/dist/cdn/docsearch.min.css`}
    />
  ]);

  setPostBodyComponents([
    <script
      key="docsearch-js"
      type="text/javascript"
      src={`https://cdn.jsdelivr.net/npm/docsearch.js@${algoliaDocsearchVersion}/dist/cdn/docsearch.min.js`}
    />
  ]);
};
