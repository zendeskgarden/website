/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Fieldset, Field, Radio } from '@zendeskgarden/react-forms';
import { Grid } from '@zendeskgarden/react-grid';

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
    <Grid.Row justifyContent="center">
      <Grid.Col size="auto">
        <Fieldset>
          <Fieldset.Legend>Choose a growth type</Fieldset.Legend>
          <Field>
            <Radio
              name="validation-example"
              value="annual"
              checked={radioValue === 'annual'}
              onChange={event => setRadioValue(event.target.value)}
            >
              <Field.Label isRegular>Annual</Field.Label>
            </Radio>
          </Field>
          <Field>
            <Radio
              name="validation-example"
              value="perennial"
              checked={radioValue === 'perennial'}
              onChange={event => setRadioValue(event.target.value)}
            >
              <Field.Label isRegular>Perennial</Field.Label>
            </Radio>
          </Field>
          <Field>
            <Radio
              name="validation-example"
              value="biennial"
              checked={radioValue === 'biennial'}
              onChange={event => setRadioValue(event.target.value)}
            >
              <Field.Label isRegular>Biennial</Field.Label>
            </Radio>
            <Field.Message validation={cyclce[radioValue].validation}>
              {cyclce[radioValue].message}
            </Field.Message>
          </Field>
        </Fieldset>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Example;
