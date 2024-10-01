/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Tooltip, ITooltipProps } from '@zendeskgarden/react-tooltips';
import { Grid } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';

const PLACEMENTS: Record<string, ITooltipProps['placement']> = {
  auto: 'auto',
  top: 'top',
  topStart: 'top-start',
  topEnd: 'top-end',
  end: 'end',
  endTop: 'end-top',
  endBottom: 'end-bottom',
  bottom: 'bottom',
  bottomStart: 'bottom-start',
  bottomEnd: 'bottom-end',
  start: 'start',
  startTop: 'start-top',
  startBottom: 'start-bottom'
};

const Example = () => (
  <Grid.Row style={{ margin: 80 }}>
    <Grid.Col textAlign="center">
      <Tooltip placement={PLACEMENTS.topStart} content="Eat, drink, and be rosemary">
        <Button isBasic>Hover for a tooltip</Button>
      </Tooltip>
    </Grid.Col>
  </Grid.Row>
);

export default Example;
