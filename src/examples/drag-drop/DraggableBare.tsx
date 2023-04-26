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
  <Row alignItems="center">
    <Col>
      <Draggable>
        <Draggable.Grip />
        <Draggable.Content>Default</Draggable.Content>
      </Draggable>
    </Col>
    <Col>
      <Draggable isBare>
        <Draggable.Grip />
        <Draggable.Content>Bare</Draggable.Content>
      </Draggable>
    </Col>
  </Row>
);

export default Example;
