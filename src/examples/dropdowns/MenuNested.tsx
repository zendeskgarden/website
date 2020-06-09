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

const Example = () => {
  const [state, setState] = useState({
    isOpen: false,
    tempSelectedItem: undefined
  });

  return (
    <Dropdown
      isOpen={state.isOpen}
      onStateChange={(changes, stateAndHelpers) => {
        const updatedState: any = {};

        if (Object.prototype.hasOwnProperty.call(changes, 'isOpen')) {
          updatedState.isOpen =
            changes.selectedItem === 'flowers' ||
            changes.selectedItem === 'general-settings' ||
            changes.isOpen;
        }

        if (Object.prototype.hasOwnProperty.call(changes, 'selectedItem')) {
          updatedState.tempSelectedItem = changes.selectedItem;

          if (updatedState.tempSelectedItem === 'flowers') {
            stateAndHelpers.setHighlightedIndex(1);
          } else if (updatedState.tempSelectedItem === 'general-settings') {
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
      <Menu placement="end" hasArrow>
        {state.tempSelectedItem === 'flowers' ? (
          <>
            <PreviousItem value="general-settings">Flowers</PreviousItem>
            <Separator />
            <Item value="daisy">Daisy</Item>
            <Item value="blue-gem">Blue Gem</Item>
            <Item value="cala-lily">Cala Lily</Item>
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
  );
};

export default Example;
