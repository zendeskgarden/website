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
    <Grid.Row justifyContentMd="center">
      <Grid.Col xs lg={2}>
        <MD>1 of 3</MD>
      </Grid.Col>
      <Grid.Col md="auto">
        <MD>Variable width content</MD>
      </Grid.Col>
      <Grid.Col xs lg={2}>
        <MD>3 of 3</MD>
      </Grid.Col>
    </Grid.Row>
    <Grid.Row justifyContent="center">
      <Grid.Col>
        <MD>1 of 3</MD>
      </Grid.Col>
      <Grid.Col md="auto">
        <MD>Variable width content</MD>
      </Grid.Col>
      <Grid.Col xs lg={2}>
        <MD>3 of 3</MD>
      </Grid.Col>
    </Grid.Row>
  </Grid>
);

export default Example;
