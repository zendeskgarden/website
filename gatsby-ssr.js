/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Provider, Layout } from './src/components';
import __html from '!!raw-loader!./utils/color-mode.js';

export const wrapRootElement = ({ props, element }) => <Provider {...props}>{element}</Provider>;

export const wrapPageElement = ({ props, element }) => <Layout {...props}>{element}</Layout>;

export const onRenderBody = ({
  setHtmlAttributes,
  setHeadComponents,
  setPreBodyComponents,
  setPostBodyComponents
}) => {
  setHtmlAttributes({ lang: 'en' });

  const version = 2;

  setHeadComponents([
    <link
      key="docsearch-css"
      rel="stylesheet"
      href={`https://cdn.jsdelivr.net/npm/docsearch.js@${version}/dist/cdn/docsearch.min.css`}
    />
  ]);

  /* eslint-disable-next-line react/no-danger */
  setPreBodyComponents([<script key="color-mode-js" dangerouslySetInnerHTML={{ __html }} />]);

  setPostBodyComponents([
    <script
      key="docsearch-js"
      type="text/javascript"
      src={`https://cdn.jsdelivr.net/npm/docsearch.js@${version}/dist/cdn/docsearch.min.js`}
    />
  ]);
};
