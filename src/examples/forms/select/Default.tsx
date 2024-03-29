/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Field, Label, Select } from '@zendeskgarden/react-forms';
import { Row, Col } from '@zendeskgarden/react-grid';

const Example = () => (
  <Row justifyContent="center">
    <Col sm={5}>
      <Field>
        <Label>Houseplant</Label>
        <Select>
          <option>Fern</option>
          <option>Snake plant</option>
          <option>Rubber tree</option>
        </Select>
      </Field>
    </Col>
  </Row>
);

export default Example;
