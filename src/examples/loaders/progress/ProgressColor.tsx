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
  <Grid.Row>
    <Grid.Col textAlign="center">
      <Progress color="background.emphasis" value={80} aria-label="Fertilizing seeds" />
    </Grid.Col>
    <Grid.Col textAlign="center">
      <Progress color="background.primaryEmphasis" value={80} aria-label="Watering all plants" />
    </Grid.Col>
    <Grid.Col textAlign="center">
      <Progress color="background.dangerEmphasis" value={80} aria-label="Removing weeds" />
    </Grid.Col>
  </Grid.Row>
);

export default Example;
