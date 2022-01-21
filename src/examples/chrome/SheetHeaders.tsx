/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Sheet } from '@zendeskgarden/react-chrome';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

const surroundingBorder = '1px dotted gray';
const surroundingBorderStyle = {
  borderRight: surroundingBorder,
  borderTop: surroundingBorder,
  borderBottom: surroundingBorder
};

const Example = () => (
  <Grid gutters="sm">
    <Row style={{ height: '525px' }}>
      <Col size={4}>
        <Sheet isOpen size="100%" style={surroundingBorderStyle}>
          <Sheet.Close />
        </Sheet>
      </Col>

      <Col size={4}>
        <Sheet isOpen size="100%" style={surroundingBorderStyle}>
          <Sheet.Header>
            <Sheet.Title>Heading</Sheet.Title>
          </Sheet.Header>
          <Sheet.Close />
        </Sheet>
      </Col>

      <Col size={4}>
        <Sheet isOpen size="100%" style={surroundingBorderStyle}>
          <Sheet.Header>
            <Sheet.Title>Heading</Sheet.Title>
            <Sheet.Description>Description</Sheet.Description>
          </Sheet.Header>
          <Sheet.Close />
        </Sheet>
      </Col>
    </Row>
  </Grid>
);

export default Example;
