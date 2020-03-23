/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';

/**
 * Global styling
 */
import '@zendeskgarden/css-bedrock/dist/index.css';

/**
 * Ensure Gatsby wrapping nodes are full height
 */
const GlobalStyling = createGlobalStyle`
  /* stylelint-disable-next-line selector-max-id, selector-max-specificity */
  html,
  body,
  #___gatsby,
  #___gatsby > div,
  #gatsby-focus-wrapper {
    height: 100%;
  }
`;

const RootLayout: React.FC = ({ children }) => {
  return (
    <div
      css={`
        display: flex;
        flex-direction: column;
        height: 100%;
      `}
    >
      <GlobalStyling />
      <Header />
      <div
        css={`
          flex-grow: 1;
          flex-shrink: 1;
        `}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
