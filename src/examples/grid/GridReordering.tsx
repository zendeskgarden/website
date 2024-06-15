/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { MD } from '@zendeskgarden/react-typography';
import { Grid } from '@zendeskgarden/react-grid';

const Example = () => (
  <Grid debug>
    <Grid.Row>
      <Grid.Col>
        <MD>First, but unordered</MD>
      </Grid.Col>
      <Grid.Col order="12">
        <MD>Second, but last</MD>
      </Grid.Col>
      <Grid.Col order="1">
        <MD>Third, but first</MD>
      </Grid.Col>
    </Grid.Row>
    <Grid.Row>
      <Grid.Col order="last">
        <MD>First, but last</MD>
      </Grid.Col>
      <Grid.Col>
        <MD>Second, but unordered</MD>
      </Grid.Col>
      <Grid.Col order="first">
        <MD>Third, but first</MD>
      </Grid.Col>
    </Grid.Row>
  </Grid>
);

export default Example;
