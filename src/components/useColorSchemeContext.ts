/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { IGardenTheme } from '@zendeskgarden/react-theming';
import { createContext, useContext } from 'react';

export type ColorScheme = IGardenTheme['colors']['base'] | 'system';

export const ColorSchemeContext = createContext<
  | {
      colorScheme: ColorScheme;
      setColorScheme: (colorScheme: ColorScheme) => void;
    }
  | undefined
>(undefined);

export const useColorSchemeContext = () => {
  const context = useContext(ColorSchemeContext);

  if (!context) {
    throw new Error('Error: this component must be rendered within a <ColorSchemeProvider>.');
  }

  return context;
};
