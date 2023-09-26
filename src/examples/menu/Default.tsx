/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Col, Row } from '@zendeskgarden/react-grid';
import { Menu, Item } from '@zendeskgarden/react-dropdowns.next';

const Example = () => {
  return (
    <Row justifyContent="center">
      <Col textAlign="center">
        <Menu button="Choose succulent">
          <Item value="plant-01">Cactus</Item>
          <Item value="plant-02">Jade plant</Item>
          <Item value="plant-03">Echeveria</Item>
        </Menu>
      </Col>
    </Row>
  );
};

export default Example;
