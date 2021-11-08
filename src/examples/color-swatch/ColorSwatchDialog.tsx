/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { ColorSwatchDialog } from '@zendeskgarden/react-colorpickers';
import { Row, Col } from '@zendeskgarden/react-grid';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { convertToMatrix } from '@zendeskgarden/container-utilities';
import { labeledColors } from '../../../react-components/packages/colorpickers/stories/examples/utils';

const colors = labeledColors(
  DEFAULT_THEME.palette,
  ['green', 'red', 'blue', 'yellow'],
  ['200', '300', '400', '500', '600', '700', '800']
);

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
