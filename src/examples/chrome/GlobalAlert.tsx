/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import useResizeObserver from 'use-resize-observer';
import { ReactComponent as ProductIcon } from '@zendeskgarden/svg-icons/src/26/garden.svg';
import { ReactComponent as HomeIcon } from '@zendeskgarden/svg-icons/src/26/home-fill.svg';
import { ReactComponent as EmailIcon } from '@zendeskgarden/svg-icons/src/26/email-fill.svg';
import { ReactComponent as SettingsIcon } from '@zendeskgarden/svg-icons/src/26/settings-fill.svg';
import { ReactComponent as ZendeskIcon } from '@zendeskgarden/svg-icons/src/26/zendesk.svg';
import { PALETTE } from '@zendeskgarden/react-theming';
import {
  Body,
  Chrome,
  Content,
  Footer,
  FooterItem,
  Header,
  Main,
  Nav,
  NavItem,
  NavItemIcon,
  NavItemText,
  SkipNav
} from '@zendeskgarden/react-chrome';
import { GlobalAlert } from '@zendeskgarden/react-notifications';
import { Button } from '@zendeskgarden/react-buttons';

const HEIGHT = 400; // Chrome's 100vh height adjusted for demo

const Example = () => {
  const { height = 0, ref } = useResizeObserver({ box: 'border-box' });
  const [showGlobalAlert, setShowGlobalAlert] = useState(true);
  const [nav, setNav] = useState('nav-1');

  return (
    <div style={{ minWidth: 600 }}>
      {!!showGlobalAlert && (
        <GlobalAlert type="info" ref={ref}>
          <GlobalAlert.Content>
            <GlobalAlert.Title>Info</GlobalAlert.Title>
            Gumbo beet greens corn soko endive gumbo gourd.
          </GlobalAlert.Content>
          <GlobalAlert.Close
            aria-label="Close Global Alert"
            onClick={() => setShowGlobalAlert(false)}
          />
        </GlobalAlert>
      )}
      <Chrome isFluid style={{ height: showGlobalAlert ? HEIGHT - height : HEIGHT }}>
        <SkipNav targetId="example-global-alert-main-content">Skip to main content</SkipNav>
        <Nav aria-label="chrome example nav">
          <NavItem hasLogo>
            <NavItemIcon>
              <ProductIcon style={{ color: PALETTE.green[400] }} />
            </NavItemIcon>
            <NavItemText>Zendesk Garden</NavItemText>
          </NavItem>
          <NavItem isCurrent={nav === 'nav-1'} onClick={() => setNav('nav-1')}>
            <NavItemIcon>
              <HomeIcon />
            </NavItemIcon>
            <NavItemText>Home</NavItemText>
          </NavItem>
          <NavItem isCurrent={nav === 'nav-2'} onClick={() => setNav('nav-2')}>
            <NavItemIcon>
              <EmailIcon />
            </NavItemIcon>
            <NavItemText>Email</NavItemText>
          </NavItem>
          <NavItem isCurrent={nav === 'nav-3'} onClick={() => setNav('nav-3')}>
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
          <Header />
          <Content id="example-global-alert-main-content">
            <Main style={{ padding: 28 }} />
          </Content>
          <Footer>
            <FooterItem>
              <Button isBasic>Cancel</Button>
            </FooterItem>
            <FooterItem>
              <Button isPrimary onClick={() => setShowGlobalAlert(true)}>
                Save
              </Button>
            </FooterItem>
          </Footer>
        </Body>
      </Chrome>
    </div>
  );
};

export default Example;
