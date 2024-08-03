/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Dropdown, Menu, Item, Trigger } from '@zendeskgarden/react-dropdowns';
import { IconButton } from '@zendeskgarden/react-buttons';
import { Grid } from '@zendeskgarden/react-grid';
import { ReactComponent as LeafIcon } from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';

const Example = () => (
  <Grid.Row>
    <Grid.Col textAlign="center">
      <Dropdown onSelect={item => alert(`You planted a ${item}`)}>
        <Trigger>
          <IconButton aria-label="plant">
            <LeafIcon />
          </IconButton>
        </Trigger>
        <Menu hasArrow>
          <Item value="acacia">Acacia</Item>
          <Item value="daisy">Daisy</Item>
          <Item value="honeysuckle">Honeysuckle</Item>
        </Menu>
      </Dropdown>
    </Grid.Col>
  </Grid.Row>
);

export default Example;
