/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Field, Label, Checkbox } from '@zendeskgarden/react-forms';
import { Row, Col } from '@zendeskgarden/react-grid';

const Example = () => (
  <Row justifyContent="center">
    <Col size="auto">
      <Field>
        <Checkbox defaultChecked disabled>
          <Label>Needs indirect light</Label>
        </Checkbox>
      </Field>
      <Field>
        <Checkbox disabled>
          <Label>Prefers moist soil</Label>
        </Checkbox>
      </Field>
    </Col>
  </Row>
);

export default Example;
