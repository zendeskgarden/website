/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { PALETTE, getColor } from '@zendeskgarden/react-theming';
import { Grid } from '@zendeskgarden/react-grid';
import { Draggable } from '@zendeskgarden/react-draggable';
import { IconButton } from '@zendeskgarden/react-buttons';
import { Tooltip } from '@zendeskgarden/react-tooltips';
import { Span } from '@zendeskgarden/react-typography';
import { ReactComponent as PuzzleIcon } from '@zendeskgarden/svg-icons/src/16/puzzle-piece-stroke.svg';
import { ReactComponent as OverflowIcon } from '@zendeskgarden/svg-icons/src/16/overflow-vertical-stroke.svg';
import styled from 'styled-components';

const StyledDecorator = styled.div`
  display: flex;
  color: ${p => getColor({ theme: p.theme, hue: 'neutralHue', shade: 700 })};
  padding-inline-end: ${p => p.theme.space.xs};
`;

const Example = () => (
  <Grid.Row justifyContent="center">
    <Grid.Col sm={7}>
      <Draggable isCompact>
        <Draggable.Grip />
        <StyledDecorator>
          <PuzzleIcon />
        </StyledDecorator>
        <Draggable.Content>
          <Span isBold tag="div">
            Citrus
          </Span>
          <Span hue={PALETTE.grey[700]}>Oranges, mandarins, limes, and the like</Span>
        </Draggable.Content>
        <Tooltip content="More options">
          <IconButton aria-label="More options">
            <OverflowIcon />
          </IconButton>
        </Tooltip>
      </Draggable>
    </Grid.Col>
  </Grid.Row>
);

export default Example;
