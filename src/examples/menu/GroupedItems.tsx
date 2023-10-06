/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback, useState } from 'react';
import { Col, Row } from '@zendeskgarden/react-grid';
import { Menu, Item, ItemGroup, ISelectedItem } from '@zendeskgarden/react-dropdowns.next';

const Example = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleChange = useCallback(
    ({
      isExpanded,
      selectedItems
    }: {
      isExpanded?: boolean;
      value?: string;
      selectedItems?: ISelectedItem[];
    }) => {
      const lastItem = selectedItems?.[selectedItems.length - 1];
      const isNonCheckboxItem = !selectedItems || lastItem?.type !== 'checkbox';

      if (isExpanded !== undefined && isNonCheckboxItem) {
        setExpanded(isExpanded);
      }
    },
    []
  );

  return (
    <Row justifyContent="center">
      <Col textAlign="center">
        <Menu button="Choose produce" onChange={handleChange} isExpanded={expanded}>
          <ItemGroup legend="Select vegetables" type="checkbox">
            <Item value="asparagus">Asparagus</Item>
            <Item value="broccoli">Broccoli</Item>
            <Item value="cauliflower" isSelected>
              Cauliflower
            </Item>
          </ItemGroup>
          <ItemGroup legend="Pick a fruit" type="radio">
            <Item value="apple" name="fruits">
              Apple
            </Item>
            <Item value="kiwi" name="fruits">
              Kiwi
            </Item>
            <Item value="banana" name="fruits">
              Banana
            </Item>
          </ItemGroup>
        </Menu>
      </Col>
    </Row>
  );
};

export default Example;
