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
  const [smallPressed, setSmallPressed] = useState(false);
  const [mediumPressed, setMediumPressed] = useState(false);
  const [largePressed, setLargePressed] = useState(false);

  return (
    <Grid.Row alignItems="center">
      <Grid.Col textAlign="center">
        <ToggleButton
          isPressed={smallPressed}
          onClick={() => {
            setSmallPressed(!smallPressed);
          }}
          size="small"
        >
          Small
        </ToggleButton>
      </Grid.Col>
      <Grid.Col textAlign="center">
        <ToggleButton
          isPressed={mediumPressed}
          onClick={() => {
            setMediumPressed(!mediumPressed);
          }}
          size="medium"
        >
          Default
        </ToggleButton>
      </Grid.Col>
      <Grid.Col textAlign="center">
        <ToggleButton
          isPressed={largePressed}
          onClick={() => {
            setLargePressed(!largePressed);
          }}
          size="large"
        >
          Large
        </ToggleButton>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Example;
