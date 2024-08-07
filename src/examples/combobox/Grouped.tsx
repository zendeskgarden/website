/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Grid } from '@zendeskgarden/react-grid';
import { Combobox, Field, OptGroup, Option } from '@zendeskgarden/react-dropdowns';

const Example = () => (
  <Grid.Row justifyContent="center">
    <Grid.Col sm={5}>
      <Field>
        <Field.Label>Fruits and vegetables</Field.Label>
        <Combobox>
          <OptGroup legend="Fruits">
            <Option value="Apple" />
            <Option value="Banana" />
            <Option value="Cherry" />
          </OptGroup>
          <OptGroup legend="Vegetables">
            <Option value="Asparagus" />
            <Option value="Broccoli" />
            <Option value="Cauliflower" />
          </OptGroup>
        </Combobox>
      </Field>
    </Grid.Col>
  </Grid.Row>
);

export default Example;
