/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { FC, PropsWithChildren } from 'react';
import { ThemeProvider, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { ToastProvider } from '@zendeskgarden/react-notifications';
import { MarkdownProvider } from './MarkdownProvider';

const theme = {
  ...DEFAULT_THEME,
  colors: { ...DEFAULT_THEME.colors, base: 'dark' },
  palette: { ...DEFAULT_THEME.palette, tofu: '#F6F4F4', oatMilk: '#EDE0CF' }
};

const toastPlacement = {
  'top-end': { style: { top: theme.space.base * 3 } }
};

export const Provider: FC<PropsWithChildren> = ({ children }) => {
  return (
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
  );
};
