/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Field, InputGroup, Input } from '@zendeskgarden/react-forms';
import { Button } from '@zendeskgarden/react-buttons';
import { Row, Col } from '@zendeskgarden/react-grid';

const Example = () => (
  <Row justifyContent="center">
    <Col sm={5}>
      <Field>
        <InputGroup>
          <Button focusInset>Plant</Button>
          <Input defaultValue="Soil" aria-label="Plant description" />
          <Button focusInset>Copy</Button>
        </InputGroup>
      </Field>
    </Col>
  </Row>
);

export default Example;
