/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Dropdown, Field, Menu, Item, Hint, Select, Label } from '@zendeskgarden/react-dropdowns';

interface IItem {
  label: string;
  value: string;
}

const items = [
  { label: 'Cactus', value: 'item-1' },
  { label: 'Orchid', value: 'item-2' },
  { label: 'Succulent', value: 'item-3' }
];

const StyledField = styled(Field)`
  * {
    /* stylelint-disable-next-line declaration-no-important */
    appearance: none !important;
  }
`;

const Example = () => {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <Dropdown
      selectedItem={selectedItem}
      onSelect={setSelectedItem}
      downshiftProps={{ itemToString: (item: IItem) => item && item.label }}
    >
      <StyledField>
        <Label>Label</Label>
        <Hint>Choose your favorite plant</Hint>
        <Select>{selectedItem.label}</Select>
      </StyledField>
      <Menu>
        {items.map(option => (
          <Item key={option.value} value={option}>
            {option.label}
          </Item>
        ))}
      </Menu>
    </Dropdown>
  );
};

export default Example;
