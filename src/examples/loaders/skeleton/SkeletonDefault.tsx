/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { MD, XXL } from '@zendeskgarden/react-typography';
import { Skeleton } from '@zendeskgarden/react-loaders';

const Example = () => (
  <Row justifyContent="center">
    <Col sm={5}>
      <XXL>
        <Skeleton />
      </XXL>
      <MD>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </MD>
    </Col>
  </Row>
);

export default Example;
