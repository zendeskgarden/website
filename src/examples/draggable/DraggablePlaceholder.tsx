/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Grid } from '@zendeskgarden/react-grid';
import { MD } from '@zendeskgarden/react-typography';
import { Draggable, DraggableList } from '@zendeskgarden/react-draggable';
import styled from 'styled-components';

const items = [
  { id: '1', value: 'Pear' },
  { id: '2', value: 'Orange', isPlaceholder: true },
  { id: '3', value: 'Grapes' },
  { id: '4', value: 'Strawberries' }
];

const StyledHeading = styled(MD)`
  margin-bottom: ${p => p.theme.space.xs};
`;

const Example = () => (
  <Grid.Row justifyContent="center">
    <Grid.Col sm={4}>
      <StyledHeading isBold tag="h4">
        Favorites
      </StyledHeading>
      <DraggableList>
        {items.map(item => (
          <DraggableList.Item key={item.id}>
            <Draggable isPlaceholder={item.isPlaceholder}>
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
