/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Grid } from '@zendeskgarden/react-grid';
import { Field, Label, Select } from '@zendeskgarden/react-forms';

const Example = () => (
  <Grid.Row justifyContent="center">
    <Grid.Col sm={5}>
      <Field>
        <Label hidden>Accessibly hidden label</Label>
        <Select>
          <option disabled hidden selected>
            Choose a houseplant
          </option>
          <option>Fern</option>
          <option>Snake plant</option>
          <option>Rubber tree</option>
        </Select>
      </Field>
    </Grid.Col>
  </Grid.Row>
);

export default Example;
