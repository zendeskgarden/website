/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { PALETTE } from '@zendeskgarden/react-theming';
import { Progress } from '@zendeskgarden/react-loaders';

const Example = () => (
  <Row>
    <Col textAlign="center">
      <Progress color={PALETTE.grey[600]} value={80} aria-label="Fertilizing seeds" />
    </Col>
    <Col textAlign="center">
      <Progress color={PALETTE.blue[600]} value={80} aria-label="Watering all plants" />
    </Col>
    <Col textAlign="center">
      <Progress color={PALETTE.kale[600]} value={80} aria-label="Removing weeds" />
    </Col>
  </Row>
);

export default Example;
