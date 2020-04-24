/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { getColor } from '@zendeskgarden/react-theming';
import { XXL, XL, LG } from '@zendeskgarden/react-typography';

const headerSpacing = (p: ThemeProps<DefaultTheme>) => {
  return css`
    margin-top: ${p.theme.space.md};
    margin-bottom: ${p.theme.space.sm};
    padding-bottom: ${p.theme.space.xs};
  `;
};

export const StyledH2 = styled(XXL).attrs({ tag: 'h2' })`
  ${headerSpacing}
`;

export const StyledH3 = styled(XL).attrs({ tag: 'h3' })`
  ${headerSpacing}
`;

export const StyledH4 = styled(LG).attrs({ tag: 'h4' })`
  ${headerSpacing}
`;

export const StyledH5 = styled(LG).attrs({ tag: 'h5' })`
  ${headerSpacing}
`;

export const StyledH6 = styled(LG).attrs({ tag: 'h6' })`
  ${headerSpacing}
`;

export const StyledBlockquote = styled.blockquote`
  margin-top: ${p => p.theme.space.md};
  margin-bottom: ${p => p.theme.space.md};
  border-left: ${p => p.theme.borders.sm} ${p => getColor('grey', 300, p.theme)};
  padding-left: ${p => p.theme.space.sm};
  color: ${p => getColor('grey', 600, p.theme)};
  font-style: italic;

  p {
    line-height: ${p => p.theme.lineHeights.lg};
    font-size: ${p => p.theme.space.base * 4}px;
  }
`;

export const StyledHr = styled.hr`
  margin: ${p => p.theme.space.md} 0;
  border-top: ${p => p.theme.borders.sm} ${p => getColor('grey', 300, p.theme)};
`;

/**
 * The SyntaxHighlighter component provides it's own `<pre>` tag.
 * This ensures valid DOM nesting.
 */
export const StyledPre: React.FC = ({ children }) => {
  return <>{children}</>;
};

export const StyledStrong = styled.strong`
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const StyledEmphasis = styled.em`
  font-style: italic;
`;
