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
  <Grid.Row>
    <Grid.Col textAlign="center">
      <Button>Button</Button>
    </Grid.Col>
  </Grid.Row>
);

export default Example;
