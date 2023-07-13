/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Col, Row } from '@zendeskgarden/react-grid';
import { Combobox, Field, Label, Option } from '@zendeskgarden/react-dropdowns.next';

const options = ['Fern', 'Rubber tree', 'Snake plant'];

const Example = () => (
  <Row justifyContent="center">
    <Col sm={5}>
      <Field>
        <Label>Houseplant</Label>
        <Combobox isEditable={false}>
          {options.map((option, index) => (
            <Option key={option} value={option} isSelected={index === 0}>
              {option}
            </Option>
          ))}
        </Combobox>
      </Field>
    </Col>
  </Row>
);

export default Example;
