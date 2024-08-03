/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Dropdown, Field, Select, Label } from '@zendeskgarden/react-dropdowns';
import { Grid } from '@zendeskgarden/react-grid';

const Example = () => (
  <Grid.Row justifyContent="center">
    <Grid.Col sm={5}>
      <Dropdown>
        <Field>
          <Label>Plant</Label>
          <Select disabled>Cactus</Select>
        </Field>
      </Dropdown>
    </Grid.Col>
  </Grid.Row>
);

export default Example;
