/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { StatusIndicator } from '@zendeskgarden/react-avatars';
import { Row, Col } from '@zendeskgarden/react-grid';

const Example = () => (
  <Row>
    <Col textAlign="center">
      <StatusIndicator type="away" aria-label="status: away - Foraging for mushrooms">
        Foraging for mushrooms
      </StatusIndicator>
    </Col>
    <Col textAlign="center">
      <StatusIndicator type="away" aria-label="status: offline" />
    </Col>
  </Row>
);

export default Example;
