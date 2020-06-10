/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { Field, Label, Input, Message } from '@zendeskgarden/react-forms';

const Example = () => (
  <Grid>
    <Row>
      <Col>
        <Field>
          <Label>Plant</Label>
          <Input validation="success" />
          <Message validation="success">A cactus is a beautiful plant</Message>
        </Field>
      </Col>
      <Col>
        <Field>
          <Label>Plant</Label>
          <Input validation="warning" />
          <Message validation="warning">A cactus has thorns</Message>
        </Field>
      </Col>
      <Col>
        <Field>
          <Label>Plant</Label>
          <Input validation="error" />
          <Message validation="error">A cactus belongs in the desert</Message>
        </Field>
      </Col>
    </Row>
  </Grid>
);

export default Example;
