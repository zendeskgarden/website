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
      <Col size={9}>
        <MD>Col[size=9]</MD>
      </Col>
      <Col size={4}>
        <MD>
          Col[size=4]: since 9 + 4 = 13 &gt; 12, this column gets wrapped onto a new line as one
          contiguous unit.
        </MD>
      </Col>
      <Col size={6}>
        <MD>Col[size=6]: subsequent columns continue along the new line.</MD>
      </Col>
    </Row>
  </Grid>
);

export default Example;
