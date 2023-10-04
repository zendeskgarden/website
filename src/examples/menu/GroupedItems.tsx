/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Col, Row } from '@zendeskgarden/react-grid';
import { Menu, Item, ItemGroup, ISelectedItem } from '@zendeskgarden/react-dropdowns.next';

const Example = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleChange = ({
    isExpanded,
    selectedItems
  }: {
    isExpanded?: boolean;
    selectedItems?: ISelectedItem[];
  }) => {
    // Only close if the selected item type is undefined or 'radio'
    if (isExpanded !== undefined && !selectedItems) {
      setExpanded(isExpanded);
    }
  };

  return (
    <Row justifyContent="center">
      <Col textAlign="center">
        <Menu button="Choose produce" onChange={handleChange} isExpanded={expanded}>
          <ItemGroup legend="Select vegetables" type="checkbox">
            <Item value="Asparagus" />
            <Item value="Broccoli" />
            <Item value="Cauliflower" isSelected />
          </ItemGroup>
          <ItemGroup legend="Pick a fruit" type="radio">
            <Item value="Apple" name="fruits" />
            <Item value="Kiwi" name="fruits" />
            <Item value="Banana" name="fruits" />
          </ItemGroup>
        </Menu>
      </Col>
    </Row>
  );
};

export default Example;
