/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { PropsWithChildren } from 'react';
import { css } from 'styled-components';
import { getColor } from '@zendeskgarden/react-theming';
import { SkipNav } from '@zendeskgarden/react-chrome';
import Footer from './components/Footer';
import Header, { headerBoxShadow, headerHeight } from './components/Header';

interface IRootLayoutProps extends PropsWithChildren {
  hasSkipNav?: boolean;
  path?: string;
}

const RootLayout: React.FC<IRootLayoutProps> = ({ children, hasSkipNav = true, path }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        color: ${p => getColor({ theme: p.theme, variable: 'foreground.default' })};
      `}
    >
      {!!hasSkipNav && (
        <SkipNav
          targetId="main-content"
          zIndex={2}
          css={css`
            top: ${p => headerHeight(p.theme) / 2}px;
            box-shadow: ${p => headerBoxShadow(p.theme)};
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
      <Footer path={path} />
    </div>
  );
};

export default RootLayout;
