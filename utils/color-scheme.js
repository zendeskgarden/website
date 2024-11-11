/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

(() => {
  /* eslint-disable n/no-unsupported-features/node-builtins */
  const colorScheme = window.localStorage.getItem('color-scheme');
  let isDark;

  if (['dark', 'light', 'system'].includes(colorScheme)) {
    isDark =
      colorScheme === 'dark' ||
      (colorScheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  } else {
    window.localStorage.setItem('color-scheme', 'system');
    isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  if (isDark) {
    document.documentElement.style.backgroundColor = '#151a1e';
  }
})();
