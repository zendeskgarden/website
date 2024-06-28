/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Toggle, Label, Field } from '@zendeskgarden/react-forms';
import { ReactComponent as ProductIcon } from '@zendeskgarden/svg-icons/src/26/garden.svg';
import { ReactComponent as HomeIcon } from '@zendeskgarden/svg-icons/src/26/home-fill.svg';
import { ReactComponent as EmailIcon } from '@zendeskgarden/svg-icons/src/26/email-fill.svg';
import { ReactComponent as SettingsIcon } from '@zendeskgarden/svg-icons/src/26/settings-fill.svg';
import { ReactComponent as ZendeskIcon } from '@zendeskgarden/svg-icons/src/26/zendesk.svg';
import { PALETTE } from '@zendeskgarden/react-theming';
import {
  Body,
  Chrome,
  CollapsibleSubNavItem,
  Content,
  Header,
  Main,
  Nav,
  NavItem,
  NavItemIcon,
  NavItemText,
  SubNav,
  SubNavItem,
  SubNavItemText,
  SkipNav
} from '@zendeskgarden/react-chrome';

const Example = () => {
  const [nav, setNav] = useState('nav-1');
  const [subNav, setSubNav] = useState('item-1');
  const [collapsed, setCollapsed] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [showSubNav, setShowSubNav] = useState(false);

  return (
    <Chrome isFluid style={{ height: 500, minWidth: 600 }} hue={PALETTE.blue[800]}>
      <SkipNav targetId="example-navigation-main-content">Skip to main content</SkipNav>
      <Nav isExpanded={expanded} aria-label="chrome navigation example nav">
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
      {!!showSubNav && (
        <SubNav aria-label="chrome navigation example subnav">
          <SubNavItem isCurrent={subNav === 'item-1'} onClick={() => setSubNav('item-1')}>
            <SubNavItemText>Subnav 1</SubNavItemText>
          </SubNavItem>
          <SubNavItem isCurrent={subNav === 'item-2'} onClick={() => setSubNav('item-2')}>
            <SubNavItemText>Subnav 2</SubNavItemText>
          </SubNavItem>
          <CollapsibleSubNavItem
            header="Collapsible Item"
            onChange={setCollapsed}
            isExpanded={collapsed}
          >
            <SubNavItem
              isCurrent={subNav === 'collapsed-item-1'}
              onClick={() => setSubNav('collapsed-item-1')}
            >
              <SubNavItemText>Item 1</SubNavItemText>
            </SubNavItem>
            <SubNavItem
              isCurrent={subNav === 'collapsed-item-2'}
              onClick={() => setSubNav('collapsed-item-2')}
            >
              <SubNavItemText>Item 2</SubNavItemText>
            </SubNavItem>
            <SubNavItem
              isCurrent={subNav === 'collapsed-item-3'}
              onClick={() => setSubNav('collapsed-item-3')}
            >
              <SubNavItemText>Item 3</SubNavItemText>
            </SubNavItem>
          </CollapsibleSubNavItem>
          <SubNavItem isCurrent={subNav === 'item-3'} onClick={() => setSubNav('item-3')}>
            <SubNavItemText>Subnav 3</SubNavItemText>
          </SubNavItem>
        </SubNav>
      )}
      <Body>
        <Header />
        <Content id="example-navigation-main-content">
          <Main style={{ padding: 28 }}>
            <Row>
              <Col>
                <Field>
                  <Toggle onChange={() => setExpanded(!expanded)}>
                    <Label>Show expanded</Label>
                  </Toggle>
                </Field>
              </Col>
              <div style={{ width: '100%', height: '12px' }} />
              <Col>
                <Field>
                  <Toggle onChange={() => setShowSubNav(!showSubNav)}>
                    <Label>Show subnav</Label>
                  </Toggle>
                </Field>
              </Col>
            </Row>
          </Main>
        </Content>
      </Body>
    </Chrome>
  );
};

export default Example;
