/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Draggable } from '@zendeskgarden/react-drag-drop';

const Example = () => (
  <Row justifyContent="center">
    <Col size={4}>
      <Draggable>
        <Draggable.Grip />
        <Draggable.Content>Apple</Draggable.Content>
      </Draggable>
    </Col>
  </Row>
);

export default Example;
