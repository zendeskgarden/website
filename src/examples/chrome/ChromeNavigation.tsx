/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Grid } from '@zendeskgarden/react-grid';
import { Toggle, Field } from '@zendeskgarden/react-forms';
import { ReactComponent as ProductIcon } from '@zendeskgarden/svg-icons/src/26/garden.svg';
import { ReactComponent as HomeIcon } from '@zendeskgarden/svg-icons/src/26/home-fill.svg';
import { ReactComponent as EmailIcon } from '@zendeskgarden/svg-icons/src/26/email-fill.svg';
import { ReactComponent as SettingsIcon } from '@zendeskgarden/svg-icons/src/26/settings-fill.svg';
import { ReactComponent as ZendeskIcon } from '@zendeskgarden/svg-icons/src/26/zendesk.svg';
import { PALETTE } from '@zendeskgarden/react-theming';
import { Body, Chrome, Content, Header, Main, Nav, SkipNav } from '@zendeskgarden/react-chrome';

const Example = () => {
  const [nav, setNav] = useState('nav-1');
  const [expanded, setExpanded] = useState(false);

  return (
    <Chrome isFluid style={{ height: 500, minWidth: 600 }} hue={PALETTE.blue[900]}>
      <SkipNav targetId="example-navigation-main-content">Skip to main content</SkipNav>
      <Nav isExpanded={expanded} aria-label="chrome navigation example nav">
        <Nav.Item hasLogo>
          <Nav.ItemIcon>
            <ProductIcon style={{ color: PALETTE.green[500] }} />
          </Nav.ItemIcon>
          <Nav.ItemText>Zendesk Garden</Nav.ItemText>
        </Nav.Item>
        <Nav.List>
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
        </Nav.List>
        <Nav.Item hasBrandmark title="Zendesk">
          <Nav.ItemIcon>
            <ZendeskIcon />
          </Nav.ItemIcon>
          <Nav.ItemText>Zendesk</Nav.ItemText>
        </Nav.Item>
      </Nav>
      <Body>
        <Header />
        <Content id="example-navigation-main-content">
          <Main style={{ padding: 28 }}>
            <Grid.Row>
              <Grid.Col>
                <Field>
                  <Toggle
                    onChange={() => {
                      setExpanded(!expanded);
                    }}
                  >
                    <Field.Label>Show expanded</Field.Label>
                  </Toggle>
                </Field>
              </Grid.Col>
            </Grid.Row>
          </Main>
        </Content>
      </Body>
    </Chrome>
  );
};

export default Example;
