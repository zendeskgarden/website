/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Col, Row } from '@zendeskgarden/react-grid';
import { ReactComponent as LeafIcon } from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';
import { Menu, Item } from '@zendeskgarden/react-dropdowns.next';

const Example = () => (
  <Row justifyContent="center">
    <Col textAlign="center">
      <Menu button="Uproot" buttonProps={{ isDanger: true }}>
        <Item type="danger" value="acacia">
          Acacia
        </Item>
        <Item type="danger" value="daisy">
          Daisy
          <Item.Meta>15 planted</Item.Meta>
        </Item>
        <Item type="danger" value="Honeysuckle">
          Honeysuckle
        </Item>
        <Item type="danger" icon={<LeafIcon />} value="candytuft">
          Candytuft
        </Item>
      </Menu>
    </Col>
  </Row>
);

export default Example;
