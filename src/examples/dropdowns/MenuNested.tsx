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
} from '@zendeskgarden/react-dropdowns';
import { Button } from '@zendeskgarden/react-buttons';
import { Row, Col } from '@zendeskgarden/react-grid';

const Example = () => {
  const [state, setState] = useState({
    isOpen: false,
    tempSelectedItem: undefined
  });

  return (
    <Row>
      <Col textAlign="center">
        <Dropdown
          isOpen={state.isOpen}
          onSelect={item => {
            if (item !== 'plants' && item !== 'flowers') {
              alert(`You planted a ${item}`);
            }
          }}
          onStateChange={(changes, stateAndHelpers) => {
            const updatedState: any = {};

            if (Object.prototype.hasOwnProperty.call(changes, 'isOpen')) {
              updatedState.isOpen =
                changes.selectedItem === 'flowers' ||
                changes.selectedItem === 'plants' ||
                changes.isOpen;
            }

            if (Object.prototype.hasOwnProperty.call(changes, 'selectedItem')) {
              updatedState.tempSelectedItem = changes.selectedItem;

              if (updatedState.tempSelectedItem === 'flowers') {
                stateAndHelpers.setHighlightedIndex(1);
              } else if (updatedState.tempSelectedItem === 'plants') {
                stateAndHelpers.setHighlightedIndex(3);
              }
            }

            if (Object.keys(updatedState).length > 0) {
              setState(updatedState);
            }
          }}
        >
          <Trigger>
            <Button>Menu</Button>
          </Trigger>
          <Menu placement="end">
            {state.tempSelectedItem === 'flowers' ? (
              <>
                <PreviousItem value="plants">Plants</PreviousItem>
                <Separator />
                <Item value="daisy">Daisy</Item>
                <Item value="tulip">Tulip</Item>
                <Item value="rose">Rose</Item>
              </>
            ) : (
              <>
                <Item value="cactus">Cactus</Item>
                <NextItem value="flowers">Flowers</NextItem>
                <Item value="shrub">Shrub</Item>
              </>
            )}
          </Menu>
        </Dropdown>
      </Col>
    </Row>
  );
};

export default Example;
