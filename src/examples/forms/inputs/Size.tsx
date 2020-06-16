/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { Field, Label, Input } from '@zendeskgarden/react-forms';

const Example = () => (
  <Grid>
    <Row>
      <Col>
        <Field>
          <Label>Plant</Label>
          <Input />
        </Field>
      </Col>
      <Col>
        <Field>
          <Label>Plant</Label>
          <Input isCompact />
        </Field>
      </Col>
    </Row>
  </Grid>
);

export default Example;
