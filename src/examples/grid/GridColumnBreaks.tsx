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
      <Col size={6} sm={3}>
        <MD>Col[size=6][sm=3]</MD>
      </Col>
      <Col size={6} sm={3}>
        <MD>Col[size=6][sm=3]</MD>
      </Col>
      <div style={{ width: '100%' }} />
      <Col size={6} sm={3}>
        <MD>Col[size=6][sm=3]</MD>
      </Col>
      <Col size={6} sm={3}>
        <MD>Col[size=6][sm=3]</MD>
      </Col>
    </Row>
  </Grid>
);

export default Example;
