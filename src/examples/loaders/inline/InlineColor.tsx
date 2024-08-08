/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Grid } from '@zendeskgarden/react-grid';
import { PALETTE } from '@zendeskgarden/react-theming';
import { Inline } from '@zendeskgarden/react-loaders';

const Example = () => (
  <Grid.Row>
    <Grid.Col textAlign="center">
      <Inline size={32} color={PALETTE.grey[700]} />
    </Grid.Col>
    <Grid.Col textAlign="center">
      <Inline size={32} color={PALETTE.blue[700]} />
    </Grid.Col>
    <Grid.Col textAlign="center">
      <Inline size={32} color={PALETTE.green[700]} />
    </Grid.Col>
  </Grid.Row>
);

export default Example;
