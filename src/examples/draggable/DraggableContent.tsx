/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { getColor } from '@zendeskgarden/react-theming';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Draggable } from '@zendeskgarden/react-drag-drop';
import { IconButton } from '@zendeskgarden/react-buttons';
import { Tooltip } from '@zendeskgarden/react-tooltips';
import { MD } from '@zendeskgarden/react-typography';
import { ReactComponent as PuzzleIcon } from '@zendeskgarden/svg-icons/src/16/puzzle-piece-stroke.svg';
import { ReactComponent as OverflowIcon } from '@zendeskgarden/svg-icons/src/16/overflow-vertical-stroke.svg';
import styled from 'styled-components';

const StyledSubtitle = styled(MD)`
  color: ${p => getColor('neutralHue', 600, p.theme)};
`;

const StyledDecorator = styled.div`
  display: flex;
  color: ${p => getColor('neutralHue', 600, p.theme)};
  padding-inline-end: ${p => p.theme.space.xs};
`;

const Example = () => (
  <Row justifyContent="center">
    <Col size={7}>
      <Draggable isCompact>
        <Draggable.Grip />
        <StyledDecorator>
          <PuzzleIcon />
        </StyledDecorator>
        <Draggable.Content>
          <MD isBold>Citrus</MD>
          <StyledSubtitle>Oranges, mandarins, limes, and the like</StyledSubtitle>
        </Draggable.Content>
        <Tooltip content="More options">
          <IconButton aria-label="More options">
            <OverflowIcon />
          </IconButton>
        </Tooltip>
      </Draggable>
    </Col>
  </Row>
);

export default Example;
