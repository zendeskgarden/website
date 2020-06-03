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
  HeaderItem,
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
            changes.selectedItem === 'specific-settings' ||
            changes.selectedItem === 'general-settings' ||
            changes.isOpen;
        }

        if (Object.prototype.hasOwnProperty.call(changes, 'selectedItem')) {
          updatedState.tempSelectedItem = changes.selectedItem;

          if (updatedState.tempSelectedItem === 'specific-settings') {
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
        <Button>Tree Layout</Button>
      </Trigger>
      <Menu placement="end" hasArrow>
        {state.tempSelectedItem === 'specific-settings' ? (
          <>
            <PreviousItem value="general-settings">Specific Settings</PreviousItem>
            <Separator />
            <Item value="cool-setting">Cool setting</Item>
            <Item value="uncool-setting">Uncool setting</Item>
            <Item value="another-setting">Another cool setting</Item>
          </>
        ) : (
          <>
            <HeaderItem>General Settings</HeaderItem>
            <Item value="profile">Profile</Item>
            <Item value="settings">Settings</Item>
            <Item value="user-images">User Images</Item>
            <NextItem value="specific-settings">Specific Settings</NextItem>
            <Item value="theme-editor">Theme Editor</Item>
          </>
        )}
      </Menu>
    </Dropdown>
  );
};

export default Example;
