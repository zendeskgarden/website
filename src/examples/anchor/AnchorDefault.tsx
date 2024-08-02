/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Anchor } from '@zendeskgarden/react-buttons';
import { Grid } from '@zendeskgarden/react-grid';

const Example = () => (
  <Grid>
    <Grid.Col textAlign="center">
      <Anchor href="#default">Enter the Garden</Anchor>
    </Grid.Col>
  </Grid>
);

export default Example;
