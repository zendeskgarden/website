/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { Dropdown, Field, Menu, Item, Select, Label } from '@zendeskgarden/react-dropdowns';

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
  const [selectedDefaultItem, setSelectedDefaultItem] = useState(items[0]);
  const [selectedCompactItem, setSelectedCompactItem] = useState(items[0]);

  return (
    <Grid>
      <Row>
        <Col>
          <Dropdown
            selectedItem={selectedDefaultItem}
            onSelect={setSelectedDefaultItem}
            downshiftProps={{ itemToString: (item: IItem) => item && item.label }}
          >
            <Field>
              <Label>Plants</Label>
              <Select>{selectedDefaultItem.label}</Select>
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
        <Col>
          <Dropdown
            selectedItem={selectedCompactItem}
            onSelect={setSelectedCompactItem}
            downshiftProps={{ itemToString: (item: IItem) => item && item.label }}
          >
            <Field>
              <Label>Plants</Label>
              <Select isCompact>{selectedCompactItem.label}</Select>
            </Field>
            <Menu isCompact>
              {items.map(option => (
                <Item key={option.value} value={option}>
                  {option.label}
                </Item>
              ))}
            </Menu>
          </Dropdown>
        </Col>
      </Row>
    </Grid>
  );
};

export default Example;
