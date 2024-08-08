/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { ColorSwatch } from '@zendeskgarden/react-colorpickers';
import { Row, Col } from '@zendeskgarden/react-grid';
import { convertToMatrix } from '@zendeskgarden/container-utilities';
import { PALETTE } from '@zendeskgarden/react-theming';

const colors = [
  { label: 'Blue-300', value: PALETTE.blue[300] },
  { label: 'Blue-400', value: PALETTE.blue[400] },
  { label: 'Blue-500', value: PALETTE.blue[500] },
  { label: 'Blue-600', value: PALETTE.blue[600] },
  { label: 'Blue-700', value: PALETTE.blue[700] },
  { label: 'Blue-800', value: PALETTE.blue[800] },
  { label: 'Blue-900', value: PALETTE.blue[900] },
  { label: 'Red-300', value: PALETTE.red[300] },
  { label: 'Red-400', value: PALETTE.red[400] },
  { label: 'Red-500', value: PALETTE.red[500] },
  { label: 'Red-600', value: PALETTE.red[600] },
  { label: 'Red-700', value: PALETTE.red[700] },
  { label: 'Red-800', value: PALETTE.red[800] },
  { label: 'Red-900', value: PALETTE.red[900] },
  { label: 'Yellow-300', value: PALETTE.yellow[300] },
  { label: 'Yellow-400', value: PALETTE.yellow[400] },
  { label: 'Yellow-500', value: PALETTE.yellow[500] },
  { label: 'Yellow-600', value: PALETTE.yellow[600] },
  { label: 'Yellow-700', value: PALETTE.yellow[700] },
  { label: 'Yellow-800', value: PALETTE.yellow[800] },
  { label: 'Yellow-900', value: PALETTE.yellow[900] },
  { label: 'Green-300', value: PALETTE.green[300] },
  { label: 'Green-400', value: PALETTE.green[400] },
  { label: 'Green-500', value: PALETTE.green[500] },
  { label: 'Green-600', value: PALETTE.green[600] },
  { label: 'Green-700', value: PALETTE.green[700] },
  { label: 'Green-800', value: PALETTE.green[800] },
  { label: 'Green-900', value: PALETTE.green[900] }
];

const matrix = convertToMatrix(colors, 7);

const Example = () => (
  <Row justifyContent="center">
    <Col size="auto">
      <ColorSwatch name="color-swatch-default" colors={matrix} />
    </Col>
  </Row>
);

export default Example;
