/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { getColor } from '@zendeskgarden/react-theming';
import { Grid } from '@zendeskgarden/react-grid';
import { MD } from '@zendeskgarden/react-typography';
import { Draggable, DraggableList } from '@zendeskgarden/react-draggable';
import styled from 'styled-components';

const items = [
  { id: '1', value: 'Pear' },
  { id: '2', value: 'Orange' },
  { id: '3', value: 'Grapes' }
];

const StyledHeading = styled(MD)`
  transition: color 0.2s ease-in-out;
  margin-bottom: ${p => p.theme.space.xs};
  color: ${p => getColor({ variable: 'foreground.default', theme: p.theme })};
`;

const Example = () => (
  <Grid.Row justifyContent="center">
    <Grid.Col sm={10}>
      <StyledHeading isBold tag="h4">
        Favorites
      </StyledHeading>
      <DraggableList isHorizontal>
        {items.map(item => (
          <DraggableList.Item key={item.id}>
            <Draggable>
              <Draggable.Grip />
              <Draggable.Content>{item.value}</Draggable.Content>
            </Draggable>
          </DraggableList.Item>
        ))}
      </DraggableList>
    </Grid.Col>
  </Grid.Row>
);

export default Example;
