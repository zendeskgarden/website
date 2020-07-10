/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Dropdown, Field, Menu, Item, Select, Label } from '@zendeskgarden/react-dropdowns';
import { Row, Col } from '@zendeskgarden/react-grid';

interface IItem {
  label: string;
  value: string;
}

const items = [
  { label: 'Fern', value: 'item-1' },
  { label: 'Snake plant', value: 'item-2' },
  { label: 'Rubber tree', value: 'item-3' }
];

const Example = () => {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <Row justifyContent="center">
      <Col sm={5}>
        <Dropdown
          selectedItem={selectedItem}
          onSelect={setSelectedItem}
          downshiftProps={{ itemToString: (item: IItem) => item && item.label }}
        >
          <Field>
            <Label>Houseplant</Label>
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
      </Col>
    </Row>
  );
};

export default Example;
