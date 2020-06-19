/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';

const Example = () => (
  <Row alignItems="center">
    <Col textAlign="center">
      <Button size="small">Small</Button>
    </Col>
    <Col textAlign="center">
      <Button size="medium">Default</Button>
    </Col>
    <Col textAlign="center">
      <Button size="large">Large</Button>
    </Col>
  </Row>
);

export default Example;
