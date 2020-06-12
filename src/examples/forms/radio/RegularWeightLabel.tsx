/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Field, Label, Radio } from '@zendeskgarden/react-forms';

const Example = () => {
  const [radioValue, setRadioValue] = useState('annual');

  return (
    <div role="group" aria-label="Choose a plant lifecycle">
      <Field>
        <Radio
          name="weight-example"
          value="annual"
          checked={radioValue === 'annual'}
          onChange={event => setRadioValue(event.target.value)}
        >
          <Label isRegular>Annual</Label>
        </Radio>
      </Field>
      <Field>
        <Radio
          name="weight-example"
          value="perennial"
          checked={radioValue === 'perennial'}
          onChange={event => setRadioValue(event.target.value)}
        >
          <Label isRegular>Perennial</Label>
        </Radio>
      </Field>
    </div>
  );
};

export default Example;
