/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Col, Row } from '@zendeskgarden/react-grid';
import { Combobox, Field, Label, OptGroup, Option } from '@zendeskgarden/react-dropdowns.next';

const Example = () => (
  <Row justifyContent="center">
    <Col sm={5}>
      <Field>
        <Label>Fruits and vegetables</Label>
        <Combobox>
          <OptGroup label="Fruits">
            <Option value="Apple" />
            <Option value="Banana" />
            <Option value="Cherry" />
          </OptGroup>
          <OptGroup label="Vegetables">
            <Option value="Asparagus" />
            <Option value="Broccoli" />
            <Option value="Cauliflower" />
          </OptGroup>
        </Combobox>
      </Field>
    </Col>
  </Row>
);

export default Example;
