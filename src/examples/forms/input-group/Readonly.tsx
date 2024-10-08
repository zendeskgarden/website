/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Field, InputGroup, Input } from '@zendeskgarden/react-forms';
import { Button } from '@zendeskgarden/react-buttons';
import { Grid } from '@zendeskgarden/react-grid';

const Example = () => (
  <Grid.Row justifyContent="center">
    <Grid.Col sm={5}>
      <Field>
        <Field.Label>Invoice number</Field.Label>
        <InputGroup>
          <Input value="GDN10136H74NK-0011" readOnly />
          <Button focusInset isNeutral>
            Copy
          </Button>
        </InputGroup>
      </Field>
    </Grid.Col>
  </Grid.Row>
);

export default Example;
