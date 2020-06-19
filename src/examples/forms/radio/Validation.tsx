/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Field, Label, Radio, Message } from '@zendeskgarden/react-forms';
import { Row, Col } from '@zendeskgarden/react-grid';

const cyclce: Record<string, any> = {
  annual: {
    validation: 'success',
    message: 'Success'
  },
  perennial: {
    validation: 'warning',
    message: 'Warning'
  },
  biennial: {
    validation: 'error',
    message: 'Error'
  }
};

const Example = () => {
  const [radioValue, setRadioValue] = useState('annual');

  return (
    <Row justifyContent="center">
      <Col size="auto">
        <div role="group" aria-label="Choose a plant lifecycle">
          <Field>
            <Radio
              name="validation-example"
              value="annual"
              checked={radioValue === 'annual'}
              onChange={event => setRadioValue(event.target.value)}
            >
              <Label>Annual</Label>
            </Radio>
          </Field>
          <Field>
            <Radio
              name="validation-example"
              value="perennial"
              checked={radioValue === 'perennial'}
              onChange={event => setRadioValue(event.target.value)}
            >
              <Label>Perennial</Label>
            </Radio>
          </Field>
          <Field>
            <Radio
              name="validation-example"
              value="biennial"
              checked={radioValue === 'biennial'}
              onChange={event => setRadioValue(event.target.value)}
            >
              <Label>Biennial</Label>
            </Radio>
            <Message validation={cyclce[radioValue].validation}>
              {cyclce[radioValue].message}
            </Message>
          </Field>
        </div>
      </Col>
    </Row>
  );
};

export default Example;
