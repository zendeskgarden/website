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
  <Row justifyContent="center">
    <Col sm={5}>
      <Progress value={50} aria-label="Preparing garden" />
    </Col>
  </Row>
);

export default Example;
