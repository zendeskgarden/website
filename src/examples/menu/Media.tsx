/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback } from 'react';
import { Col, Row } from '@zendeskgarden/react-grid';
import { Menu, Item, ItemGroup, Separator } from '@zendeskgarden/react-dropdowns.next';
import { ReactComponent as LeafIcon } from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';

const Example = () => {
  const handleChange = useCallback(changes => {
    changes.value && alert(`You chose ${changes.value}`);
  }, []);

  return (
    <Row justifyContent="center">
      <Col textAlign="center">
        <Menu button="Menu" onChange={handleChange}>
          <ItemGroup icon={<LeafIcon />} legend="Plants">
            <Item icon={<LeafIcon />} value="cactus">
              Cactus
              <Item.Meta>15 available</Item.Meta>
            </Item>
            <Item icon={<LeafIcon />} value="flower">
              Flower
            </Item>
            <Item value="succulent">Succulent</Item>
          </ItemGroup>
          <Separator />
          <Item type="add" value="add-plant">
            Add plant
          </Item>
        </Menu>
      </Col>
    </Row>
  );
};

export default Example;
