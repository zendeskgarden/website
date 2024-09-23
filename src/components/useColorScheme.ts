/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useEffect, useRef, useState } from 'react';
import { IGardenTheme } from '@zendeskgarden/react-theming';
import { ColorScheme } from './useColorSchemeContext';

export const useColorScheme = (initialState?: ColorScheme) => {
  const mediaQuery = useRef<MediaQueryList | undefined>(
    typeof window === 'undefined' ? undefined : window.matchMedia('(prefers-color-scheme: dark)')
  );

  const getState = (_state?: ColorScheme) => {
    const isSystem = _state === 'system' || _state === undefined;
    let colorScheme: IGardenTheme['colors']['base'];

    if (isSystem) {
      colorScheme = mediaQuery.current?.matches ? 'dark' : 'light';
    } else {
      colorScheme = _state;
    }

    return { isSystem, colorScheme };
  };

  const [state, setState] = useState<{
    isSystem: boolean;
    colorScheme: IGardenTheme['colors']['base'];
  }>(getState(initialState));

  useEffect(() => {
    // Listen for changes to the system color scheme
    const eventListener = () => {
      setState(getState('system'));
    };

    const _mediaQuery = mediaQuery.current;

    if (state.isSystem) {
      _mediaQuery?.addEventListener('change', eventListener);
    } else {
      _mediaQuery?.removeEventListener('change', eventListener);
    }

    return () => {
      _mediaQuery?.removeEventListener('change', eventListener);
    };
  }, [state.isSystem]);

  return {
    isSystem: state.isSystem,
    colorScheme: state.colorScheme,
    setColorScheme: (colorScheme: ColorScheme) => {
      setState(getState(colorScheme));
    }
  };
};
