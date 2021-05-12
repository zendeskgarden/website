/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Fieldset, Field, Label, Radio, Message } from '@zendeskgarden/react-forms';
import { Row, Col } from '@zendeskgarden/react-grid';

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
        <Fieldset>
          <Fieldset.Legend>Choose a growth type</Fieldset.Legend>
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
        </Fieldset>
      </Col>
    </Row>
  );
};

export default Example;
