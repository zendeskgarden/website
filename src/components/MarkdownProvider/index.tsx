/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { MDXProvider } from '@mdx-js/react';

import { CodeExample } from './components/CodeExample';
import { PackageDescription } from './components/PackageDescription';
import { PropSheets } from './components/PropSheets';
import { H2, H3, H4, H5, H6, P } from './components/typography';

const GlobalStyle = createGlobalStyle`
  .anchor {
    visibility: hidden;
    margin-left: -${p => p.theme.space.md};
    padding-right: ${p => p.theme.space.xxs};
    line-height: 1;
    color: ${p => p.theme.colors.foreground};
  }

  .anchor:hover {
    color: inherit;
  }

  .anchor[data-garden-focus-visible] {
    visibility: visible;
  }

  h2:hover .anchor,
  h3:hover .anchor,
  h4:hover .anchor,
  h5:hover .anchor,
  h6:hover .anchor {
    visibility: visible;
  }
`;

export const MarkdownProvider: React.FC = ({ children }) => (
  <div>
    <GlobalStyle />
    <MDXProvider
      components={{
        CodeExample,
        PackageDescription,
        PropSheets,
        h2: H2,
        h3: H3,
        h4: H4,
        h5: H5,
        h6: H6,
        p: P
      }}
    >
      {children}
    </MDXProvider>
  </div>
);
