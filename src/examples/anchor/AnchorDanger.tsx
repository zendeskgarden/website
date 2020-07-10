/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Anchor } from '@zendeskgarden/react-buttons';
import { Row, Col } from '@zendeskgarden/react-grid';

const Example = () => (
  <Row>
    <Col textAlign="center">
      <Anchor isDanger href="#danger">
        Leave without watering
      </Anchor>
    </Col>
  </Row>
);

export default Example;
