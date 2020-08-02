/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { Anchor } from '@zendeskgarden/react-buttons';
import { math } from 'polished';

export const StyledAnchor = styled(Anchor)`
  &.anchor.before {
    margin-left: -${p => math(`${p.theme.space.xs} * 2 + ${p.theme.iconSizes.md}`)};
    padding: 0 ${p => p.theme.space.xs};
    color: transparent;

    /* stylelint-disable selector-max-specificity */
    ${p => mediaQuery('down', 'md', p.theme)} {
      margin-left: -${p => math(`${p.theme.space.xxs} * 2 + ${p.theme.iconSizes.md}`)};
      padding: 0 ${p => p.theme.space.xxs};
    }

    &[data-garden-focus-visible] {
      color: inherit;
    }

    & > svg {
      position: relative;
      top: -1px;
      vertical-align: middle;
    }
  }
`;
