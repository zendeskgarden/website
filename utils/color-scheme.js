/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

(() => {
  const colorScheme = window.localStorage.getItem('color-scheme');

  if (!['dark', 'light', 'system'].includes(colorScheme)) {
    window.localStorage.setItem('color-scheme', 'system');
  }
})();
