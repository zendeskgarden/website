/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Field, Label, Range } from '@zendeskgarden/react-forms';

const Example = () => (
  <Row justifyContent="center">
    <Col sm={5}>
      <Field>
        <Label hidden>Accessibly hidden label</Label>
        <Range />
      </Field>
    </Col>
  </Row>
);

export default Example;
