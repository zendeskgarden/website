/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useCallback, useEffect, useState } from 'react';
import { IGardenTheme } from '@zendeskgarden/react-theming';
import { ColorScheme } from './useColorSchemeContext';

export const useColorScheme = (initialState?: ColorScheme) => {
  /* eslint-disable-next-line n/no-unsupported-features/node-builtins */
  const localStorage = typeof window === 'undefined' ? undefined : window.localStorage;
  const mediaQuery =
    typeof window === 'undefined' ? undefined : window.matchMedia('(prefers-color-scheme: dark)');

  const getState = useCallback(
    (_state?: ColorScheme | null) => {
      const isSystem = _state === 'system' || _state === undefined || _state === null;
      let colorScheme: IGardenTheme['colors']['base'];

      if (isSystem) {
        colorScheme = mediaQuery?.matches ? 'dark' : 'light';
      } else {
        colorScheme = _state;
      }

      return { isSystem, colorScheme };
    },
    [mediaQuery?.matches]
  );

  const [state, setState] = useState<{
    isSystem: boolean;
    colorScheme: IGardenTheme['colors']['base'];
  }>(getState(initialState || (localStorage?.getItem('color-scheme') as ColorScheme)));

  useEffect(() => {
    // Listen for changes to the system color scheme
    const eventListener = () => {
      setState(getState('system'));
    };

    if (state.isSystem) {
      mediaQuery?.addEventListener('change', eventListener);
    } else {
      mediaQuery?.removeEventListener('change', eventListener);
    }

    return () => {
      mediaQuery?.removeEventListener('change', eventListener);
    };
  }, [getState, state.isSystem, mediaQuery]);

  return {
    isSystem: state.isSystem,
    colorScheme: state.colorScheme,
    setColorScheme: (colorScheme: ColorScheme) => {
      setState(getState(colorScheme));
      localStorage?.setItem('color-scheme', colorScheme);
    }
  };
};
