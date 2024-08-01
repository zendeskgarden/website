/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Field, Label, Radio } from '@zendeskgarden/react-forms';
import { Grid } from '@zendeskgarden/react-grid';

const Example = () => {
  const [radioValue, setRadioValue] = useState('annual');

  return (
    <Grid.Row justifyContent="center">
      <Grid.Col size="auto">
        <div role="group" aria-label="Choose a plant lifecycle">
          <Field>
            <Radio
              name="default example"
              value="annual"
              checked={radioValue === 'annual'}
              onChange={event => setRadioValue(event.target.value)}
            >
              <Label>Annual</Label>
            </Radio>
          </Field>
          <Field>
            <Radio
              name="default example"
              value="perennial"
              checked={radioValue === 'perennial'}
              onChange={event => setRadioValue(event.target.value)}
            >
              <Label>Perennial</Label>
            </Radio>
          </Field>
        </div>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Example;
