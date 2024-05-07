/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Field, Label, FauxInput } from '@zendeskgarden/react-forms';
import { Grid } from '@zendeskgarden/react-grid';

const Example = () => (
  <Grid.Row justifyContent="center">
    <Grid.Col sm={5}>
      <Field>
        <Label>Soil</Label>
        <FauxInput>Loam</FauxInput>
      </Field>
    </Grid.Col>
  </Grid.Row>
);

export default Example;
