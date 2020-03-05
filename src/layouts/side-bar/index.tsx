/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import { math } from 'polished';
import { getColor } from '@zendeskgarden/react-theming';

export const SidebarLayout: React.FC<{ sidebar?: React.ReactNode }> = ({ sidebar, children }) => {
  return (
    <div
      css={`
        display: flex;
      `}
    >
      <div
        css={css`
          border-right: ${p =>
            `${math(`${p.theme.borderWidths.sm} / 2`)} ${p.theme.borderStyles.solid} ${getColor(
              'neutralHue',
              400,
              p.theme
            )}`};
          width: 300px;
        `}
      >
        <div
          css={css`
            position: sticky;
            top: 80px;
            padding: ${p => p.theme.space.lg};
            height: calc(100vh - 140px);
            overflow-y: auto;
          `}
        >
          {sidebar}
        </div>
      </div>
      <main
        css={css`
          flex-grow: 1;
        `}
      >
        {children}
      </main>
    </div>
  );
};
