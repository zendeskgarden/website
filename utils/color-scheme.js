/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

(() => {
  /* eslint-disable-next-line n/no-unsupported-features/node-builtins */
  const colorScheme = window.localStorage.getItem('color-scheme');

  if (!['dark', 'light', 'system'].includes(colorScheme)) {
    /* eslint-disable-next-line n/no-unsupported-features/node-builtins */
    window.localStorage.setItem('color-scheme', 'system');
  }
})();
