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
      <Tooltip content="Default leaf">
        <IconButton aria-label="default leaf">
          <LeafIcon />
        </IconButton>
      </Tooltip>
    </Grid.Col>
    <Grid.Col textAlign="center">
      <Tooltip content="Outline leaf">
        <IconButton aria-label="outline leaf" isBasic={false}>
          <LeafIcon />
        </IconButton>
      </Tooltip>
    </Grid.Col>
    <Grid.Col textAlign="center">
      <Tooltip content="Primary leaf">
        <IconButton aria-label="primary leaf" isPrimary>
          <LeafIcon />
        </IconButton>
      </Tooltip>
    </Grid.Col>
  </Grid.Row>
);

export default Example;
