/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Field, Label, Radio } from '@zendeskgarden/react-forms';
import { Row, Col } from '@zendeskgarden/react-grid';

const Example = () => {
  const [radioValue, setRadioValue] = useState('one');

  return (
    <Row justifyContent="center">
      <Col size="auto">
        <div role="group" aria-label="Choose an option">
          <Field>
            <Radio
              name="hidden-example"
              value="one"
              checked={radioValue === 'one'}
              onChange={event => setRadioValue(event.target.value)}
            >
              <Label hidden>Accessibly hidden label one</Label>
            </Radio>
          </Field>
          <Field>
            <Radio
              name="hidden-example"
              value="two"
              checked={radioValue === 'two'}
              onChange={event => setRadioValue(event.target.value)}
            >
              <Label hidden>Accessibly hidden label two</Label>
            </Radio>
          </Field>
        </div>
      </Col>
    </Row>
  );
};

export default Example;
