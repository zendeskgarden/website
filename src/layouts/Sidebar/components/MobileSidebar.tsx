/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { getColor } from '@zendeskgarden/react-theming';
import { Link } from 'gatsby';
import { ISidebarSection } from '..';
import { rgba } from 'polished';

const StyledSidebarLink = styled(Link).attrs({ activeClassName: 'is-active' })`
  display: flex;
  align-items: center;
  opacity: 0.6;
  margin-top: ${p => p.theme.space.xxs};
  margin-left: -${p => p.theme.space.xs};
  border-radius: ${props => props.theme.borderRadii.md};
  box-sizing: border-box;
  padding: ${p => p.theme.space.base * 1.5}px ${p => p.theme.space.xs};
  min-height: 32px;
  color: ${p => p.theme.colors.background};

  &:focus,
  &:hover,
  &:active {
    text-decoration: none;
    color: inherit;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    opacity: 1;
    background-color: ${p => rgba(p.theme.palette.white as string, 0.1)};
  }

  &.is-active {
    opacity: 1;
    background-color: ${p => rgba(p.theme.palette.white as string, 0.1)};
    cursor: pointer;
  }

  &[data-garden-focus-visible] {
    opacity: 1;
    box-shadow: ${p => p.theme.shadows.md(rgba(p.theme.palette.white as string, 0.2))};
  }

  &:not([data-garden-header='true']):active {
    background-color: ${p => rgba(p.theme.palette.white as string, 0.03)};
  }
`;

export const MobileSidebar: React.FC<{ sidebar: ISidebarSection[] }> = ({ sidebar }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const sidebarContent = sidebar.map(section => (
    <ul
      key={section.title}
      css={css`
        margin-bottom: ${p => p.theme.space.md};
      `}
    >
      <li
        css={css`
          margin-bottom: ${p => p.theme.space.xxs};
          text-transform: uppercase;
          line-height: ${p => p.theme.lineHeights.sm};
          letter-spacing: 0.5px;
          font-size: ${p => p.theme.fontSizes.sm};
          font-weight: ${p => p.theme.fontWeights.semibold};
        `}
      >
        {section.title}
      </li>
      {section.items?.map(item => {
        return (
          <li key={`${section.title}-${item.title}`}>
            <StyledSidebarLink to={item.id!}>{item.title}</StyledSidebarLink>
          </li>
        );
      })}
    </ul>
  ));

  return (
    <nav
      aria-label="Primary"
      css={css`
        position: fixed;
        top: ${p => p.theme.space.base * 20}px;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: ${p => getColor('kale', 700, p.theme)};
        padding: ${p => p.theme.space.lg};
        color: ${p => p.theme.colors.background};

        @media (max-width: ${p => p.theme.breakpoints.md}) {
          top: ${p => p.theme.space.base * 15}px;
        }

        @media (min-width: ${p => p.theme.breakpoints.lg}) {
          display: none;
        }
      `}
    >
      {sidebarContent}
    </nav>
  );
};
