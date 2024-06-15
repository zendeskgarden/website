/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Tag } from '@zendeskgarden/react-tags';
import { Grid } from '@zendeskgarden/react-grid';

const Example = () => (
  <Grid.Row>
    <Grid.Col textAlign="center">
      <Tag>
        <span>Algae</span>
      </Tag>
    </Grid.Col>
    <Grid.Col textAlign="center">
      <Tag isPill>
        <span>Moss</span>
      </Tag>
    </Grid.Col>
    <Grid.Col textAlign="center">
      <Tag isRound>
        <span>8</span>
      </Tag>
    </Grid.Col>
  </Grid.Row>
);

export default Example;
