/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, HTMLAttributes, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { Link } from 'gatsby';
import { getColor } from '@zendeskgarden/react-theming';
import { MediaInput } from '@zendeskgarden/react-forms';
import { ReactComponent as MenuStroke } from '@zendeskgarden/svg-icons/src/16/menu-stroke.svg';
import { ReactComponent as SearchStroke } from '@zendeskgarden/svg-icons/src/16/search-stroke.svg';
import { ReactComponent as CloseStroke } from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';
import { ReactComponent as GardenIcon } from '../../../images/garden-icon.svg';
import { ReactComponent as GardenWordmark } from '../../../images/garden-wordmark.svg';
import MaxWidthLayout from 'layouts/MaxWidth';

const StyledDesktopNavItem = styled.div`
  display: flex;
  align-items: center;
`;

const StyledDesktopNavLink = styled(Link)`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: center;
  padding: ${p => p.theme.space.sm};
  line-height: ${p => p.theme.lineHeights.md};
  color: ${p => getColor('grey', 800, p.theme)};
  font-size: ${p => p.theme.fontSizes.md};
`;

const StyledHeader = styled.header.attrs({ role: 'banner' })`
  z-index: 1;
  border-bottom: ${p => p.theme.borders.sm} ${p => getColor('grey', 300, p.theme)};
  box-shadow: ${p => p.theme.shadows.lg('0', '10px', getColor('kale', 600, p.theme, 0.15)!)};
  padding: 0 ${p => p.theme.space.md};
  height: ${p => p.theme.space.base * 20}px;

  &[data-show-navigation='true'] {
    border-bottom-color: ${p => p.theme.palette.white};
  }

  @media (max-width: ${p => p.theme.breakpoints.md}) {
    padding: 0;
    height: ${p => p.theme.space.base * 15}px;
  }
`;

const Logo: React.FC = () => (
  <div
    css={css`
      height: 100%;
      line-height: 0;

      @media (max-width: ${p => p.theme.breakpoints.md}) {
        flex-grow: 1;
      }
    `}
  >
    <Link
      aria-label="Zendesk Garden"
      to="/"
      css={`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
      `}
    >
      <div>
        <GardenIcon
          css={css`
            width: auto;
            height: ${p => p.theme.lineHeights.md};

            @media (max-width: ${p => p.theme.breakpoints.md}) {
              height: ${p => p.theme.iconSizes.lg};
            }
          `}
        />
        <GardenWordmark
          css={css`
            margin-left: ${p => p.theme.space.xs};
            width: auto;
            height: ${p => p.theme.lineHeights.md};

            @media (max-width: ${p => p.theme.breakpoints.md}) {
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
      height: 100%;
    `}
  >
    <SearchInput ref={ref} isCompact={false} />
  </div>
));

const SearchInput = React.forwardRef<
  HTMLInputElement,
  { isCompact: boolean } & HTMLAttributes<HTMLInputElement>
>(({ isCompact, ...props }, ref) => (
  <MediaInput
    start={<SearchStroke />}
    placeholder="Search..."
    aria-label="Search"
    isCompact={isCompact}
    ref={ref}
    {...props}
  />
));

const MobileNavButton: React.FC<{
  isExpanded: boolean;
  label: string;
  icon: React.ReactNode;
} & HTMLAttributes<HTMLButtonElement>> = ({ isExpanded, label, icon, ...other }) => {
  return (
    <div
      css={css`
        @media (min-width: ${p => p.theme.breakpoints.md}) {
          display: none;
        }
      `}
    >
      <button
        css={css`
          margin: 0;
          border: none;
          background-color: transparent;
          padding: 0 ${p => p.theme.space.md};
          height: 100%;
          line-height: 0;
          color: ${p => getColor('grey', 800, p.theme)};

          > * {
            width: ${p => p.theme.iconSizes.lg};
            height: ${p => p.theme.iconSizes.lg};
          }

          &:focus {
            outline: none;
          }

          &:hover {
            background-color: ${p => getColor('grey', 200, p.theme)};
          }
        `}
        aria-label={label}
        aria-expanded={isExpanded}
        {...other}
      >
        {isExpanded ? <CloseStroke /> : icon}
      </button>
    </div>
  );
};

const StyledMobileNavLink = styled(Link).attrs({ activeClassName: 'is-active' })`
  display: flex;
  align-items: center;
  margin-top: ${p => p.theme.space.base * 2}px;
  border-radius: ${props => props.theme.borderRadii.md};
  box-sizing: border-box;
  padding: ${p => `0 ${p.theme.space.base * 2}px`};
  min-height: 32px;

  &,
  &:hover,
  &:focus {
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
        z-index: 1;
        background-color: ${p => getColor('kale', 700, p.theme)};
        padding: ${p => p.theme.space.lg};
        color: ${p => p.theme.colors.background};
      `}
    >
      <StyledMobileNavLink to="/content">Content</StyledMobileNavLink>
      <StyledMobileNavLink to="/design">Design</StyledMobileNavLink>
      <StyledMobileNavLink to="/components">Components</StyledMobileNavLink>
      <StyledMobileNavLink to="/patterns">Patterns</StyledMobileNavLink>
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

      @media (max-width: ${p => p.theme.breakpoints.md}) {
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
    <StyledDesktopNavItem>
      <StyledDesktopNavLink to="/patterns">Patterns</StyledDesktopNavLink>
    </StyledDesktopNavItem>
    <StyledDesktopNavItem
      css={css`
        margin-left: ${p => p.theme.space.sm};
      `}
    >
      <SearchInput isCompact={false} />
    </StyledDesktopNavItem>
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
    <StyledHeader>
      <MaxWidthLayout
        css={css`
          display: flex;
          height: 100%;
        `}
      >
        <MobileNavButton
          icon={<SearchStroke />}
          label="Search"
          isExpanded={isSearchVisible}
          onClick={() => {
            setIsSearchVisible(!isSearchVisible);

            if (!isSearchVisible) {
              setIsNavigationVisible(false);
            }
          }}
        />
        {!isSearchVisible && <Logo />}
        {isSearchVisible && <MobileSearch ref={inputRef} />}
        <MobileNavButton
          icon={<MenuStroke />}
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
      {isNavigationVisible && <MobileNav />}
    </StyledHeader>
  );
};

export default Header;
