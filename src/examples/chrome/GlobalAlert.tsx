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
  Header,
  Main,
  Nav,
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
            onClick={() => {
              setShowGlobalAlert(false);
            }}
          />
        </GlobalAlert>
      )}
      <Chrome isFluid style={{ height: showGlobalAlert ? HEIGHT - height : HEIGHT }}>
        <SkipNav targetId="example-global-alert-main-content">Skip to main content</SkipNav>
        <Nav aria-label="chrome example nav">
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
          <Header />
          <Content id="example-global-alert-main-content">
            <Main style={{ padding: 28 }} />
          </Content>
          <Footer>
            <Footer.Item>
              <Button isBasic>Cancel</Button>
            </Footer.Item>
            <Footer.Item>
              <Button
                isPrimary
                onClick={() => {
                  setShowGlobalAlert(true);
                }}
              >
                Save
              </Button>
            </Footer.Item>
          </Footer>
        </Body>
      </Chrome>
    </div>
  );
};

export default Example;
