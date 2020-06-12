/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Field, Label, Radio, Message } from '@zendeskgarden/react-forms';

const Example = () => {
  const [radioValue, setRadioValue] = useState('annual');

  return (
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
        <Message validation="success">Grows all the time</Message>
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
        <Message validation="warning">Two years and growing</Message>
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
        <Message validation="error">Five years but declining</Message>
      </Field>
    </div>
  );
};

export default Example;
