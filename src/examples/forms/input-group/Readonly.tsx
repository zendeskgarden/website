/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Field, Label, InputGroup, Input } from '@zendeskgarden/react-forms';
import { Button } from '@zendeskgarden/react-buttons';
import { Row, Col } from '@zendeskgarden/react-grid';

const Example = () => (
  <Row justifyContent="center">
    <Col sm={5}>
      <Field>
        <Label>Invoice number</Label>
        <InputGroup>
          <Input value="GDN10136H74NK-0011" readOnly />
          <Button focusInset isNeutral>
            Copy
          </Button>
        </InputGroup>
      </Field>
    </Col>
  </Row>
);

export default Example;
