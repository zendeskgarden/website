/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { XXL, XL, LG, MD } from '@zendeskgarden/react-typography';

const headerSpacing = (p: ThemeProps<DefaultTheme>) => {
  return css`
    margin-top: ${p.theme.space.md};
    margin-bottom: ${p.theme.space.sm};
    padding-bottom: ${p.theme.space.xs};
  `;
};

export const H2 = styled(XXL).attrs({ tag: 'h2' })`
  ${headerSpacing}
`;

export const H3 = styled(XL).attrs({ tag: 'h3' })`
  ${headerSpacing}
`;

export const H4 = styled(LG).attrs({ tag: 'h4' })`
  ${headerSpacing}
`;

export const H5 = styled(LG).attrs({ tag: 'h5' })`
  ${headerSpacing}
`;

export const H6 = styled(LG).attrs({ tag: 'h6' })`
  ${headerSpacing}
`;

export const P = styled(MD).attrs({ tag: 'p' })`
  margin-bottom: ${p => p.theme.space.sm};
`;
