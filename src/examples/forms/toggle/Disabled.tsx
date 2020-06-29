/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Field, Label, Toggle } from '@zendeskgarden/react-forms';

const Example = () => (
  <Row>
    <Col textAlign="center">
      <Field>
        <Toggle disabled>
          <Label>Show flowers</Label>
        </Toggle>
      </Field>
    </Col>
  </Row>
);

export default Example;
