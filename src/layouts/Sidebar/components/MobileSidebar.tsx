/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { getColor } from '@zendeskgarden/react-theming';
import { StyledNavigationLink } from 'layouts/Root/components/StyledNavigationLink';
import { StyledSectionHeader } from 'layouts/Home/components/SectionCallout';
import { ISidebarSection } from '..';

const StyledSidebarLink = styled(StyledNavigationLink)`
  display: block;
  margin-left: -${p => p.theme.space.xs};
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
        `}
      >
        <StyledSectionHeader
          css={css`
            color: ${p => getColor('kale', 600, p.theme)};
          `}
        >
          {section.title}
        </StyledSectionHeader>
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
        background-color: ${p => p.theme.palette.tofu};
        padding: ${p => p.theme.space.lg} ${p => p.theme.space.xxl};

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
