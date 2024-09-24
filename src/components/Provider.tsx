/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { FC, PropsWithChildren, useMemo } from 'react';
import { ThemeProvider, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { ToastProvider } from '@zendeskgarden/react-notifications';
import { MarkdownProvider } from './MarkdownProvider';
import { ColorScheme, ColorSchemeContext } from './useColorSchemeContext';
import { useColorScheme } from './useColorScheme';

const WEBSITE_THEME = {
  ...DEFAULT_THEME,
  palette: { ...DEFAULT_THEME.palette, tofu: '#F6F4F4', oatMilk: '#EDE0CF' }
};

const toastPlacement = {
  'top-end': { style: { top: WEBSITE_THEME.space.base * 3 } }
};

export const Provider: FC<PropsWithChildren> = ({ children }) => {
  const { isSystem, colorScheme, setColorScheme } = useColorScheme();
  const theme = { ...WEBSITE_THEME, colors: { ...WEBSITE_THEME.colors, base: colorScheme } };

  const contextValue = useMemo(
    () => ({ colorScheme: isSystem ? 'system' : (colorScheme as ColorScheme), setColorScheme }),
    [isSystem, colorScheme, setColorScheme]
  );

  return typeof window === 'undefined' ? null /* prevent color scheme flash */ : (
    <ColorSchemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        <div
          css={`
            width: 100%;
            height: 100%;
          `}
        >
          <ToastProvider placementProps={toastPlacement} zIndex={2}>
            <MarkdownProvider>{children}</MarkdownProvider>
          </ToastProvider>
        </div>
      </ThemeProvider>
    </ColorSchemeContext.Provider>
  );
};
