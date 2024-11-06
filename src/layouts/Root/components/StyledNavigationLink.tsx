/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ReactNode } from 'react';
import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { focusStyles, getColor } from '@zendeskgarden/react-theming';

interface ILink {
  children: ReactNode;
  to: string;
  activeClassName?: string;
}

/*
 * Copy Garden `Anchor` styling
 */
const colorStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const options = { theme, variable: 'foreground.primary' };
  const color = getColor(options);
  const hoverColor = getColor({ ...options, dark: { offset: -100 }, light: { offset: 100 } });
  const activeColor = getColor({ ...options, dark: { offset: -200 }, light: { offset: 200 } });
  const focusOutlineColor = getColor({ theme, variable: 'border.primaryEmphasis' });

  return css`
    text-decoration: none;
    color: ${color};

    ${focusStyles({ theme, condition: false, styles: { color, outlineColor: focusOutlineColor } })};

    &:hover {
      color: ${hoverColor};
    }

    &:active {
      color: ${activeColor};
    }
  `;
};

const StyledGatsbyLink = styled(GatsbyLink)`
  border-radius: ${p => p.theme.borderRadii.md};

  ${colorStyles};
`;

const StyledOutboundLink = styled(OutboundLink)`
  border-radius: ${p => p.theme.borderRadii.md};

  ${colorStyles};
`;

export const Link = ({ children, to, activeClassName, ...props }: ILink) => {
  const internal = /^\/(?!\/)/u.test(to);

  if (internal) {
    return (
      <StyledGatsbyLink to={to} activeClassName={activeClassName} {...props}>
        {children}
      </StyledGatsbyLink>
    );
  }

  return (
    <StyledOutboundLink href={to} {...props}>
      {children}
    </StyledOutboundLink>
  );
};

const colorOptions = {
  hue: 'primaryHue',
  dark: { shade: 500 },
  light: { shade: 700 }
};

export const StyledNavigationLink = styled(Link).attrs(p => ({
  activeClassName: p.activeClassName || 'is-current'
}))`
  transition:
    background-color 0.25s ease-in-out,
    color 0.25s ease-in-out;
  padding: ${p => p.theme.space.base * 1.5}px ${p => p.theme.space.xs};
  color: ${({ theme }) => getColor({ variable: 'foreground.default', theme })};

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    color: inherit;
  }

  &.is-current {
    background-color: ${p =>
      getColor({
        theme: p.theme,
        ...colorOptions,
        transparency: p.theme.opacity[200]
      })};
  }

  &:hover {
    background-color: ${p =>
      getColor({
        theme: p.theme,
        ...colorOptions,
        transparency: p.theme.opacity[100]
      })};
  }

  ${props => focusStyles({ theme: props.theme })}

  &:active {
    background-color: ${p =>
      getColor({
        theme: p.theme,
        ...colorOptions,
        transparency: p.theme.opacity[300]
      })};
  }
`;
