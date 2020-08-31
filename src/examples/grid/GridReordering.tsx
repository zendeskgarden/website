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
    <Row>
      <Col>
        <MD>First, but unordered</MD>
      </Col>
      <Col order="12">
        <MD>Second, but last</MD>
      </Col>
      <Col order="1">
        <MD>Third, but first</MD>
      </Col>
    </Row>
    <Row>
      <Col order="last">
        <MD>First, but last</MD>
      </Col>
      <Col>
        <MD>Second, but unordered</MD>
      </Col>
      <Col order="first">
        <MD>Third, but first</MD>
      </Col>
    </Row>
  </Grid>
);

export default Example;
