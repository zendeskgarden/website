/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Chrome, Body, Header } from '@zendeskgarden/react-chrome';
import { PALETTE } from '@zendeskgarden/react-theming';
import { ReactComponent as ProductIcon } from '@zendeskgarden/svg-icons/src/26/garden.svg';
import { ReactComponent as HelpIcon } from '@zendeskgarden/svg-icons/src/16/lifesaver-stroke.svg';
import { ReactComponent as MenuTrayIcon } from '@zendeskgarden/svg-icons/src/16/grid-2x2-stroke.svg';
import { ReactComponent as PersonIcon } from '@zendeskgarden/svg-icons/src/16/user-solo-stroke.svg';

const Example = () => (
  <Chrome isFluid style={{ height: 80 }}>
    <Body>
      <Header isStandalone>
        <Header.Item hasLogo>
          <Header.ItemIcon>
            <ProductIcon style={{ color: PALETTE.green[500] }} />
          </Header.ItemIcon>
          <Header.ItemText>Zendesk Garden</Header.ItemText>
        </Header.Item>
        <Header.Item>
          <Header.ItemIcon>
            <HelpIcon />
          </Header.ItemIcon>
          <Header.ItemText>Help Center</Header.ItemText>
        </Header.Item>
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
    </Body>
  </Chrome>
);

export default Example;
