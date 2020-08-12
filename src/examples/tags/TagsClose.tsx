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
  <Row>
    <Col textAlign="center">
      <Tag tabIndex={0}>
        <span>Algae</span>
        <Tag.Close onClick={() => alert('Delete tag')} />
      </Tag>
    </Col>
  </Row>
);

export default Example;
