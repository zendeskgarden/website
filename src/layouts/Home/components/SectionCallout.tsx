/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { getColor } from '@zendeskgarden/react-theming';

export const StyledSectionHeader = styled.div`
  text-transform: uppercase;
  line-height: ${p => p.theme.lineHeights.sm};
  letter-spacing: 0.5px;
  color: ${p => getColor('neutralHue', 500, p.theme)};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.semibold};
`;

export const SectionCallout: React.FC<{
  section: string;
  header: string;
  description: string;
} & HTMLAttributes<HTMLDivElement>> = ({ section, header, description, children, ...props }) => (
  <div {...props}>
    <StyledSectionHeader
      css={css`
        margin-bottom: ${p => p.theme.space.xs};
      `}
    >
      {section}
    </StyledSectionHeader>
    <h2
      css={css`
        margin-bottom: ${p => p.theme.space.xs};
        line-height: ${p => p.theme.lineHeights.xxl};
        font-size: ${p => p.theme.fontSizes.xxl};
        font-weight: ${p => p.theme.fontWeights.semibold};
      `}
    >
      {header}
    </h2>
    <p
      css={css`
        line-height: ${p => p.theme.lineHeights.lg};
        color: ${p => getColor('grey', 700, p.theme)};
        font-size: ${p => p.theme.fontSizes.lg};
      `}
    >
      {description}
    </p>
    {children}
  </div>
);
