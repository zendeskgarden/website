/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';

export const MaxWidthLayout: React.FC = ({ children }) => (
  <div
    css={css`
      margin-right: auto;
      margin-left: auto;
      max-width: ${p => p.theme.breakpoints.xl};
    `}
  >
    {children}
  </div>
);

export default MaxWidthLayout;
