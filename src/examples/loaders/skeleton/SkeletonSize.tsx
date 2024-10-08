/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Grid } from '@zendeskgarden/react-grid';
import { Skeleton } from '@zendeskgarden/react-loaders';

const Example = () => (
  <Grid.Row justifyContent="center">
    <Grid.Col sm={5}>
      <Skeleton height="48px" />
      <Skeleton height="24px" width="80%" />
      <Skeleton height="16px" width="90%" />
      <Skeleton height="16px" width="85%" />
      <Skeleton height="16px" width="75%" />
    </Grid.Col>
  </Grid.Row>
);

export default Example;
