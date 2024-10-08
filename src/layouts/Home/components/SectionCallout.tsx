/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { getColorV8 } from '@zendeskgarden/react-theming';
import { XXL, LG } from '@zendeskgarden/react-typography';

export const StyledSectionHeader = styled.div`
  text-transform: uppercase;
  line-height: ${p => p.theme.lineHeights.sm};
  letter-spacing: 0.5px;
  color: ${p => getColorV8('neutralHue', 600, p.theme)};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.semibold};
`;

export const SectionCallout: React.FC<
  {
    section: string;
    header: string;
    description: string;
  } & HTMLAttributes<HTMLDivElement>
> = ({ section, header, description, children, ...props }) => (
  <div {...props}>
    <StyledSectionHeader
      css={css`
        margin-bottom: ${p => p.theme.space.xs};
      `}
    >
      {section}
    </StyledSectionHeader>
    <XXL
      isBold
      tag="h2"
      css={css`
        margin-bottom: ${p => p.theme.space.xs};
      `}
    >
      {header}
    </XXL>
    <LG
      tag="p"
      css={css`
        color: ${p => getColorV8('grey', 700, p.theme)};
      `}
    >
      {description}
    </LG>
    {children}
  </div>
);
