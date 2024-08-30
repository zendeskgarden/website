/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useCallback, useEffect, useState } from 'react';
import { IGardenTheme } from '@zendeskgarden/react-theming';
import { ColorScheme } from './useColorSchemeContext';

export const useColorScheme = (initialState: ColorScheme | undefined) => {
  const mediaQuery = matchMedia('(prefers-color-scheme: dark)');

  const getState = useCallback(
    (_state: ColorScheme | undefined) => {
      const isSystem = _state === 'system' || _state === undefined;
      let colorScheme: IGardenTheme['colors']['base'];

      if (isSystem) {
        colorScheme = mediaQuery.matches ? 'dark' : 'light';
      } else {
        colorScheme = _state;
      }

      return { isSystem, colorScheme };
    },
    [mediaQuery.matches]
  );

  const [state, setState] = useState<{
    isSystem: boolean;
    colorScheme: IGardenTheme['colors']['base'];
  }>(getState(initialState));

  useEffect(() => {
    const eventListener = () => {
      // Listen for changes to the system color scheme
      state.isSystem && setState(getState(undefined));
    };

    mediaQuery.addEventListener('change', eventListener);

    return () => {
      mediaQuery.removeEventListener('change', eventListener);
    };
  }, [mediaQuery, state.isSystem, getState]);

  return {
    isSystem: state.isSystem,
    colorScheme: state.colorScheme,
    setColorScheme: (colorScheme: ColorScheme) => {
      setState(getState(colorScheme));
    }
  };
};
