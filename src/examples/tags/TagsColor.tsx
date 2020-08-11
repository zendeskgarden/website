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
      <Tag hue="blue">
        <Span>Conifer</Span>
      </Tag>
    </Col>
    <Col textAlign="center">
      <Tag hue="red">
        <Span>Moss</Span>
      </Tag>
    </Col>
    <Col textAlign="center">
      <Tag hue="yellow">
        <Span>Cactus</Span>
      </Tag>
    </Col>
    <Col textAlign="center">
      <Tag hue="#3A3A3A">
        <Span>Succulent</Span>
      </Tag>
    </Col>
  </Row>
);

export default Example;
