/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import { math } from 'polished';
import { XXXL, LG, SM } from '@zendeskgarden/react-typography';
import { getColor } from '@zendeskgarden/react-theming';

export const TitledLayout: React.FC<{
  title: React.ReactNode;
  description?: React.ReactNode;
  author?: React.ReactNode;
  modifiedDate?: React.ReactNode;
}> = ({ title, description, author, modifiedDate, children }) => {
  return (
    <>
      <div
        css={css`
          border-bottom: ${p =>
            `${math(`${p.theme.borderWidths.sm} / 2`)} ${p.theme.borderStyles.solid} ${getColor(
              'neutralHue',
              400,
              p.theme
            )}`};
        `}
      >
        <XXXL
          tag="h1"
          css={css`
            margin-bottom: ${p => p.theme.space.sm};
          `}
        >
          {title}
        </XXXL>
        {description && (
          <LG
            css={css`
              margin-bottom: ${p => p.theme.space.sm};
              max-width: 300px;
              color: ${p => getColor('neutralHue', 600, p.theme)};
            `}
          >
            {description}
          </LG>
        )}
        <SM
          css={css`
            margin-bottom: ${p => p.theme.space.sm};
            color: ${p => getColor('neutralHue', 500, p.theme)};
            font-weight: ${p => p.theme.fontWeights.semibold};

            & > * {
              margin-right: ${p => p.theme.space.sm};
            }
          `}
        >
          {author && <span>{author}</span>}
          {modifiedDate && <span>{modifiedDate}</span>}
        </SM>
      </div>
      {children}
    </>
  );
};
