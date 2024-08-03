/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import {
  Dropdown,
  Menu,
  Item,
  Trigger,
  Separator,
  NextItem,
  PreviousItem
} from '@zendeskgarden/react-dropdowns.legacy';
import { Button } from '@zendeskgarden/react-buttons';
import { Grid } from '@zendeskgarden/react-grid';
import { ReactComponent as ChevronIcon } from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';

const Example = () => {
  const [state, setState] = useState({
    isOpen: false,
    tempSelectedItem: undefined
  });

  return (
    <Grid.Row>
      <Grid.Col textAlign="center">
        <Dropdown
          isOpen={state.isOpen}
          onSelect={item => {
            if (item !== 'fruits' && item !== 'berry') {
              alert(`You picked a ${item}`);
            }
          }}
          onStateChange={(changes, stateAndHelpers) => {
            const updatedState: any = {};

            if (Object.hasOwn(changes, 'isOpen')) {
              updatedState.isOpen =
                changes.selectedItem === 'berry' ||
                changes.selectedItem === 'fruits' ||
                changes.isOpen;
            }

            if (Object.hasOwn(changes, 'selectedItem')) {
              updatedState.tempSelectedItem = changes.selectedItem;
              stateAndHelpers.setHighlightedIndex(1);
            }

            if (Object.keys(updatedState).length > 0) {
              setState(updatedState);
            }
          }}
        >
          <Trigger>
            <Button>
              Fruit
              <Button.EndIcon isRotated={state.isOpen}>
                <ChevronIcon />
              </Button.EndIcon>
            </Button>
          </Trigger>
          <Menu placement="end">
            {state.tempSelectedItem === 'berry' ? (
              <>
                <PreviousItem value="fruits">Fruit</PreviousItem>
                <Separator />
                <Item value="strawberry">Strawberry</Item>
                <Item value="loganberry">Loganberry</Item>
                <Item value="boysenberry">Boysenberry</Item>
              </>
            ) : (
              <>
                <Item value="orange">Orange</Item>
                <NextItem value="berry">Berry</NextItem>
                <Item value="apple">Apple</Item>
              </>
            )}
          </Menu>
        </Dropdown>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Example;
