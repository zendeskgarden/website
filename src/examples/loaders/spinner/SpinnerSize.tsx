/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Grid } from '@zendeskgarden/react-grid';
import { Spinner } from '@zendeskgarden/react-loaders';

const Example = () => (
  <Grid.Row alignItems="center">
    <Grid.Col textAlign="center">
      <Spinner size="32" />
    </Grid.Col>
    <Grid.Col textAlign="center">
      <Spinner size="48" />
    </Grid.Col>
    <Grid.Col textAlign="center">
      <Spinner size="64" />
    </Grid.Col>
  </Grid.Row>
);

export default Example;
