/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Span } from '@zendeskgarden/react-typography';
import { Tag } from '@zendeskgarden/react-tags';
import { Grid } from '@zendeskgarden/react-grid';

const Example = () => (
  <Grid.Row>
    <Grid.Col textAlign="center">
      <Tag isRegular>
        <span>
          <Span isBold>Category</Span> Algae
        </span>
      </Tag>
    </Grid.Col>
    <Grid.Col textAlign="center">
      <Tag isRegular hue="royalblue">
        <span>
          <Span isBold>Category</Span> Moss
        </span>
      </Tag>
    </Grid.Col>
  </Grid.Row>
);

export default Example;
