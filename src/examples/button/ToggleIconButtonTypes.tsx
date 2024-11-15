/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Grid } from '@zendeskgarden/react-grid';
import { ToggleIconButton } from '@zendeskgarden/react-buttons';
import { ReactComponent as StrokeIcon } from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';
import { ReactComponent as FillIcon } from '@zendeskgarden/svg-icons/src/16/leaf-fill.svg';
import { Tooltip } from '@zendeskgarden/react-tooltips';

const Example = () => {
  const [defaultPressed, setDefaultPressed] = useState(false);
  const [primaryPressed, setPrimaryPressed] = useState(false);
  const [basicPressed, setBasicPressed] = useState(false);

  return (
    <Grid.Row alignItems="center">
      <Grid.Col textAlign="center">
        <Tooltip content="Default leaf">
          <ToggleIconButton
            aria-label="default leaf"
            isPressed={defaultPressed}
            onClick={() => {
              setDefaultPressed(!defaultPressed);
            }}
          >
            <svg focusable="false">
              <FillIcon style={{ opacity: defaultPressed ? 1 : 0 }} />
              <StrokeIcon style={{ opacity: defaultPressed ? 0 : 1 }} />
            </svg>
          </ToggleIconButton>
        </Tooltip>
      </Grid.Col>
      <Grid.Col textAlign="center">
        <Tooltip content="Primary leaf">
          <ToggleIconButton
            aria-label="primary leaf"
            isPressed={primaryPressed}
            onClick={() => {
              setPrimaryPressed(!primaryPressed);
            }}
            isPrimary
          >
            <svg focusable="false">
              <FillIcon style={{ opacity: primaryPressed ? 1 : 0 }} />
              <StrokeIcon style={{ opacity: primaryPressed ? 0 : 1 }} />
            </svg>
          </ToggleIconButton>
        </Tooltip>
      </Grid.Col>
      <Grid.Col textAlign="center">
        <Tooltip content="Basic leaf">
          <ToggleIconButton
            aria-label="basic leaf"
            isPressed={basicPressed}
            onClick={() => {
              setBasicPressed(!basicPressed);
            }}
            isBasic={false}
          >
            <svg focusable="false">
              <FillIcon style={{ opacity: basicPressed ? 1 : 0 }} />
              <StrokeIcon style={{ opacity: basicPressed ? 0 : 1 }} />
            </svg>
          </ToggleIconButton>
        </Tooltip>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Example;
