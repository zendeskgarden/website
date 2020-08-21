/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Progress } from '@zendeskgarden/react-loaders';

const Example = () => (
  <Row alignItems="center">
    <Col textAlign="center">
      <Progress size="small" value={80} />
    </Col>
    <Col textAlign="center">
      <Progress size="medium" value={80} />
    </Col>
    <Col textAlign="center">
      <Progress size="large" value={80} />
    </Col>
  </Row>
);

export default Example;
