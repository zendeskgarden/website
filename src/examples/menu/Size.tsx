/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback } from 'react';
import { Col, Row } from '@zendeskgarden/react-grid';
import { Menu, Item } from '@zendeskgarden/react-dropdowns.next';

const Example = () => {
  const handleChange = useCallback(changes => {
    changes.value && alert(`You chose ${changes.value}`);
  }, []);

  return (
    <Row justifyContent="center">
      <Col textAlign="center">
        <Menu button="Default" onChange={handleChange}>
          <Item value="tomato">Tomato</Item>
          <Item value="corn">Corn</Item>
          <Item value="onion">Onion</Item>
        </Menu>
      </Col>
      <Col textAlign="center">
        <Menu button="Compact" isCompact onChange={handleChange}>
          <Item value="cactus">Grape tomato</Item>
          <Item value="flower">Baby corn</Item>
          <Item value="succulent">Pearl onion</Item>
        </Menu>
      </Col>
    </Row>
  );
};

export default Example;
