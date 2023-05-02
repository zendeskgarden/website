/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { MD } from '@zendeskgarden/react-typography';
import { Draggable, DraggableList } from '@zendeskgarden/react-drag-drop';
import styled from 'styled-components';

const items = [
  { id: '1', value: 'Pear', isActive: false },
  { id: '2', value: 'Pomegranate', isActive: true },
  { id: '3', value: 'Orange', isActive: false },
  { id: '4', value: 'Grapes', isActive: false },
  { id: '5', value: 'Strawberries', isActive: false }
];

const StyledHeading = styled(MD)`
  margin-bottom: ${p => p.theme.space.xs};
`;

const Example = () => (
  <Row justifyContent="center">
    <Col sm={4}>
      <StyledHeading isBold tag="h4">
        Favorites
      </StyledHeading>
      <DraggableList>
        {items.map(item =>
          item.isActive ? (
            <DraggableList.DropIndicator
              key={item.id}
              aria-label={`Drop indicator for ${item.value} at position 2`}
            />
          ) : (
            <DraggableList.Item key={item.id}>
              <Draggable>
                <Draggable.Grip />
                <Draggable.Content>{item.value}</Draggable.Content>
              </Draggable>
            </DraggableList.Item>
          )
        )}
      </DraggableList>
    </Col>
  </Row>
);

export default Example;
