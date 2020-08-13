/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Span } from '@zendeskgarden/react-typography';
import { Tag } from '@zendeskgarden/react-tags';
import { Row, Col } from '@zendeskgarden/react-grid';

const Example = () => (
  <Row>
    <Col textAlign="center">
      <Tag isRegular>
        <span>
          <Span isBold>Category</Span> Algae
        </span>
        <Tag.Close />
      </Tag>
    </Col>
    <Col textAlign="center">
      <Tag isRegular hue="royalblue">
        <span>
          <Span isBold>Category</Span> Moss
        </span>
        <Tag.Close />
      </Tag>
    </Col>
  </Row>
);

export default Example;
