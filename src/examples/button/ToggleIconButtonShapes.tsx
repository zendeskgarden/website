/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Grid } from '@zendeskgarden/react-grid';
import { ToggleIconButton } from '@zendeskgarden/react-buttons';
import { ReactComponent as RoundStrokeIcon } from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';
import { ReactComponent as RoundFillIcon } from '@zendeskgarden/svg-icons/src/16/leaf-fill.svg';
import { ReactComponent as SquareStrokeIcon } from '@zendeskgarden/svg-icons/src/16/bold-stroke.svg';
import { ReactComponent as SquareFillIcon } from '@zendeskgarden/svg-icons/src/16/bold-fill.svg';
import { Tooltip } from '@zendeskgarden/react-tooltips';

const Example = () => {
  const [roundPressed, setRoundPressed] = useState(false);
  const [squarePressed, setSquarePressed] = useState(false);

  return (
    <Grid.Row>
      <Grid.Col textAlign="center">
        <Tooltip content="Round leaf">
          <ToggleIconButton
            aria-label="round leaf"
            isBasic={false}
            isPressed={roundPressed}
            onClick={() => {
              setRoundPressed(!roundPressed);
            }}
          >
            <svg focusable="false">
              <RoundFillIcon style={{ opacity: roundPressed ? 1 : 0 }} />
              <RoundStrokeIcon style={{ opacity: roundPressed ? 0 : 1 }} />
            </svg>
          </ToggleIconButton>
        </Tooltip>
      </Grid.Col>
      <Grid.Col textAlign="center">
        <Tooltip content="Square bold">
          <ToggleIconButton
            aria-label="square bold"
            isBasic={false}
            isPill={false}
            isPressed={squarePressed}
            onClick={() => {
              setSquarePressed(!squarePressed);
            }}
          >
            <svg focusable="false">
              <SquareFillIcon style={{ opacity: squarePressed ? 1 : 0 }} />
              <SquareStrokeIcon style={{ opacity: squarePressed ? 0 : 1 }} />
            </svg>
          </ToggleIconButton>
        </Tooltip>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Example;
