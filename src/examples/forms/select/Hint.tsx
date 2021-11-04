/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Field, Label, Hint, Select } from '@zendeskgarden/react-forms';
import { Row, Col } from '@zendeskgarden/react-grid';

const Example = () => (
  <Row justifyContent="center">
    <Col sm={5}>
      <Field>
        <Label>Plant</Label>
        <Hint>Choose your favorite plant</Hint>
        <Select>
          <option>Orchid</option>
          <option>Cactus</option>
          <option>Succulent</option>
        </Select>
      </Field>
    </Col>
  </Row>
);

export default Example;
