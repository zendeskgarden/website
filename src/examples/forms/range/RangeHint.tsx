/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Field, Label, Range, Hint } from '@zendeskgarden/react-forms';

const Example = () => {
  const [rangeValue, setRangeValue] = useState('50');

  return (
    <Field>
      <Label>Flowers</Label>
      <Hint>Plant {rangeValue} flowers</Hint>
      <Range step={10} onChange={e => setRangeValue(e.target.value)} />
    </Field>
  );
};

export default Example;
