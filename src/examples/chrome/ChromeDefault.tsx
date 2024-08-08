/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Button } from '@zendeskgarden/react-buttons';
import { XXL, MD } from '@zendeskgarden/react-typography';
import { PALETTE } from '@zendeskgarden/react-theming';
import { ReactComponent as ProductIcon } from '@zendeskgarden/svg-icons/src/26/garden.svg';
import { ReactComponent as HomeIcon } from '@zendeskgarden/svg-icons/src/26/home-fill.svg';
import { ReactComponent as EmailIcon } from '@zendeskgarden/svg-icons/src/26/email-fill.svg';
import { ReactComponent as SettingsIcon } from '@zendeskgarden/svg-icons/src/26/settings-fill.svg';
import { ReactComponent as ZendeskIcon } from '@zendeskgarden/svg-icons/src/26/zendesk.svg';
import { ReactComponent as MenuTrayIcon } from '@zendeskgarden/svg-icons/src/16/grid-2x2-stroke.svg';
import { ReactComponent as PersonIcon } from '@zendeskgarden/svg-icons/src/16/user-solo-stroke.svg';
import {
  Chrome,
  Body,
  Content,
  Main,
  Header,
  HeaderItem,
  HeaderItemIcon,
  HeaderItemText,
  Footer,
  FooterItem,
  Nav,
  NavItem,
  NavItemIcon,
  NavItemText,
  Sidebar,
  SkipNav
} from '@zendeskgarden/react-chrome';

const Example = () => {
  const [nav, setNav] = useState('nav-1');

  return (
    <Chrome isFluid style={{ height: 500, minWidth: 600 }}>
      <SkipNav targetId="example-main-content">Skip to main content</SkipNav>
      <Nav aria-label="chrome default example">
        <NavItem hasLogo>
          <NavItemIcon>
            <ProductIcon style={{ color: PALETTE.green[500] }} />
          </NavItemIcon>
          <NavItemText>Zendesk Garden</NavItemText>
        </NavItem>
        <NavItem
          isCurrent={nav === 'nav-1'}
          onClick={() => {
            setNav('nav-1');
          }}
        >
          <NavItemIcon>
            <HomeIcon />
          </NavItemIcon>
          <NavItemText>Home</NavItemText>
        </NavItem>
        <NavItem
          isCurrent={nav === 'nav-2'}
          onClick={() => {
            setNav('nav-2');
          }}
        >
          <NavItemIcon>
            <EmailIcon />
          </NavItemIcon>
          <NavItemText>Email</NavItemText>
        </NavItem>
        <NavItem
          isCurrent={nav === 'nav-3'}
          onClick={() => {
            setNav('nav-3');
          }}
        >
          <NavItemIcon>
            <SettingsIcon />
          </NavItemIcon>
          <NavItemText>Settings</NavItemText>
        </NavItem>
        <NavItem hasBrandmark title="Zendesk">
          <NavItemIcon>
            <ZendeskIcon />
          </NavItemIcon>
          <NavItemText>Zendesk</NavItemText>
        </NavItem>
      </Nav>
      <Body hasFooter>
        <Header>
          <HeaderItem>
            <HeaderItemIcon>
              <MenuTrayIcon />
            </HeaderItemIcon>
            <HeaderItemText isClipped>Products</HeaderItemText>
          </HeaderItem>
          <HeaderItem isRound>
            <HeaderItemIcon>
              <PersonIcon />
            </HeaderItemIcon>
            <HeaderItemText isClipped>User</HeaderItemText>
          </HeaderItem>
        </Header>
        <Content id="example-main-content">
          <Main style={{ padding: 28 }}>
            <XXL tag="h1">Main Content</XXL>
            <MD>Beetroot water spinach okra water chestnut ricebean pea catsear.</MD>
          </Main>
          <Sidebar style={{ padding: 28 }}>
            <XXL tag="h2">Example Sidebar</XXL>
            <MD>
              Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer
              purslane. Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale
              radicchio turnip chicory salsify pea sprouts fava bean.
            </MD>
          </Sidebar>
        </Content>
        <Footer>
          <FooterItem>
            <Button isBasic>Cancel</Button>
          </FooterItem>
          <FooterItem>
            <Button isPrimary>Save</Button>
          </FooterItem>
        </Footer>
      </Body>
    </Chrome>
  );
};

export default Example;
