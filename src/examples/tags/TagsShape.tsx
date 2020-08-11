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
      <Tag>
        <Span>Algae</Span>
      </Tag>
    </Col>
    <Col textAlign="center">
      <Tag isPill>
        <Span>Moss</Span>
      </Tag>
    </Col>
    <Col textAlign="center">
      <Tag isRound>
        <Span>12</Span>
      </Tag>
    </Col>
  </Row>
);

export default Example;
