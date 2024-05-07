/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Grid } from '@zendeskgarden/react-grid';
import { Combobox, Field, Hint, Label, Option } from '@zendeskgarden/react-dropdowns';

const Example = () => (
  <Grid.Row justifyContent="center">
    <Grid.Col sm={5}>
      <Field>
        <Label>Plant</Label>
        <Hint>Choose your favorite plant</Hint>
        <Combobox>
          <Option value="Cactus" />
          <Option value="Orchid" />
          <Option value="Succulent" isSelected />
        </Combobox>
      </Field>
    </Grid.Col>
  </Grid.Row>
);

export default Example;
