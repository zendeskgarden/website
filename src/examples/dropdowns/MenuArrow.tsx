/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Dropdown, Menu, Item, Trigger } from '@zendeskgarden/react-dropdowns';
import { Button } from '@zendeskgarden/react-buttons';

const Example = () => (
  <Dropdown onSelect={item => alert(item)}>
    <Trigger>
      <Button>Menu</Button>
    </Trigger>
    <Menu hasArrow>
      <Item value="cactus">Cactus</Item>
      <Item value="flower">Flower</Item>
      <Item value="succulent">Succulent</Item>
    </Menu>
  </Dropdown>
);

export default Example;
