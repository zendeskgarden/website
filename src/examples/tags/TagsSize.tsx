/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Tag } from '@zendeskgarden/react-tags';
import { Row, Col } from '@zendeskgarden/react-grid';

const Example = () => (
  <Row alignItems="center">
    <Col textAlign="center">
      <Tag size="small">
        <span>Moss</span>
      </Tag>
    </Col>
    <Col textAlign="center">
      <Tag size="medium">
        <span>Algae</span>
      </Tag>
    </Col>
    <Col textAlign="center">
      <Tag size="large">
        <span>Conifer</span>
      </Tag>
    </Col>
  </Row>
);

export default Example;
