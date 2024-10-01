/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Field, Select } from '@zendeskgarden/react-forms';
import { Grid } from '@zendeskgarden/react-grid';

const Example = () => (
  <Grid.Row justifyContent="center">
    <Grid.Col sm={5}>
      <Field>
        <Field.Label>Plant</Field.Label>
        <Field.Hint>Choose your favorite plant</Field.Hint>
        <Select>
          <option>Orchid</option>
          <option>Cactus</option>
          <option>Succulent</option>
        </Select>
      </Field>
    </Grid.Col>
  </Grid.Row>
);

export default Example;
