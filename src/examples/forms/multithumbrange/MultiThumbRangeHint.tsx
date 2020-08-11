/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Field, Label, Hint, MultiThumbRange } from '@zendeskgarden/react-forms';

const Example = () => {
  const [minVal, setMinVal] = useState<number | undefined>(20);
  const [maxVal, setMaxVal] = useState<number | undefined>(80);

  return (
    <Field>
      <Label>Flowers</Label>
      <Hint>
        There are between {minVal} and {maxVal} flowers available
      </Hint>
      <MultiThumbRange
        minValue={minVal}
        maxValue={maxVal}
        onChange={({ minValue, maxValue }) => {
          setMinVal(minValue);
          setMaxVal(maxValue);
        }}
      />
    </Field>
  );
};

export default Example;
