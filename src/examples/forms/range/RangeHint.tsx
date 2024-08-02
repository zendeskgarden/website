/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Grid } from '@zendeskgarden/react-grid';
import { Field, Range } from '@zendeskgarden/react-forms';

const Example = () => {
  const [rangeValue, setRangeValue] = useState('50');

  return (
    <Grid.Row justifyContent="center">
      <Grid.Col sm={5}>
        <Field>
          <Field.Label>Flowers</Field.Label>
          <Field.Hint>Plant {rangeValue} flowers</Field.Hint>
          <Range step={10} onChange={e => setRangeValue(e.target.value)} />
        </Field>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Example;
