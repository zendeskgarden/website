/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Grid } from '@zendeskgarden/react-grid';
import { IconButton } from '@zendeskgarden/react-buttons';
import { ReactComponent as LeafIcon } from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';
import { Tooltip } from '@zendeskgarden/react-tooltips';

const Example = () => (
  <Grid.Row alignItems="center">
    <Grid.Col textAlign="center">
      <Tooltip content="Small leaf">
        <IconButton aria-label="small leaf" size="small">
          <LeafIcon />
        </IconButton>
      </Tooltip>
    </Grid.Col>
    <Grid.Col textAlign="center">
      <Tooltip content="Medium leaf">
        <IconButton aria-label="medium leaf" size="medium">
          <LeafIcon />
        </IconButton>
      </Tooltip>
    </Grid.Col>
    <Grid.Col textAlign="center">
      <Tooltip content="Large leaf">
        <IconButton aria-label="large leaf" size="large">
          <LeafIcon />
        </IconButton>
      </Tooltip>
    </Grid.Col>
  </Grid.Row>
);

export default Example;
