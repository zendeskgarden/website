/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Tooltip } from '@zendeskgarden/react-tooltips';
import { Grid } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';

const Example = () => (
  <Grid.Row>
    <Grid.Col textAlign="center">
      <Tooltip type="dark" size="small" content="Eat, drink, and be rosemary">
        <Button size="small" isPrimary>
          Dark tooltip
        </Button>
      </Tooltip>
    </Grid.Col>
    <Grid.Col textAlign="center">
      <Tooltip
        type="light"
        size="large"
        placement="top-end"
        content={
          <>
            <Tooltip.Title>Words of wisdom</Tooltip.Title>
            <Tooltip.Paragraph>
              I asked the staff at my local garden center what to grow in my garden. They gave me
              some sage advice.
            </Tooltip.Paragraph>
          </>
        }
      >
        <Button isPrimary>Light tooltip</Button>
      </Tooltip>
    </Grid.Col>
  </Grid.Row>
);

export default Example;
