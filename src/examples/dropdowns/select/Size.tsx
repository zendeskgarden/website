/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid } from '@zendeskgarden/react-grid';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { Dropdown, Field, Menu, Item, Select, Label } from '@zendeskgarden/react-dropdowns';

const StyledCol = styled(Grid.Col)`
  ${p => mediaQuery('down', 'xs', p.theme)} {
    margin-top: ${p => p.theme.space.sm};
  }
`;

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
    <Grid.Row justifyContent="center">
      <Grid.Col sm={5}>
        <Dropdown
          selectedItem={selectedDefaultItem}
          onSelect={setSelectedDefaultItem}
          downshiftProps={{ itemToString: (item: IItem) => item && item.label }}
        >
          <Field>
            <Label>Plant</Label>
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
      </Grid.Col>
      <StyledCol sm={5}>
        <Dropdown
          selectedItem={selectedCompactItem}
          onSelect={setSelectedCompactItem}
          downshiftProps={{ itemToString: (item: IItem) => item && item.label }}
        >
          <Field>
            <Label>Plant</Label>
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
      </StyledCol>
    </Grid.Row>
  );
};

export default Example;
