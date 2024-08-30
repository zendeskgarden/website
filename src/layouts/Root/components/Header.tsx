/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, HTMLAttributes, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { getColor, getColorV8, mediaQuery } from '@zendeskgarden/react-theming';
import { IconButton } from '@zendeskgarden/react-buttons';
import { IMenuProps, Item, ItemGroup, Menu } from '@zendeskgarden/react-dropdowns';
import { ReactComponent as SearchStroke } from '@zendeskgarden/svg-icons/src/16/search-stroke.svg';
import { ReactComponent as OverflowVerticalStroke } from '@zendeskgarden/svg-icons/src/16/overflow-vertical-stroke.svg';
import { ReactComponent as CloseStroke } from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';
// TODO replace with sun/moon icons when available
import { ReactComponent as LightIcon } from '@zendeskgarden/svg-icons/src/16/circle-stroke.svg';
import { ReactComponent as DarkIcon } from '@zendeskgarden/svg-icons/src/16/circle-fill.svg';
import { ReactComponent as SystemIcon } from '@zendeskgarden/svg-icons/src/16/monitor-stroke.svg';
import { ReactComponent as GardenIcon } from '@zendeskgarden/svg-icons/src/26/garden.svg';
import { ReactComponent as GardenWordmark } from '@zendeskgarden/svg-icons/src/26/wordmark-garden.svg';
import { ColorScheme, useColorSchemeContext } from 'components/useColorSchemeContext';
import MaxWidthLayout from 'layouts/MaxWidth';
import { SearchInput } from './SearchInput';
import { StyledNavigationLink } from './StyledNavigationLink';

export const headerBoxShadow = (theme: any) =>
  theme.shadows.lg(
    `${theme.space.base * 4}px`,
    `${theme.space.base * 6}px`,
    getColorV8('neutralHue', 800, theme, 0.05)!
  );

export const headerHeight = (theme: any) => theme.space.base * 20;

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
  box-shadow: ${p => headerBoxShadow(p.theme)};
  padding: 0 ${p => p.theme.space.base * 4}px;
  height: ${p => headerHeight(p.theme)}px;

  &[data-show-navigation='true'] {
    border-bottom-color: ${({ theme }) => getColor({ hue: 'white', theme })};
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
            color: ${p => getColorV8('green', 400, p.theme)};
          `}
        />
        <GardenWordmark
          css={css`
            margin-left: ${p => p.theme.space.xs};
            height: ${p => p.theme.iconSizes.lg};
            color: ${p => getColorV8('kale', 700, p.theme)};

            ${p => mediaQuery('down', 'sm', p.theme)} {
              display: none;
            }
          `}
        />
      </div>
    </Link>
  </div>
);

const MobileSearch = React.forwardRef<HTMLInputElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => (
    <div
      css={css`
        display: flex;
        flex-grow: 1;
        align-items: center;
        justify-content: center;
        padding: ${p => p.theme.space.xxs};

        ${p => mediaQuery('up', 'md', p.theme)} {
          display: none;
        }
      `}
      {...props}
    >
      <SearchInput id="algolia-docsearch-mobile" placeholder="Search" ref={ref} />
    </div>
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
        inset: ${p => p.theme.space.base * 15}px 0 0 0;
        z-index: 3;
        background-color: ${p => p.theme.palette.tofu};
        padding: ${p => p.theme.space.lg} ${p => p.theme.space.xxl};
      `}
    >
      <StyledMobileNavLink to="/content">Content</StyledMobileNavLink>
      <StyledMobileNavLink to="/design">Design</StyledMobileNavLink>
      <StyledMobileNavLink to="/components">Components</StyledMobileNavLink>
      <StyledMobileNavLink to="/patterns">Patterns</StyledMobileNavLink>
    </div>
  );
};

const DesktopNav: React.FC = () => {
  const { colorScheme, setColorScheme } = useColorSchemeContext();

  const handleColorSchemeChange: IMenuProps['onChange'] = changes => {
    if (changes.value) {
      setTimeout(() => {
        setColorScheme(changes.value as ColorScheme);
      });
    }
  };

  return (
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
      <StyledDesktopNavItem>
        <StyledDesktopNavLink to="/patterns">Patterns</StyledDesktopNavLink>
      </StyledDesktopNavItem>
      <StyledDesktopNavItem>
        <SearchInput id="algolia-docsearch" placeholder="Search" />
      </StyledDesktopNavItem>
      <StyledDesktopNavItem>
        <Menu
          button={props => (
            <IconButton {...props}>
              <LightIcon />
            </IconButton>
          )}
          onChange={handleColorSchemeChange}
          placement="bottom-end"
        >
          <ItemGroup aria-label="Switch theme" type="radio">
            <Item icon={<LightIcon />} isSelected={colorScheme === 'light'} value="light">
              Light
            </Item>
            <Item icon={<DarkIcon />} isSelected={colorScheme === 'dark'} value="dark">
              Dark
            </Item>
            <Item icon={<SystemIcon />} isSelected={colorScheme === 'system'} value="system">
              System
            </Item>
          </ItemGroup>
        </Menu>
      </StyledDesktopNavItem>
    </nav>
  );
};

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
          {!!isSearchVisible && <MobileSearch ref={inputRef} />}
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

      {!!isNavigationVisible && <MobileNav />}
    </>
  );
};

export default Header;
