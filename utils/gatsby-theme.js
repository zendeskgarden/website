/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { createRef } from 'react';
import { ThemeProvider, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { ToastProvider } from '@zendeskgarden/react-notifications';

export const wrapRootElement = ({ element }) => {
  const focusVisibleRef = createRef(null);

  const theme = {
    ...DEFAULT_THEME,
    palette: { ...DEFAULT_THEME.palette, tofu: '#F6F4F4', oatMilk: '#EDE0CF' }
  };

  const toastPlacement = {
    'top-end': { style: { top: DEFAULT_THEME.space.base * 3 } }
  };

  return (
    <ThemeProvider focus={focusVisibleRef} theme={theme}>
      <div
        ref={focusVisibleRef}
        css={`
          width: 100%;
          height: 100%;
        `}
      >
        <ToastProvider placementProps={toastPlacement} zIndex={2}>
          {element}
        </ToastProvider>
      </div>
    </ThemeProvider>
  );
};
