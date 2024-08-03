/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Dropdown, Menu, Item, ItemMeta, Trigger } from '@zendeskgarden/react-dropdowns';
import { Button } from '@zendeskgarden/react-buttons';
import { Grid } from '@zendeskgarden/react-grid';
import { ReactComponent as ChevronIcon } from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';

const Example = () => {
  const [rotated, setRotated] = useState<boolean | undefined>();

  return (
    <Grid.Row>
      <Grid.Col textAlign="center">
        <Dropdown
          onSelect={item => alert(`You planted a ${item}`)}
          onStateChange={options => Object.hasOwn(options, 'isOpen') && setRotated(options.isOpen)}
        >
          <Trigger>
            <Button>
              Harvest
              <Button.EndIcon isRotated={rotated}>
                <ChevronIcon />
              </Button.EndIcon>
            </Button>
          </Trigger>
          <Menu>
            <Item value="avocado">
              Avocado
              <ItemMeta>27 available</ItemMeta>
            </Item>
            <Item value="potato">
              Potato
              <ItemMeta>5 available</ItemMeta>
            </Item>
            <Item value="beet">
              Beet
              <ItemMeta>11 available</ItemMeta>
            </Item>
          </Menu>
        </Dropdown>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Example;
