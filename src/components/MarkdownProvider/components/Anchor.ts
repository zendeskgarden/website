/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { SELECTOR_FOCUS_VISIBLE, mediaQuery } from '@zendeskgarden/react-theming';
import { Anchor } from '@zendeskgarden/react-buttons';
import { math } from 'polished';

export const StyledAnchor = styled(Anchor).attrs(props => ({
  /* eslint-disable-next-line prefer-named-capture-group */
  isExternal: props.href && !/^(#|\/(?!\/))/u.test(props.href)
}))`
  &.anchor.before {
    position: relative;
    margin-right: ${p => p.theme.space.base}px;
    margin-left: -${p => math(`${p.theme.space.xs} * 2 + ${p.theme.iconSizes.md} + ${p.theme.space.base}`)};
    border-radius: ${p => p.theme.borderRadii.md};
    padding: 0 ${p => p.theme.iconSizes.md};
    color: transparent;

    /* stylelint-disable selector-max-specificity */
    ${p => mediaQuery('down', 'md', p.theme)} {
      margin-left: -${p => math(`${p.theme.space.xxs} * 2 + ${p.theme.iconSizes.md} + ${p.theme.space.base}`)};
      padding: 0 ${p => p.theme.space.sm};
    }

    ${SELECTOR_FOCUS_VISIBLE} {
      color: inherit;
    }

    & > svg {
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
