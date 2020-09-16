/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Well, Title } from '@zendeskgarden/react-notifications';
import { Row, Col } from '@zendeskgarden/react-grid';

const Example = () => (
  <Row>
    <Col>
      <Well>
        <Title>What is a Garden?</Title>
        Gardens are a planned space, usually outdoors, set aside for the display, cultivation, or
        enjoyment of plants and other forms of nature.
      </Well>
    </Col>
  </Row>
);

export default Example;
