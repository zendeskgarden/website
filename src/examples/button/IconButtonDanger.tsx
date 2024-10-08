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
  <Grid.Row>
    <Grid.Col textAlign="center">
      <Tooltip content="Danger leaf">
        <IconButton aria-label="danger leaf" isDanger>
          <LeafIcon />
        </IconButton>
      </Tooltip>
    </Grid.Col>
    <Grid.Col textAlign="center">
      <Tooltip content="Outline danger leaf">
        <IconButton aria-label="outline danger leaf" isDanger isBasic={false}>
          <LeafIcon />
        </IconButton>
      </Tooltip>
    </Grid.Col>
    <Grid.Col textAlign="center">
      <Tooltip content="Primary danger leaf">
        <IconButton aria-label="primary danger leaf" isDanger isPrimary>
          <LeafIcon />
        </IconButton>
      </Tooltip>
    </Grid.Col>
  </Grid.Row>
);

export default Example;
