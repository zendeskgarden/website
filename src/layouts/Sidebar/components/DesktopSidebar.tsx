/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled, { css } from 'styled-components';
import { useLocation } from '@reach/router';
import { getColorV8, mediaQuery } from '@zendeskgarden/react-theming';
import { ISidebarSection } from '..';
import { StyledNavigationLink } from 'layouts/Root/components/StyledNavigationLink';
import { StyledSectionHeader } from 'layouts/Home/components/SectionCallout';
import { NavItemTitle } from './NavItemTitle';

const StyledSidebarLink = styled(StyledNavigationLink)`
  display: block;
  margin-left: -${p => p.theme.space.xs};
`;

export const DesktopSidebar: React.FC<{ sidebar: ISidebarSection[] }> = ({ sidebar }) => {
  const { pathname } = useLocation();

  const sidebarContent = sidebar.map(section => (
    <li
      key={section.title}
      css={css`
        margin-bottom: ${p => p.theme.space.md};
      `}
    >
      <StyledSectionHeader
        css={css`
          margin-bottom: ${p => p.theme.space.xxs};
          color: ${p => getColorV8('kale', 600, p.theme)};
        `}
      >
        {section.title}
      </StyledSectionHeader>
      {!!section.items && (
        <ul
          css={`
            & > li:first-child {
              margin-top: 0;
            }
          `}
        >
          {section.items?.map(item => {
            const isExpanded = (item.items || []).some(nestedItem => nestedItem.id === pathname);

            return (
              <li
                key={`${section.title}-${item.title}`}
                css={css`
                  margin-top: ${p => p.theme.space.xxs};
                `}
              >
                <StyledSidebarLink
                  to={item.id ? item.id : item.items![0].id!}
                  activeClassName={item.id ? undefined : 'active-heading'}
                >
                  <NavItemTitle>{item.title}</NavItemTitle>
                </StyledSidebarLink>
                {!!isExpanded && (
                  <ul
                    css={css`
                      padding-left: ${p => p.theme.space.sm};
                    `}
                  >
                    {item.items!.map(nestedItem => (
                      <li
                        key={`${item.title}-${nestedItem.title}`}
                        css={css`
                          margin-top: ${p => p.theme.space.xxs};
                        `}
                      >
                        <StyledSidebarLink to={nestedItem.id!}>
                          <NavItemTitle>{nestedItem.title}</NavItemTitle>
                        </StyledSidebarLink>
                      </li>
                    ))}
                  </ul>
                )}
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

        @media (width <= 1440px) {
          padding: ${p => p.theme.space.lg} ${p => p.theme.space.md};
        }

        ${p => mediaQuery('down', 'md', p.theme)} {
          display: none;
        }
      `}
    >
      <div
        css={css`
          position: absolute;
          inset: 0 50% 0 0;
          z-index: -1;
          background-color: ${p => p.theme.palette.tofu};

          ${p => mediaQuery('down', 'md', p.theme)} {
            display: none;
          }
        `}
      />
      <ul>{sidebarContent}</ul>
    </nav>
  );
};
