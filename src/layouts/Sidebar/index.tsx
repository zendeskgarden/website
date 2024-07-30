/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { PropsWithChildren, useState } from 'react';
import styled, { css } from 'styled-components';
import { getColor, getColorV8, mediaQuery } from '@zendeskgarden/react-theming';
import { ReactComponent as OverflowStroke } from '@zendeskgarden/svg-icons/src/16/overflow-vertical-stroke.svg';
import { ReactComponent as CloseStroke } from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';
import MaxWidthLayout from 'layouts/MaxWidth';
import { MobileSidebar } from './components/MobileSidebar';
import { DesktopSidebar } from './components/DesktopSidebar';

export interface ISidebarSection {
  title: string;
  id: string;
  items?: ISidebarSection[];
}

const StyledMobileNavButton = styled.button`
  display: none;
  position: fixed;
  right: ${p => p.theme.space.md};
  bottom: ${p => p.theme.space.md};
  align-items: center;
  justify-content: center;
  z-index: 1;
  /* stylelint-disable-next-line color-function-notation */
  border: ${p => p.theme.borders.sm}
    ${({ theme }) => getColor({ hue: 'white', transparency: 0.2, theme })};
  border-radius: 100px;
  background-color: ${p => getColorV8('kale', 800, p.theme)};
  padding: ${p => p.theme.space.xs};
  color: ${({ theme }) => getColor({ hue: 'white', theme })};

  &:focus {
    outline: none;
  }

  & > svg {
    width: ${p => p.theme.iconSizes.lg};
    height: ${p => p.theme.iconSizes.lg};
  }

  ${p => mediaQuery('down', 'md', p.theme)} {
    display: flex;
  }
`;

interface ISidebarLayoutProps extends PropsWithChildren {
  sidebar: ISidebarSection[];
}

export const SidebarLayout: React.FC<ISidebarLayoutProps> = ({ children, sidebar }) => {
  const [isMobileSidebarExpanded, setIsMobileSidebarExpanded] = useState(false);

  return (
    <div
      css={`
        position: relative;
      `}
    >
      <MaxWidthLayout>
        <div
          css={css`
            display: flex;
            /* IE11 requires a specific min-height to fill height */
            min-height: calc(100vh - 204px);
          `}
        >
          <DesktopSidebar sidebar={sidebar} />
          <div
            css={css`
              flex-grow: 1;
              background-color: ${({ theme }) =>
                getColor({ variable: 'background.default', theme })};
              padding: ${p => p.theme.space.lg} ${p => p.theme.space.md};
              max-width: 100vw;

              ${p => mediaQuery('down', 'md', p.theme)} {
                padding: ${p => p.theme.space.lg} ${p => p.theme.space.sm};
              }
            `}
          >
            <div
              css={css`
                margin-right: auto;
                margin-left: auto;
                max-width: ${p => p.theme.breakpoints.lg};
              `}
              // DocSearch main content ID
              id="main-content"
            >
              {children}
            </div>
          </div>
          {!!isMobileSidebarExpanded && <MobileSidebar sidebar={sidebar} />}
          <StyledMobileNavButton
            onClick={() => setIsMobileSidebarExpanded(!isMobileSidebarExpanded)}
          >
            {isMobileSidebarExpanded ? <CloseStroke /> : <OverflowStroke />}
          </StyledMobileNavButton>
        </div>
      </MaxWidthLayout>
    </div>
  );
};
