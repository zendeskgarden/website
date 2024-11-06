/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { FC, PropsWithChildren, useEffect, useMemo } from 'react';
import { HydrationProvider, useHydrated } from 'react-hydration-provider';
import { ThemeProvider, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { ToastProvider } from '@zendeskgarden/react-notifications';
import { MarkdownProvider } from './MarkdownProvider';
import { ColorScheme, ColorSchemeContext } from './useColorSchemeContext';
import { useColorScheme } from './useColorScheme';

const toastPlacement = {
  'top-end': { style: { top: DEFAULT_THEME.space.base * 3 } }
};

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  const isHydrated = useHydrated();

  useEffect(() => {
    if (isHydrated) {
      // Clear the SSR background color injected by the `setPreBodyComponents` script
      document.documentElement.style.backgroundColor = '';
    }
  }, [isHydrated]);

  return (
    <div
      css={`
        width: 100%;
        height: 100%;
      `}
      /* Control for flash of un-themed SSR content, while continuing to make
       * server-rendered content available for for search indexing */
      style={{ visibility: isHydrated ? 'visible' : 'hidden' }}
    >
      {children}
    </div>
  );
};

export const Provider: FC<PropsWithChildren> = ({ children }) => {
  const { isSystem, colorScheme, setColorScheme } = useColorScheme();
  const theme = { ...DEFAULT_THEME, colors: { ...DEFAULT_THEME.colors, base: colorScheme } };

  const contextValue = useMemo(
    () => ({ colorScheme: isSystem ? 'system' : (colorScheme as ColorScheme), setColorScheme }),
    [isSystem, colorScheme, setColorScheme]
  );

  return (
    <HydrationProvider>
      <ColorSchemeContext.Provider value={contextValue}>
        <ThemeProvider theme={theme}>
          <Wrapper>
            <ToastProvider placementProps={toastPlacement} zIndex={2}>
              <MarkdownProvider>{children}</MarkdownProvider>
            </ToastProvider>
          </Wrapper>
        </ThemeProvider>
      </ColorSchemeContext.Provider>
    </HydrationProvider>
  );
};
