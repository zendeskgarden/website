/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Grid } from '@zendeskgarden/react-grid';
import { Field, Toggle } from '@zendeskgarden/react-forms';

const Example = () => (
  <Grid.Row justifyContent="center">
    <Grid.Col size="auto">
      <Field>
        <Toggle>
          <Field.Label>Show flowers</Field.Label>
          <Field.Hint>Display flowers on this page</Field.Hint>
        </Toggle>
      </Field>
    </Grid.Col>
  </Grid.Row>
);

export default Example;
