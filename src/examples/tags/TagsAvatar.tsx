/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Tag } from '@zendeskgarden/react-tags';
import { Grid } from '@zendeskgarden/react-grid';
import { ReactComponent as LeafIcon } from '@zendeskgarden/svg-icons/src/12/leaf-stroke.svg';

const Example = () => (
  <Grid.Row alignItems="center">
    <Grid.Col textAlign="center">
      <Tag>
        <Tag.Avatar>
          <LeafIcon />
        </Tag.Avatar>
        <span>Conifer</span>
      </Tag>
    </Grid.Col>
    <Grid.Col textAlign="center">
      <Tag size="large">
        <Tag.Avatar>
          <LeafIcon />
        </Tag.Avatar>
        <span>Conifer</span>
      </Tag>
    </Grid.Col>
  </Grid.Row>
);

export default Example;
