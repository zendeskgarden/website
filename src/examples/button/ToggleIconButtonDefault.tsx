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
  const [pressed, setPressed] = useState(false);

  return (
    <Grid.Row>
      <Grid.Col textAlign="center">
        <Tooltip content="Leaf">
          <ToggleIconButton
            aria-label="leaf"
            isPressed={pressed}
            onClick={() => {
              setPressed(!pressed);
            }}
          >
            <Icon />
          </ToggleIconButton>
        </Tooltip>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Example;
