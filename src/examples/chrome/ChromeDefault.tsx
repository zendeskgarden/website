/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';
import { XXL, MD } from '@zendeskgarden/react-typography';
import { ReactComponent as ProductIcon } from '@zendeskgarden/svg-icons/src/26/relationshape-support.svg';
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
  Sidebar
} from '@zendeskgarden/react-chrome';

const Example = () => (
  <Row>
    <Col>
      <Chrome isFluid style={{ height: 500 }}>
        <Nav>
          <NavItem hasLogo product="support">
            <NavItemIcon>
              <ProductIcon />
            </NavItemIcon>
            <NavItemText>Zendesk Support</NavItemText>
          </NavItem>
          <NavItem isCurrent>
            <NavItemIcon>
              <HomeIcon />
            </NavItemIcon>
            <NavItemText>Home</NavItemText>
          </NavItem>
          <NavItem>
            <NavItemIcon>
              <EmailIcon />
            </NavItemIcon>
            <NavItemText>Email</NavItemText>
          </NavItem>
          <NavItem>
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
          <Content>
            <Main style={{ padding: 28 }}>
              <XXL>Main Content</XXL>
              <MD>Beetroot water spinach okra water chestnut ricebean pea catsear.</MD>
            </Main>
            <Sidebar style={{ padding: 28 }}>
              <XXL>Example Sidebar</XXL>
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
    </Col>
  </Row>
);

export default Example;
