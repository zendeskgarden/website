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
      <StatusIndicator type="offline" aria-label="status: offline">
        Offline
      </StatusIndicator>
    </Col>
  </Row>
);

export default Example;
