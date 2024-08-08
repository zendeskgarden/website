/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import {
  Chrome,
  Body,
  Header,
  HeaderItem,
  HeaderItemIcon,
  HeaderItemText
} from '@zendeskgarden/react-chrome';
import { PALETTE } from '@zendeskgarden/react-theming';
import { ReactComponent as ProductIcon } from '@zendeskgarden/svg-icons/src/26/garden.svg';
import { ReactComponent as HelpIcon } from '@zendeskgarden/svg-icons/src/16/lifesaver-stroke.svg';
import { ReactComponent as MenuTrayIcon } from '@zendeskgarden/svg-icons/src/16/grid-2x2-stroke.svg';
import { ReactComponent as PersonIcon } from '@zendeskgarden/svg-icons/src/16/user-solo-stroke.svg';

const Example = () => (
  <Chrome isFluid style={{ height: 80 }}>
    <Body>
      <Header isStandalone>
        <HeaderItem hasLogo>
          <HeaderItemIcon>
            <ProductIcon style={{ color: PALETTE.green[500] }} />
          </HeaderItemIcon>
          <HeaderItemText>Zendesk Garden</HeaderItemText>
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
);

export default Example;
