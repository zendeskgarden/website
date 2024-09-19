/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

(() => {
  let colorMode = window.localStorage.getItem('color-mode');

  if (colorMode === null) {
    const value = {
      isSystem: true,
      colorScheme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    };

    colorMode = JSON.stringify(value);
    window.localStorage.setItem('color-mode', colorMode);
  }

  window.document.documentElement.setAttribute('data-color-mode', colorMode);
})();
