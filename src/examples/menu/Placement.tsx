/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Col, Row } from '@zendeskgarden/react-grid';
import { Menu, Item } from '@zendeskgarden/react-dropdowns.next';

const Example = () => (
  <Row justifyContent="center">
    <Col textAlign="center">
      <Menu button="Flowers" placement="top" fallbackPlacements={['bottom']}>
        <Item value="acacia">Acacia</Item>
        <Item value="daisy">Daisy</Item>
        <Item value="honeysuckle">Honeysuckle</Item>
      </Menu>
    </Col>
  </Row>
);

export default Example;
