/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { PropsWithChildren, useEffect, useLayoutEffect, useState } from 'react';
import { css } from 'styled-components';
import { getColor } from '@zendeskgarden/react-theming';
import { GlobalAlert } from '@zendeskgarden/react-notifications';
import { Anchor } from '@zendeskgarden/react-buttons';
import { SkipNav } from '@zendeskgarden/react-chrome';
import Footer from './components/Footer';
import Header, { headerBoxShadow, headerHeight } from './components/Header';

interface IRootLayoutProps extends PropsWithChildren {
  hasSkipNav?: boolean;
  path?: string;
}

const RootLayout: React.FC<IRootLayoutProps> = ({ children, hasSkipNav = true, path }) => {
  const [isGlobalAlertVisible, setIsGlobalAlertVisible] = useState(true);

  useLayoutEffect(() => {
    // Initial global alert render
    const hidden =
      new Date() > new Date('2025-01-01T00:00:00Z') ||
      /* eslint-disable-next-line n/no-unsupported-features/node-builtins */
      window.localStorage.getItem('global-alert-v9') === 'hidden';

    setIsGlobalAlertVisible(!hidden);
  }, []);

  useEffect(() => {
    // Handle user dismissed global alert
    if (!isGlobalAlertVisible) {
      /* eslint-disable-next-line n/no-unsupported-features/node-builtins */
      window.localStorage.setItem('global-alert-v9', 'hidden');
    }
  }, [isGlobalAlertVisible]);

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        color: ${p => getColor({ theme: p.theme, variable: 'foreground.default' })};
      `}
    >
      {!!isGlobalAlertVisible && (
        <GlobalAlert type="info">
          <GlobalAlert.Content>
            <GlobalAlert.Title>Garden 9 is now available.</GlobalAlert.Title>
            The website has been updated to the latest major version.{' '}
            <Anchor href="/components/versions">View previous versions</Anchor>
          </GlobalAlert.Content>
          <GlobalAlert.Close
            aria-label="Close v9 alert"
            onClick={() => {
              setIsGlobalAlertVisible(false);
            }}
          />
        </GlobalAlert>
      )}
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
