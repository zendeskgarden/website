/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, HTMLAttributes, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { getColor, mediaQuery, PALETTE } from '@zendeskgarden/react-theming';
import { IconButton } from '@zendeskgarden/react-buttons';
import { MediaInput } from '@zendeskgarden/react-forms';
import { ReactComponent as OverflowVerticalStroke } from '@zendeskgarden/svg-icons/src/16/overflow-vertical-stroke.svg';
import { ReactComponent as SearchStroke } from '@zendeskgarden/svg-icons/src/16/search-stroke.svg';
import { ReactComponent as CloseStroke } from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';
import { ReactComponent as GardenIcon } from '@zendeskgarden/svg-icons/src/26/garden.svg';
import { ReactComponent as GardenWordmark } from '@zendeskgarden/svg-icons/src/26/wordmark-garden.svg';
import MaxWidthLayout from 'layouts/MaxWidth';
import { StyledNavigationLink } from './StyledNavigationLink';

const StyledDesktopNavItem = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${p => p.theme.space.sm};
`;

const StyledDesktopNavLink = styled(StyledNavigationLink).attrs({ partiallyActive: true })`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledHeader = styled.header.attrs({ role: 'banner' })`
  z-index: 1;
  box-shadow: ${p =>
    p.theme.shadows.lg(
      `${p.theme.space.base * 4}px`,
      `${p.theme.space.base * 6}px`,
      getColor('grey', 800, p.theme, 0.05)!
    )};
  padding: 0 ${p => p.theme.space.md};
  height: ${p => p.theme.space.base * 20}px;

  &[data-show-navigation='true'] {
    border-bottom-color: ${p => p.theme.palette.white};
  }

  ${p => mediaQuery('down', 'sm', p.theme)} {
    padding: 0;
    height: ${p => p.theme.space.base * 15}px;
  }
`;

const Logo: React.FC = () => (
  <div
    css={css`
      display: flex;
      align-items: center;
      justify-content: center;

      ${p => mediaQuery('down', 'sm', p.theme)} {
        flex-grow: 1;
      }
    `}
  >
    <Link aria-label="Zendesk Garden" to="/">
      <div
        css={`
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <GardenIcon
          css={css`
            width: ${p => p.theme.iconSizes.lg};
            height: ${p => p.theme.iconSizes.lg};
            color: ${PALETTE.green[400]};
          `}
        />
        <GardenWordmark
          css={css`
            margin-left: ${p => p.theme.space.xs};
            height: ${p => p.theme.iconSizes.lg};
            color: ${PALETTE.kale[700]};

            ${p => mediaQuery('down', 'sm', p.theme)} {
              display: none;
            }
          `}
        />
      </div>
    </Link>
  </div>
);

const MobileSearch = React.forwardRef<HTMLInputElement>((props, ref) => (
  <div
    css={css`
      display: flex;
      flex-grow: 1;
      align-items: center;
      justify-content: center;
      padding: ${p => p.theme.space.xxs};
    `}
  >
    <SearchInput ref={ref} />
  </div>
));

const SearchInput = React.forwardRef<HTMLInputElement, HTMLAttributes<HTMLInputElement>>(
  (props, ref) => (
    <MediaInput
      start={<SearchStroke />}
      placeholder="Search..."
      aria-label="Search"
      ref={ref}
      {...props}
    />
  )
);

const MobileNavButton: React.FC<
  {
    isExpanded: boolean;
    label: string;
    icon: React.ReactNode;
  } & HTMLAttributes<HTMLButtonElement>
> = ({ isExpanded, label, icon, ...other }) => {
  return (
    <div
      css={css`
        padding: ${p => p.theme.space.base * 1.5}px; /* (header - button) x .5 */

        ${p => mediaQuery('up', 'md', p.theme)} {
          display: none;
        }
      `}
    >
      <IconButton
        aria-label={label}
        aria-expanded={isExpanded}
        isPill={false}
        size="large"
        {...other}
      >
        {isExpanded ? <CloseStroke /> : icon}
      </IconButton>
    </div>
  );
};

/* Temporary empty placeholder div with explicit button dimensions for search functionality on mobile */
const TemporaryBox = styled.div`
  width: 60px;
  height: 60px;

  ${p => mediaQuery('up', 'md', p.theme)} {
    display: none;
  }
`;

const StyledMobileNavLink = styled(StyledNavigationLink).attrs({ partiallyActive: true })`
  display: block;
  margin-top: ${p => p.theme.space.base * 2}px;
`;

const MobileNav: React.FC = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div
      css={css`
        position: fixed;
        top: ${p => p.theme.space.base * 15}px;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 3;
        background-color: ${p => p.theme.palette.tofu};
        padding: ${p => p.theme.space.lg} ${p => p.theme.space.xxl};
      `}
    >
      <StyledMobileNavLink to="/content">Content</StyledMobileNavLink>
      <StyledMobileNavLink to="/design">Design</StyledMobileNavLink>
      <StyledMobileNavLink to="/components">Components</StyledMobileNavLink>
      {/* <StyledMobileNavLink to="/patterns">Patterns</StyledMobileNavLink> */}
    </div>
  );
};

const DesktopNav: React.FC = () => (
  <nav
    role="navigation"
    aria-label="Global"
    css={css`
      display: flex;
      flex-grow: 1;
      justify-content: flex-end;

      ${p => mediaQuery('down', 'sm', p.theme)} {
        display: none;
      }
    `}
  >
    <StyledDesktopNavItem>
      <StyledDesktopNavLink to="/content">Content</StyledDesktopNavLink>
    </StyledDesktopNavItem>
    <StyledDesktopNavItem>
      <StyledDesktopNavLink to="/design">Design</StyledDesktopNavLink>
    </StyledDesktopNavItem>
    <StyledDesktopNavItem>
      <StyledDesktopNavLink to="/components">Components</StyledDesktopNavLink>
    </StyledDesktopNavItem>
    {/* <StyledDesktopNavItem>
      <StyledDesktopNavLink to="/patterns">Patterns</StyledDesktopNavLink>
    </StyledDesktopNavItem> 
    <StyledDesktopNavItem>
      <SearchInput />
    </StyledDesktopNavItem> */}
  </nav>
);

const Header: React.FC = () => {
  const [isNavigationVisible, setIsNavigationVisible] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchVisible) {
      inputRef.current && inputRef.current.focus();
    }
  }, [isSearchVisible]);

  return (
    <>
      <StyledHeader>
        <MaxWidthLayout
          css={css`
            display: flex;
            height: 100%;
            min-height: 100%;
          `}
        >
          {/* <MobileNavButton
            icon={<SearchStroke />}
            label="Search"
            isExpanded={isSearchVisible}
            onClick={() => {
              setIsSearchVisible(!isSearchVisible);

              if (!isSearchVisible) {
                setIsNavigationVisible(false);
              }
            }}
          /> */}
          <TemporaryBox />
          {!isSearchVisible && <Logo />}
          {isSearchVisible && <MobileSearch ref={inputRef} />}
          <MobileNavButton
            icon={<OverflowVerticalStroke />}
            label="Global navigation"
            isExpanded={isNavigationVisible}
            onClick={() => {
              setIsNavigationVisible(!isNavigationVisible);

              if (!isNavigationVisible) {
                setIsSearchVisible(false);
              }
            }}
          />
          <DesktopNav />
        </MaxWidthLayout>
      </StyledHeader>

      {isNavigationVisible && <MobileNav />}
    </>
  );
};

export default Header;
