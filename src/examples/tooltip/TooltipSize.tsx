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
      <Tooltip size="small" content="Eat, drink, and be rosemary" placement="top-start">
        <Button size="small">Small</Button>
      </Tooltip>
    </Grid.Col>
    <Grid.Col textAlign="center">
      <Tooltip size="medium" content="I want to start gardening, but I haven’t botany plants.">
        <Button size="medium">Medium</Button>
      </Tooltip>
    </Grid.Col>
    <Grid.Col textAlign="center">
      <Tooltip
        type="light"
        size="large"
        content={
          <>
            <Tooltip.Title>Words of wisdom</Tooltip.Title>
            <Tooltip.Paragraph>
              I was offered a job as a gardener, but I didn’t take it because the celery was too
              low.
            </Tooltip.Paragraph>
          </>
        }
      >
        <Button size="large">Large</Button>
      </Tooltip>
    </Grid.Col>
    <Grid.Col textAlign="center">
      <Tooltip
        type="light"
        size="extra-large"
        placement="top-end"
        zIndex={1}
        content={
          <>
            <Tooltip.Title>Garden advice</Tooltip.Title>
            <Tooltip.Paragraph>
              I asked the staff at my local garden center what to grow in my garden. They gave me
              some sage advice.
            </Tooltip.Paragraph>
          </>
        }
      >
        <Button size="large">Extra large</Button>
      </Tooltip>
    </Grid.Col>
  </Grid.Row>
);

export default Example;
