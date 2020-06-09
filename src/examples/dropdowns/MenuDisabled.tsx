/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Dropdown, Field, Menu, Item, Select, Label } from '@zendeskgarden/react-dropdowns';

interface IItem {
  label: string;
  value: string;
}

const items = [
  { label: 'Cactus', value: 'item-1' },
  { label: 'Flower', value: 'item-2', disabled: true },
  { label: 'Succulent', value: 'item-3' }
];

const Example = () => {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <Dropdown
      selectedItem={selectedItem}
      onSelect={setSelectedItem}
      downshiftProps={{ itemToString: (item: IItem) => item && item.label }}
    >
      <Field>
        <Label>Plant</Label>
        <Select>{selectedItem.label}</Select>
      </Field>
      <Menu>
        {items.map(option => (
          <Item key={option.value} value={option} disabled={option.disabled}>
            {option.label}
          </Item>
        ))}
      </Menu>
    </Dropdown>
  );
};

export default Example;
