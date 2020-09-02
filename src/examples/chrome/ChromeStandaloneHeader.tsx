/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import {
  Chrome,
  Body,
  Header,
  HeaderItem,
  HeaderItemIcon,
  HeaderItemText
} from '@zendeskgarden/react-chrome';
import { ReactComponent as SupportIcon } from '@zendeskgarden/svg-icons/src/26/relationshape-support.svg';
import { ReactComponent as HelpIcon } from '@zendeskgarden/svg-icons/src/16/lifesaver-stroke.svg';
import { ReactComponent as MenuTrayIcon } from '@zendeskgarden/svg-icons/src/16/grid-2x2-stroke.svg';
import { ReactComponent as PersonIcon } from '@zendeskgarden/svg-icons/src/16/user-solo-stroke.svg';

const Example = () => (
  <Row>
    <Col>
      <Chrome isFluid style={{ height: 80 }}>
        <Body>
          <Header isStandalone>
            <HeaderItem hasLogo product="support">
              <HeaderItemIcon>
                <SupportIcon />
              </HeaderItemIcon>
              <HeaderItemText>Zendesk Support</HeaderItemText>
            </HeaderItem>
            <HeaderItem>
              <HeaderItemIcon>
                <HelpIcon />
              </HeaderItemIcon>
              <HeaderItemText>Help Center</HeaderItemText>
            </HeaderItem>
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
        </Body>
      </Chrome>
    </Col>
  </Row>
);

export default Example;
