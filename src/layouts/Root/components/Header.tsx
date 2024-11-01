/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, HTMLAttributes, useRef, useEffect, ChangeEventHandler } from 'react';
import styled, { css, useTheme } from 'styled-components';
import { getColor, mediaQuery } from '@zendeskgarden/react-theming';
import { IconButton } from '@zendeskgarden/react-buttons';
import { IMenuProps, Item, ItemGroup, Menu } from '@zendeskgarden/react-dropdowns';
import { ReactComponent as SearchStroke } from '@zendeskgarden/svg-icons/src/16/search-stroke.svg';
import { ReactComponent as OverflowVerticalStroke } from '@zendeskgarden/svg-icons/src/16/overflow-vertical-stroke.svg';
import { ReactComponent as CloseStroke } from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';
import { ReactComponent as LightIcon } from '@zendeskgarden/svg-icons/src/16/sun-stroke.svg';
import { ReactComponent as DarkIcon } from '@zendeskgarden/svg-icons/src/16/moon-stroke.svg';
import { ReactComponent as SystemIcon } from '@zendeskgarden/svg-icons/src/16/monitor-stroke.svg';
import { ReactComponent as GardenIcon } from '@zendeskgarden/svg-icons/src/26/garden.svg';
import { ReactComponent as GardenWordmark } from '@zendeskgarden/svg-icons/src/26/wordmark-garden.svg';
import { ColorScheme, useColorSchemeContext } from 'components/useColorSchemeContext';
import MaxWidthLayout from 'layouts/MaxWidth';
import { SearchInput } from './SearchInput';
import { Link, StyledNavigationLink } from './StyledNavigationLink';
import { Field, Select } from '@zendeskgarden/react-forms';

export const headerBoxShadow = (theme: any) =>
  theme.shadows.lg(
    `${theme.space.base * 4}px`,
    `${theme.space.base * 6}px`,
    getColor({
      theme,
      hue: 'neutralHue',
      shade: 1200,
      dark: { transparency: theme.opacity[800] },
      light: { transparency: theme.opacity[200] }
    })
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
  background-color: ${p => getColor({ theme: p.theme, variable: 'background.default' })};
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

export const StyledGardenIcon = styled(GardenIcon)`
  width: ${p => p.theme.iconSizes.lg};
  height: ${p => p.theme.iconSizes.lg};
  color: ${p => getColor({ theme: p.theme, hue: 'green', shade: 500 })};
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
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <StyledGardenIcon />
        <GardenWordmark
          css={css`
            margin-left: ${p => p.theme.space.xs};
            height: ${p => p.theme.iconSizes.lg};
            color: ${p =>
              getColor({
                theme: p.theme,
                hue: 'chromeHue',
                dark: { shade: 300 },
                light: { shade: 800 }
              })};

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
  const { colorScheme, setColorScheme } = useColorSchemeContext();

  const handleColorSchemeChange: ChangeEventHandler<HTMLSelectElement> = event => {
    setColorScheme(event.target.value as ColorScheme);
  };

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
        background-color: ${p => getColor({ theme: p.theme, variable: 'background.recessed' })};
        padding: ${p => p.theme.space.lg} ${p => p.theme.space.xxl};
      `}
    >
      <StyledMobileNavLink to="/content">Content</StyledMobileNavLink>
      <StyledMobileNavLink to="/design">Design</StyledMobileNavLink>
      <StyledMobileNavLink to="/components">Components</StyledMobileNavLink>
      <StyledMobileNavLink to="/patterns">Patterns</StyledMobileNavLink>
      <Field
        css={css`
          margin-top: ${p => p.theme.space.base * 2}px;
          padding: ${p => p.theme.space.base * 1.5}px ${p => p.theme.space.xs};
        `}
      >
        <Field.Label isRegular>Switch themes</Field.Label>
        <Select defaultValue="system" value={colorScheme} onChange={handleColorSchemeChange}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System</option>
        </Select>
      </Field>
    </div>
  );
};

const DesktopNav: React.FC = () => {
  const { colorScheme, setColorScheme } = useColorSchemeContext();

  const theme = useTheme();

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
              {theme.colors.base === 'dark' ? <DarkIcon /> : <LightIcon />}
            </IconButton>
          )}
          onChange={handleColorSchemeChange}
          placement="bottom-end"
          selectedItems={[{ value: colorScheme }]}
        >
          <ItemGroup aria-label="Switch theme" type="radio">
            <Item icon={<LightIcon />} value="light">
              Light
            </Item>
            <Item icon={<DarkIcon />} value="dark">
              Dark
            </Item>
            <Item icon={<SystemIcon />} isSelected value="system">
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
