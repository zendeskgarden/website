/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { getColor, getLineHeight } from '@zendeskgarden/react-theming';
import { XXXL, XXL, XL, LG, MD, Span } from '@zendeskgarden/react-typography';

const headerStyles = (p: ThemeProps<DefaultTheme>) => {
  return css`
    margin-bottom: ${p.theme.space.sm};
    color: ${getColor('chromeHue', 700, p.theme)};
    font-weight: ${p.theme.fontWeights.semibold};
  `;
};

export const StyledH1 = styled.h1`
  ${headerStyles}

  line-height: ${p => getLineHeight(p.theme.space.base * 13, p.theme.space.xxl)};
  font-size: ${p => p.theme.space.xxl};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const StyledH2 = styled(XXXL).attrs({ tag: 'h2' })`
  ${headerStyles}

  margin-top: ${p => p.theme.space.md};
  margin-bottom: ${p => p.theme.space.md};
`;

export const StyledH3 = styled(XXL).attrs({ tag: 'h3' })`
  ${headerStyles}
`;

export const StyledH4 = styled(XL).attrs(p => ({ tag: p.tag || 'h4' }))`
  ${headerStyles}
`;

export const StyledH5 = styled(LG).attrs({ tag: 'h5' })`
  ${headerStyles}
`;

export const StyledH6 = styled(MD).attrs({ tag: 'h6' })`
  ${headerStyles}
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
  border-top: ${p => p.theme.borders.sm} ${p => getColor('grey', 200, p.theme)};
`;

/**
 * The SyntaxHighlighter component provides it's own `<pre>` tag.
 * This ensures valid DOM nesting.
 */
export const StyledPre: React.FC = ({ children }) => {
  return <>{children}</>;
};

export const StyledStrong = styled(Span).attrs({ tag: 'strong', isBold: true })``;

export const StyledEmphasis = styled.em`
  font-style: italic;
`;
