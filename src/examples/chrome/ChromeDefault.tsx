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
  Footer,
  Nav,
  SkipNav
} from '@zendeskgarden/react-chrome';

const Example = () => {
  const [nav, setNav] = useState('nav-1');

  return (
    <Chrome isFluid style={{ height: 500, minWidth: 600 }}>
      <SkipNav targetId="example-main-content">Skip to main content</SkipNav>
      <Nav aria-label="chrome default example">
        <Nav.Item hasLogo>
          <Nav.ItemIcon>
            <ProductIcon style={{ color: PALETTE.green[500] }} />
          </Nav.ItemIcon>
          <Nav.ItemText>Zendesk Garden</Nav.ItemText>
        </Nav.Item>
        <Nav.Item
          isCurrent={nav === 'nav-1'}
          onClick={() => {
            setNav('nav-1');
          }}
        >
          <Nav.ItemIcon>
            <HomeIcon />
          </Nav.ItemIcon>
          <Nav.ItemText>Home</Nav.ItemText>
        </Nav.Item>
        <Nav.Item
          isCurrent={nav === 'nav-2'}
          onClick={() => {
            setNav('nav-2');
          }}
        >
          <Nav.ItemIcon>
            <EmailIcon />
          </Nav.ItemIcon>
          <Nav.ItemText>Email</Nav.ItemText>
        </Nav.Item>
        <Nav.Item
          isCurrent={nav === 'nav-3'}
          onClick={() => {
            setNav('nav-3');
          }}
        >
          <Nav.ItemIcon>
            <SettingsIcon />
          </Nav.ItemIcon>
          <Nav.ItemText>Settings</Nav.ItemText>
        </Nav.Item>
        <Nav.Item hasBrandmark title="Zendesk">
          <Nav.ItemIcon>
            <ZendeskIcon />
          </Nav.ItemIcon>
          <Nav.ItemText>Zendesk</Nav.ItemText>
        </Nav.Item>
      </Nav>
      <Body>
        <Header>
          <Header.Item>
            <Header.ItemIcon>
              <MenuTrayIcon />
            </Header.ItemIcon>
            <Header.ItemText isClipped>Products</Header.ItemText>
          </Header.Item>
          <Header.Item isRound>
            <Header.ItemIcon>
              <PersonIcon />
            </Header.ItemIcon>
            <Header.ItemText isClipped>User</Header.ItemText>
          </Header.Item>
        </Header>
        <Content id="example-main-content">
          <Main style={{ padding: 28 }}>
            <XXL tag="h1">Main Content</XXL>
            <MD>Beetroot water spinach okra water chestnut ricebean pea catsear.</MD>
          </Main>
        </Content>
        <Footer>
          <Footer.Item>
            <Button isBasic>Cancel</Button>
          </Footer.Item>
          <Footer.Item>
            <Button isPrimary>Save</Button>
          </Footer.Item>
        </Footer>
      </Body>
    </Chrome>
  );
};

export default Example;
