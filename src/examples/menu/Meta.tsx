/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback } from 'react';
import { Col, Row } from '@zendeskgarden/react-grid';
import { Menu, Item, IMenuProps } from '@zendeskgarden/react-dropdowns.next';

const Example = () => {
  const handleChange = useCallback<NonNullable<IMenuProps['onChange']>>(changes => {
    changes.value && alert(`You chose ${changes.value}`);
  }, []);

  return (
    <Row justifyContent="center">
      <Col textAlign="center">
        <Menu button="Harvest" onChange={handleChange}>
          <Item value="avocado">
            Avocado <Item.Meta>27 available</Item.Meta>
          </Item>
          <Item value="potato">
            Potato <Item.Meta>5 available</Item.Meta>
          </Item>
          <Item value="beet">
            Beet <Item.Meta>11 available</Item.Meta>
          </Item>
        </Menu>
      </Col>
    </Row>
  );
};

export default Example;
