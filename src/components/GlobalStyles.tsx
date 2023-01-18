/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createGlobalStyle } from 'styled-components';

/**
 * Global styling
 */
import '@zendeskgarden/css-bedrock/dist/index.css';

/**
 * Ensure Gatsby wrapping nodes are full height
 */
export const GlobalStyles = createGlobalStyle`
  * {
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }

  /* see: https://github.com/gatsbyjs/gatsby/issues/37049 */
  main a > div:has(svg) {
    display: inherit;
    position: absolute;
    transform: translate(-50%, -10%);
  }
`;
