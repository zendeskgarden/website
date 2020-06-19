/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Field, Label, Radio, Message } from '@zendeskgarden/react-forms';
import { Row, Col } from '@zendeskgarden/react-grid';
import { MD } from '@zendeskgarden/react-typography';

const cyclce: Record<string, any> = {
  annual: {
    validation: 'success',
    message: 'Growing all the time'
  },
  perennial: {
    validation: 'warning',
    message: 'Growing reguarly'
  },
  biennial: {
    validation: 'error',
    message: 'Growing slowly'
  }
};

const Example = () => {
  const [radioValue, setRadioValue] = useState('annual');

  return (
    <Row justifyContent="center">
      <Col size="auto">
        <MD isBold>Choose a growth type</MD>
        <div role="group" aria-label="Choose a growth type">
          <Field>
            <Radio
              name="validation-example"
              value="annual"
              checked={radioValue === 'annual'}
              onChange={event => setRadioValue(event.target.value)}
            >
              <Label isRegular>Annual</Label>
            </Radio>
          </Field>
          <Field>
            <Radio
              name="validation-example"
              value="perennial"
              checked={radioValue === 'perennial'}
              onChange={event => setRadioValue(event.target.value)}
            >
              <Label isRegular>Perennial</Label>
            </Radio>
          </Field>
          <Field>
            <Radio
              name="validation-example"
              value="biennial"
              checked={radioValue === 'biennial'}
              onChange={event => setRadioValue(event.target.value)}
            >
              <Label isRegular>Biennial</Label>
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
