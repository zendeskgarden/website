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
      <Grid.Col size={9}>
        <MD>Col[size=9]</MD>
      </Grid.Col>
      <Grid.Col size={4}>
        <MD>
          Col[size=4]: since 9 + 4 = 13 &gt; 12, this column gets wrapped onto a new line as one
          contiguous unit.
        </MD>
      </Grid.Col>
      <Grid.Col size={6}>
        <MD>Col[size=6]: subsequent columns continue along the new line.</MD>
      </Grid.Col>
    </Grid.Row>
  </Grid>
);

export default Example;
