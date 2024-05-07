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
      <Grid.Col sm={9}>
        <MD>
          Level 1: Col[sm=9]
          <Grid.Row>
            <Grid.Col size={8} sm={6}>
              <MD>Level 2: Col[size=8][sm=6]</MD>
            </Grid.Col>
            <Grid.Col size={4} sm={6}>
              <MD>Level 2: Col[size=4][sm=6]</MD>
            </Grid.Col>
          </Grid.Row>
        </MD>
      </Grid.Col>
    </Grid.Row>
  </Grid>
);

export default Example;
