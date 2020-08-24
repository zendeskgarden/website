/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Spinner } from '@zendeskgarden/react-loaders';

const Example = () => (
  <Row alignItems="center">
    <Col textAlign="center">
      <Spinner size="32" />
    </Col>
    <Col textAlign="center">
      <Spinner size="48" />
    </Col>
    <Col textAlign="center">
      <Spinner size="64" />
    </Col>
  </Row>
);

export default Example;
