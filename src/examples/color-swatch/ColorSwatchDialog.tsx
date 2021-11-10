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
import { PALETTE } from '@zendeskgarden/react-theming';

interface ILabledColor {
  label: string;
  value: string;
}

const colors = ['blue', 'red', 'yellow', 'green'];

const shades = [200, 300, 400, 500, 600, 700, 800];

const capitalize = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

const labeledColors = colors.reduce(
  (acc: ILabledColor[], hue: string) => [
    ...acc,
    ...shades.map(shade => ({
      label: `${capitalize(hue)}-${shade}`,
      value: (PALETTE as any)[hue][shade]
    }))
  ],
  []
);

const matrix = convertToMatrix(labeledColors, 7);

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
