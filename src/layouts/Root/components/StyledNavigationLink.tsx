/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { getColor } from '@zendeskgarden/react-theming';

interface ILink {
  children: string;
  to: string;
  activeClassName?: string;
}

export const Link = ({ children, to, activeClassName, ...props }: ILink) => {
  const internal = /^\/(?!\/)/u.test(to);

  if (internal) {
    return (
      <GatsbyLink to={to} activeClassName={activeClassName} {...props}>
        {children}
      </GatsbyLink>
    );
  }

  return (
    <OutboundLink href={to} {...props}>
      {children}
    </OutboundLink>
  );
};

export const StyledNavigationLink = styled(Link).attrs(p => ({
  activeClassName: p.activeClassName || 'is-current'
}))`
  border-radius: ${p => p.theme.borderRadii.md};
  padding: ${p => p.theme.space.base * 1.5}px ${p => p.theme.space.xs};
  color: ${p => p.theme.colors.foreground};

  &:focus,
  &:hover,
  &:active {
    text-decoration: none;
    color: inherit;
  }

  &.is-current {
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
