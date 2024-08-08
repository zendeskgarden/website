/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Grid } from '@zendeskgarden/react-grid';
import { Combobox, Field, Option } from '@zendeskgarden/react-dropdowns';

const Example = () => (
  <Grid.Row justifyContent="center">
    <Grid.Col sm={5}>
      <Field>
        <Field.Label>Choose a vegetable</Field.Label>
        <Combobox>
          <Option value="Asparagus" />
          <Option value="Broccoli" />
          <Option value="Cauliflower" />
          <Option value="Kale" />
          <Option value="Lettuce" />
          <Option value="Onion" />
          <Option value="Radish" />
          <Option value="Spinach" />
          <Option value="Tomato" />
          <Option value="Zucchini" />
        </Combobox>
      </Field>
    </Grid.Col>
  </Grid.Row>
);

export default Example;
