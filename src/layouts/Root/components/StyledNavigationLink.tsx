/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { Link } from 'gatsby';
import { getColor } from '@zendeskgarden/react-theming';

export const StyledNavigationLink = styled(Link).attrs({ activeClassName: 'is-active' })`
  border-radius: ${p => p.theme.borderRadii.md};
  padding: ${p => p.theme.space.base * 1.5}px ${p => p.theme.space.xs};
  color: ${p => p.theme.colors.foreground};

  &:focus,
  &:hover,
  &:active {
    text-decoration: none;
    color: inherit;
  }

  &.is-active {
    background-color: ${p => getColor('grey', 800, p.theme, 0.1)};
  }

  &[data-garden-focus-visible] {
    box-shadow: ${p => p.theme.shadows.md(getColor('blue', 400, p.theme, 0.35)!)};
  }

  &:hover {
    background-color: ${p => getColor('grey', 800, p.theme, 0.05)};
  }

  &:active {
    background-color: ${p => getColor('grey', 800, p.theme, 0.2)};
  }
`;
