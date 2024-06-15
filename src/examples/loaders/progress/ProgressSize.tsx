/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Grid } from '@zendeskgarden/react-grid';
import { Progress } from '@zendeskgarden/react-loaders';

const Example = () => (
  <Grid.Row alignItems="center">
    <Grid.Col textAlign="center">
      <Progress size="small" value={80} aria-label="Tilling the land" />
    </Grid.Col>
    <Grid.Col textAlign="center">
      <Progress size="medium" value={80} aria-label="Harvesting crops" />
    </Grid.Col>
    <Grid.Col textAlign="center">
      <Progress size="large" value={80} aria-label="Tending to plants" />
    </Grid.Col>
  </Grid.Row>
);

export default Example;
