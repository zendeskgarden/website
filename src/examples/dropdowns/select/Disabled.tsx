/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Dropdown, Field, Select, Label } from '@zendeskgarden/react-dropdowns';
import { Row, Col } from '@zendeskgarden/react-grid';

const Example = () => (
  <Row justifyContent="center">
    <Col sm={5}>
      <Dropdown>
        <Field>
          <Label>Plant</Label>
          <Select disabled>Cactus</Select>
        </Field>
      </Dropdown>
    </Col>
  </Row>
);

export default Example;
