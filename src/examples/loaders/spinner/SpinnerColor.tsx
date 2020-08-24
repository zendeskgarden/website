/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { PALETTE } from '@zendeskgarden/react-theming';
import { Spinner } from '@zendeskgarden/react-loaders';

const Example = () => (
  <Row>
    <Col textAlign="center">
      <Spinner size="32" color={PALETTE.grey[600]} />
    </Col>
    <Col textAlign="center">
      <Spinner size="32" color={PALETTE.blue[600]} />
    </Col>
    <Col textAlign="center">
      <Spinner size="32" color={PALETTE.green[600]} />
    </Col>
  </Row>
);

export default Example;
