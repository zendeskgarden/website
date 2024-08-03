/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Dropdown, Menu, Item, Trigger } from '@zendeskgarden/react-dropdowns.legacy';
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
              Choose succulent
              <Button.EndIcon isRotated={rotated}>
                <ChevronIcon />
              </Button.EndIcon>
            </Button>
          </Trigger>
          <Menu>
            <Item value="cactus">Cactus</Item>
            <Item value="jade">Jade plant</Item>
            <Item value="echeveria">Echeveria</Item>
          </Menu>
        </Dropdown>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Example;
