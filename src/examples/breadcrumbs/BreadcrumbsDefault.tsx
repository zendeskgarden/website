/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Anchor } from '@zendeskgarden/react-buttons';
import { Span } from '@zendeskgarden/react-typography';
import { Breadcrumb } from '@zendeskgarden/react-breadcrumbs';
import { Grid } from '@zendeskgarden/react-grid';

const Example = () => (
  <Grid.Row justifyContent="center">
    <Grid.Col size="auto">
      <Breadcrumb>
        <Anchor href="#">Flowers</Anchor>
        <Anchor href="#">Roses</Anchor>
        <Span>Floribunda</Span>
      </Breadcrumb>
    </Grid.Col>
  </Grid.Row>
);

export default Example;
