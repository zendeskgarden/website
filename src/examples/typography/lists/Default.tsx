/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Grid } from '@zendeskgarden/react-grid';
import { OrderedList, UnorderedList } from '@zendeskgarden/react-typography';

const Example = () => (
  <Grid.Row>
    <Grid.Col>
      <OrderedList>
        <OrderedList.Item>Plant</OrderedList.Item>
        <OrderedList.Item>Water</OrderedList.Item>
        <OrderedList.Item>Harvest</OrderedList.Item>
      </OrderedList>
    </Grid.Col>
    <Grid.Col>
      <UnorderedList>
        <UnorderedList.Item>Garden trowel</UnorderedList.Item>
        <UnorderedList.Item>Pruning shears</UnorderedList.Item>
        <UnorderedList.Item>Hand cultivator</UnorderedList.Item>
      </UnorderedList>
    </Grid.Col>
  </Grid.Row>
);

export default Example;
