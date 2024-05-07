/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Grid } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';
import { ReactComponent as LeafIcon } from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';
import { ReactComponent as ChevronIcon } from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';

const Example = () => (
  <Grid.Row>
    <Grid.Col textAlign="center">
      <Button>
        <Button.StartIcon>
          <LeafIcon />
        </Button.StartIcon>
        Media
      </Button>
    </Grid.Col>
    <Grid.Col textAlign="center">
      <Button isPrimary>
        Media
        <Button.EndIcon>
          <ChevronIcon />
        </Button.EndIcon>
      </Button>
    </Grid.Col>
  </Grid.Row>
);

export default Example;
