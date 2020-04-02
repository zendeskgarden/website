/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { Link } from 'gatsby';
import { getColor } from '@zendeskgarden/react-theming';
import { ISidebarSection } from '..';

const StyledSidebarLink = styled(Link).attrs({ activeClassName: 'is-active' })`
  display: block;
  margin-left: -${p => p.theme.space.xs};
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
    background-color: ${p => rgba(p.theme.palette.black as string, 0.1)};
  }

  &[data-garden-focus-visible] {
    box-shadow: ${p => p.theme.shadows.md(getColor('blue', 400, p.theme, 0.35)!)};
  }

  &:active {
    background-color: ${p => rgba(p.theme.palette.black as string, 0.05)};
  }
`;

export const DesktopSidebar: React.FC<{ sidebar: ISidebarSection[] }> = ({ sidebar }) => {
  const sidebarContent = sidebar.map(section => (
    <li
      key={section.title}
      css={css`
        margin-bottom: ${p => p.theme.space.md};
      `}
    >
      <div
        css={css`
          margin-bottom: ${p => p.theme.space.xxs};
          text-transform: uppercase;
          line-height: ${p => p.theme.lineHeights.sm};
          letter-spacing: 0.5px;
          color: ${p => getColor('kale', 600, p.theme)};
          font-size: ${p => p.theme.fontSizes.xs};
          font-weight: ${p => p.theme.fontWeights.semibold};
        `}
      >
        {section.title}
      </div>
      {section.items && (
        <ul
          css={`
            & > li:first-child {
              margin-top: 0;
            }
          `}
        >
          {section.items?.map(item => {
            return (
              <li
                key={`${section.title}-${item.title}`}
                css={css`
                  margin-top: ${p => p.theme.space.xs};
                `}
              >
                <StyledSidebarLink to={item.id!}>{item.title}</StyledSidebarLink>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  ));

  return (
    <nav
      aria-label="Primary"
      css={css`
        background-color: ${p => p.theme.palette.tofu};
        padding: ${p => p.theme.space.lg} ${p => p.theme.space.md} ${p => p.theme.space.lg} 0;
        min-width: 220px;

        @media (max-width: 1440px) {
          padding: ${p => p.theme.space.lg} ${p => p.theme.space.md};
        }

        @media (max-width: ${p => p.theme.breakpoints.lg}) {
          display: none;
        }
      `}
    >
      <div
        css={css`
          position: absolute;
          top: 0;
          right: 50%;
          bottom: 0;
          left: 0;
          z-index: -1;
          background-color: ${p => p.theme.palette.tofu};

          @media (max-width: ${p => p.theme.breakpoints.lg}) {
            display: none;
          }
        `}
      />
      <ul
        css={`
          position: sticky;
          top: 32px;
        `}
      >
        {sidebarContent}
      </ul>
    </nav>
  );
};
