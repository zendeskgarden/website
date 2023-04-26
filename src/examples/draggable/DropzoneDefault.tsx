/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { MD } from '@zendeskgarden/react-typography';
import { Draggable, DraggableList, Dropzone } from '@zendeskgarden/react-drag-drop';
import styled from 'styled-components';

const items = [
  { id: '1', value: 'Pear' },
  { id: '2', value: 'Orange' },
  { id: '3', value: 'Grapes' }
];

const StyledHeading = styled(MD)`
  margin-bottom: ${p => p.theme.space.xs};
`;

const StyledDropzoneCol = styled(Col)`
  display: flex;
  flex-direction: column;
`;

const StyledDropzone = styled(Dropzone)`
  height: fill-available;
`;

const Example = () => (
  <Row justifyContent="center">
    <Col size={4}>
      <StyledHeading isBold>List of produce</StyledHeading>
      <DraggableList>
        {items.map(item => (
          <DraggableList.Item key={item.id}>
            <Draggable>
              <Draggable.Grip />
              <Draggable.Content>{item.value}</Draggable.Content>
            </Draggable>
          </DraggableList.Item>
        ))}
      </DraggableList>
    </Col>
    <StyledDropzoneCol size={5}>
      <StyledHeading isBold>Favorite fruits</StyledHeading>
      <StyledDropzone>
        <Dropzone.Message>Drag fruits here</Dropzone.Message>
      </StyledDropzone>
    </StyledDropzoneCol>
  </Row>
);

export default Example;
