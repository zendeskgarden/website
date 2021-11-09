/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { ColorSwatchDialog } from '@zendeskgarden/react-colorpickers';
import { Row, Col } from '@zendeskgarden/react-grid';
import { convertToMatrix } from '@zendeskgarden/container-utilities';

const colors = [
  { label: 'Blue-200', value: '#cee2f2' },
  { label: 'Blue-300', value: '#adcce4' },
  { label: 'Blue-400', value: '#5293c7' },
  { label: 'Blue-500', value: '#337fbd' },
  { label: 'Blue-600', value: '#1f73b7' },
  { label: 'Blue-700', value: '#144a75' },
  { label: 'Blue-800', value: '#0f3554' },
  { label: 'Red-200', value: '#f5d5d8' },
  { label: 'Red-300', value: '#f5b5ba' },
  { label: 'Red-400', value: '#e35b66' },
  { label: 'Red-500', value: '#d93f4c' },
  { label: 'Red-600', value: '#cc3340' },
  { label: 'Red-700', value: '#8c232c' },
  { label: 'Red-800', value: '#681219' },
  { label: 'Yellow-200', value: '#ffeedb' },
  { label: 'Yellow-300', value: '#fed6a8' },
  { label: 'Yellow-400', value: '#ffb057' },
  { label: 'Yellow-500', value: '#f79a3e' },
  { label: 'Yellow-600', value: '#ed8f1c' },
  { label: 'Yellow-700', value: '#ad5918' },
  { label: 'Yellow-800', value: '#703815' },
  { label: 'Green-200', value: '#d1e8df' },
  { label: 'Green-300', value: '#aecfc2' },
  { label: 'Green-400', value: '#5eae91' },
  { label: 'Green-500', value: '#228f67' },
  { label: 'Green-600', value: '#038153' },
  { label: 'Green-700', value: '#186146' },
  { label: 'Green-800', value: '#0b3b29' }
];

const matrix = convertToMatrix(colors, 7);

const Example = () => {
  const [rowIndex, setRowIndex] = useState(0);
  const [colIndex, setColIndex] = useState(4);
  const [selectedRowIndex, setSelectedRowIndex] = useState(0);
  const [selectedColIndex, setSelectedColIndex] = useState(4);
  const onChange = (rowIdx: number, colIdx: number) => {
    setRowIndex(rowIdx);
    setColIndex(colIdx);
  };
  const onSelect = (rowIdx: number, colIdx: number) => {
    setSelectedRowIndex(rowIdx);
    setSelectedColIndex(colIdx);
  };

  return (
    <Row justifyContent="center">
      <Col size="auto">
        <ColorSwatchDialog
          colors={matrix}
          onChange={onChange}
          onSelect={onSelect}
          rowIndex={rowIndex}
          colIndex={colIndex}
          selectedRowIndex={selectedRowIndex}
          selectedColIndex={selectedColIndex}
        />
      </Col>
    </Row>
  );
};

export default Example;
