/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Dropdown, Menu, Item, ItemMeta, Trigger } from '@zendeskgarden/react-dropdowns';
import { Button } from '@zendeskgarden/react-buttons';

const Example = () => {
  return (
    /* eslint-disable no-alert */
    <Dropdown onSelect={item => alert(item)}>
      <Trigger>
        <Button>Menu</Button>
      </Trigger>
      <Menu>
        <Item value="cactus">
          Cactus
          <ItemMeta>10 available</ItemMeta>
        </Item>
        <Item value="flower">
          Flower
          <ItemMeta>20 available</ItemMeta>
        </Item>
        <Item value="succulent">
          Succulent
          <ItemMeta>30 available</ItemMeta>
        </Item>
      </Menu>
    </Dropdown>
  );
};

export default Example;
