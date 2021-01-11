/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme } from 'styled-components';
import { getColor, mediaQuery } from '@zendeskgarden/react-theming';
import { Anchor } from '@zendeskgarden/react-buttons';
import { math, rgba } from 'polished';

const boxShadow = (theme: DefaultTheme) => {
  const color = getColor('primaryHue', 600, theme);
  const shadow = rgba(color as string, 0.35);

  return `inset ${theme.shadows.sm(shadow)}`;
};

export const StyledAnchor = styled(Anchor).attrs(props => ({
  /* eslint-disable-next-line prefer-named-capture-group */
  isExternal: props.href && !/^(#|\/(?!\/))/u.test(props.href)
}))`
  &.anchor.before {
    position: relative;
    margin-left: -${p => math(`${p.theme.space.xs} * 2 + ${p.theme.iconSizes.md}`)};
    border-radius: ${p => p.theme.borderRadii.md};
    padding: 0 ${p => p.theme.iconSizes.md};
    color: transparent;

    /* stylelint-disable selector-max-specificity */
    ${p => mediaQuery('down', 'md', p.theme)} {
      margin-left: -${p => math(`${p.theme.space.xxs} * 2 + ${p.theme.iconSizes.md}`)};
      padding: 0 ${p => p.theme.space.sm};
    }

    &[data-garden-focus-visible] {
      box-shadow: ${p => boxShadow(p.theme)};
      color: inherit;
    }

    & > svg {
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
