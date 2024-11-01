/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useLocation } from '@reach/router';
import { getColor, mediaQuery } from '@zendeskgarden/react-theming';
import { StyledNavigationLink } from 'layouts/Root/components/StyledNavigationLink';
import { StyledSectionHeader } from 'layouts/Home/components/SectionCallout';
import { ISidebarSection } from '..';
import { NavItemTitle } from './NavItemTitle';

const StyledSidebarLink = styled(StyledNavigationLink)`
  display: block;
  margin-left: -${p => p.theme.space.xs};
`;

export const MobileSidebar: React.FC<{ sidebar: ISidebarSection[] }> = ({ sidebar }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.style.height = '100vh';
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
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
        `}
      >
        <StyledSectionHeader>{section.title}</StyledSectionHeader>
      </li>
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
              to={item.id ? item.id : item.items![0].id}
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
                    <StyledSidebarLink to={nestedItem.id}>
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
  ));

  return (
    <nav
      aria-label="Primary"
      css={css`
        position: fixed;
        inset: ${p => p.theme.space.base * 20}px 0 0 0;
        background-color: ${p => getColor({ theme: p.theme, variable: 'background.recessed' })};
        padding: ${p => p.theme.space.lg} ${p => p.theme.space.xxl};
        overflow: scroll;

        ${p => mediaQuery('down', 'sm', p.theme)} {
          top: ${p => p.theme.space.base * 15}px;
        }

        ${p => mediaQuery('up', 'lg', p.theme)} {
          display: none;
        }
      `}
    >
      {sidebarContent}
    </nav>
  );
};
