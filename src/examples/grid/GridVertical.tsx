/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { MD } from '@zendeskgarden/react-typography';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

const Example = () => (
  <Grid debug>
    <Row alignItems="start" style={{ minHeight: '5em' }}>
      <Col>
        <MD>One of three columns</MD>
      </Col>
      <Col>
        <MD>One of three columns</MD>
      </Col>
      <Col>
        <MD>One of three columns</MD>
      </Col>
    </Row>
    <Row alignItems="center" style={{ minHeight: '5em' }}>
      <Col>
        <MD>One of three columns</MD>
      </Col>
      <Col>
        <MD>One of three columns</MD>
      </Col>
      <Col>
        <MD>One of three columns</MD>
      </Col>
    </Row>
    <Row alignItems="end" style={{ minHeight: '5em' }}>
      <Col>
        <MD>One of three columns</MD>
      </Col>
      <Col>
        <MD>One of three columns</MD>
      </Col>
      <Col>
        <MD>One of three columns</MD>
      </Col>
    </Row>
  </Grid>
);

export default Example;
