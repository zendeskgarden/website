/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import { getColor } from '@zendeskgarden/react-theming';

export const HeadlineLayout: React.FC<{ headline?: React.ReactNode }> = ({
  headline,
  children
}) => (
  <>
    <div
      css={css`
        background-color: ${p => getColor('green', 100, p.theme)};
        height: 200px;
      `}
    >
      {headline}
    </div>
    <div>{children}</div>
  </>
);
