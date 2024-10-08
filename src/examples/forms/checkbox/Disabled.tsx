/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Field, Checkbox } from '@zendeskgarden/react-forms';
import { Grid } from '@zendeskgarden/react-grid';

const Example = () => (
  <Grid.Row justifyContent="center">
    <Grid.Col size="auto">
      <Field>
        <Checkbox defaultChecked disabled>
          <Field.Label>Needs indirect light</Field.Label>
        </Checkbox>
      </Field>
      <Field>
        <Checkbox disabled>
          <Field.Label>Prefers moist soil</Field.Label>
        </Checkbox>
      </Field>
    </Grid.Col>
  </Grid.Row>
);

export default Example;
