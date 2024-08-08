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

const Example = () => {
  const [pressed, setPressed] = useState(false);

  return (
    <Grid.Row>
      <Grid.Col textAlign="center">
        <ToggleIconButton
          aria-label="disabled leaf"
          disabled
          isPressed={pressed}
          onClick={() => {
            setPressed(!pressed);
          }}
        >
          <Icon />
        </ToggleIconButton>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Example;
