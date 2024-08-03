/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Dropdown, Field, Menu, Item, Hint, Select, Label } from '@zendeskgarden/react-dropdowns';
import { Grid } from '@zendeskgarden/react-grid';

interface IItem {
  label: string;
  value: string;
}

const items = [
  { label: 'Cactus', value: 'item-1' },
  { label: 'Orchid', value: 'item-2' },
  { label: 'Succulent', value: 'item-3' }
];

const Example = () => {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <Grid.Row justifyContent="center">
      <Grid.Col sm={5}>
        <Dropdown
          selectedItem={selectedItem}
          onSelect={setSelectedItem}
          downshiftProps={{ itemToString: (item: IItem) => item && item.label }}
        >
          <Field>
            <Label>Plant</Label>
            <Hint>Choose your favorite plant</Hint>
            <Select>{selectedItem.label}</Select>
          </Field>
          <Menu>
            {items.map(option => (
              <Item key={option.value} value={option}>
                {option.label}
              </Item>
            ))}
          </Menu>
        </Dropdown>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Example;
