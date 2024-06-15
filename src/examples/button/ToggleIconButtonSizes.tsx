/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Grid } from '@zendeskgarden/react-grid';
import { ToggleIconButton } from '@zendeskgarden/react-buttons';
import { ReactComponent as Icon } from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';
import { Tooltip } from '@zendeskgarden/react-tooltips';

const Example = () => {
  const [smallPressed, setSmallPressed] = useState(true);
  const [mediumPressed, setMediumPressed] = useState(true);
  const [largePressed, setLargePressed] = useState(true);

  return (
    <Grid.Row alignItems="center">
      <Grid.Col textAlign="center">
        <Tooltip content="Small leaf">
          <ToggleIconButton
            aria-label="small leaf"
            isPressed={smallPressed}
            onClick={() => setSmallPressed(!smallPressed)}
            size="small"
          >
            <Icon />
          </ToggleIconButton>
        </Tooltip>
      </Grid.Col>
      <Grid.Col textAlign="center">
        <Tooltip content="Medium leaf">
          <ToggleIconButton
            aria-label="medium leaf"
            isPressed={mediumPressed}
            onClick={() => setMediumPressed(!mediumPressed)}
            size="medium"
          >
            <Icon />
          </ToggleIconButton>
        </Tooltip>
      </Grid.Col>
      <Grid.Col textAlign="center">
        <Tooltip content="Large leaf">
          <ToggleIconButton
            aria-label="large leaf"
            isPressed={largePressed}
            onClick={() => setLargePressed(!largePressed)}
            size="large"
          >
            <Icon />
          </ToggleIconButton>
        </Tooltip>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Example;
