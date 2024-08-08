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
        <Field.Label hidden>Accessibly hidden label</Field.Label>
        <Combobox>
          <Option value="Fern" />
          <Option value="Rubber tree" />
          <Option value="Snake plant" />
        </Combobox>
      </Field>
    </Grid.Col>
  </Grid.Row>
);

export default Example;
