/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Grid } from '@zendeskgarden/react-grid';
import { ToggleButton } from '@zendeskgarden/react-buttons';

const Example = () => {
  const [defaultPressed, setDefaultPressed] = useState(false);
  const [primaryPressed, setPrimaryPressed] = useState(false);
  const [basicPressed, setBasicPressed] = useState(false);

  return (
    <Grid.Row alignItems="center">
      <Grid.Col textAlign="center">
        <ToggleButton isPressed={defaultPressed} onClick={() => setDefaultPressed(!defaultPressed)}>
          Default
        </ToggleButton>
      </Grid.Col>
      <Grid.Col textAlign="center">
        <ToggleButton
          isPressed={primaryPressed}
          onClick={() => setPrimaryPressed(!primaryPressed)}
          isPrimary
        >
          Primary
        </ToggleButton>
      </Grid.Col>
      <Grid.Col textAlign="center">
        <ToggleButton
          isPressed={basicPressed}
          onClick={() => setBasicPressed(!basicPressed)}
          isBasic
        >
          Basic
        </ToggleButton>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Example;
