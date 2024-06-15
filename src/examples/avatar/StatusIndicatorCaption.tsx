/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { StatusIndicator } from '@zendeskgarden/react-avatars';
import { Grid } from '@zendeskgarden/react-grid';

const Example = () => (
  <Grid.Row>
    <Grid.Col textAlign="center">
      <StatusIndicator type="away" aria-label="status: away">
        Foraging for mushrooms
      </StatusIndicator>
    </Grid.Col>
    <Grid.Col textAlign="center">
      <StatusIndicator type="away" aria-label="status: offline" />
    </Grid.Col>
  </Grid.Row>
);

export default Example;
