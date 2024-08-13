/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { DatePicker } from '@zendeskgarden/react-datepickers';
import { Field, Input } from '@zendeskgarden/react-forms';
import { Grid } from '@zendeskgarden/react-grid';

const Example = () => {
  const [state, setState] = useState(new Date());

  return (
    <Grid.Row justifyContent="center">
      <Grid.Col sm={5}>
        <Field>
          <Field.Label>Select a date</Field.Label>
          <Field.Hint>Arabic localization</Field.Hint>
          <DatePicker value={state} onChange={setState} locale="ar-EG">
            <Input lang="ar-EG" />
          </DatePicker>
        </Field>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Example;
