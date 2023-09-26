/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Col, Row } from '@zendeskgarden/react-grid';
import { Menu, Item } from '@zendeskgarden/react-dropdowns.next';
import { ReactComponent as LeafIcon } from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';

const Example = () => (
  <Row justifyContent="center">
    <Col textAlign="center">
      <Menu button="Choose vegetable">
        <Item value="Asparagus" icon={<LeafIcon />} />
        <Item value="Broccoli" icon={<LeafIcon />} />
        <Item value="Cauliflower" icon={<LeafIcon />} />
      </Menu>
    </Col>
  </Row>
);

export default Example;
