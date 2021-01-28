/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { getColor } from '@zendeskgarden/react-theming';
import { SkipNav } from '@zendeskgarden/react-chrome';
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
  * {
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }
`;

interface IRootLayoutProps {
  hasSkipNav?: boolean;
}

const RootLayout: React.FC<IRootLayoutProps> = ({ children, hasSkipNav }) => {
  return (
    <div
      css={`
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      `}
    >
      <GlobalStyling />
      {hasSkipNav && (
        <SkipNav
          targetId="main-content"
          zIndex={2}
          css={`
            top: 40px;
            box-shadow: ${p =>
              p.theme.shadows.lg(
                `${p.theme.space.base * 4}px`,
                `${p.theme.space.base * 6}px`,
                getColor('grey', 800, p.theme, 0.05)!
              )};
          `}
        >
          Skip to main content
        </SkipNav>
      )}
      <Header />
      <main
        css={`
          flex-grow: 1;
          flex-shrink: 1;
        `}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

RootLayout.defaultProps = {
  hasSkipNav: true
};

export default RootLayout;
