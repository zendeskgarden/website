/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Grid } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';

const Example = () => (
  <Grid.Row alignItems="center">
    <Grid.Col textAlign="center">
      <Button size="small">Small</Button>
    </Grid.Col>
    <Grid.Col textAlign="center">
      <Button size="medium">Default</Button>
    </Grid.Col>
    <Grid.Col textAlign="center">
      <Button size="large">Large</Button>
    </Grid.Col>
  </Grid.Row>
);

export default Example;
