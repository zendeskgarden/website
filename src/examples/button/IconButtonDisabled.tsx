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

const Example = () => (
  <Grid.Row>
    <Grid.Col textAlign="center">
      <IconButton aria-label="disabled leaf" disabled>
        <LeafIcon />
      </IconButton>
    </Grid.Col>
  </Grid.Row>
);

export default Example;
