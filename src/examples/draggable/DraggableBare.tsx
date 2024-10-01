/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Grid } from '@zendeskgarden/react-grid';
import { Draggable } from '@zendeskgarden/react-draggable';
import { mediaQuery } from '@zendeskgarden/react-theming';

const StyledCol = styled(Grid.Col)`
  ${p => mediaQuery('down', 'xs', p.theme)} {
    margin-top: ${p => p.theme.space.sm};
  }
`;

const Example = () => (
  <Grid.Row justifyContent="center">
    <Grid.Col sm={4}>
      <Draggable>
        <Draggable.Grip />
        <Draggable.Content>Orange</Draggable.Content>
      </Draggable>
    </Grid.Col>
    <StyledCol sm={4}>
      <Draggable isBare>
        <Draggable.Grip />
        <Draggable.Content>Orange</Draggable.Content>
      </Draggable>
    </StyledCol>
  </Grid.Row>
);

export default Example;
