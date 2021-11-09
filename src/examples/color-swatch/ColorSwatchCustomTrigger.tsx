/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { ColorSwatchDialog } from '@zendeskgarden/react-colorpickers';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Tooltip } from '@zendeskgarden/react-tooltips';
import { IconButton } from '@zendeskgarden/react-buttons';
import { ReactComponent as PaletteIcon } from '@zendeskgarden/svg-icons/src/16/palette-fill.svg';
import { convertToMatrix } from '@zendeskgarden/container-utilities';

interface IPaletteIconButton {
  iconColor: string;
}

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

const SELECTED_ROW_INDEX = 0;

const SELECTED_COL_INDEX = 4;

const matrix = convertToMatrix(colors, 7);

const PaletteIconButton = React.forwardRef(
  (
    props: IPaletteIconButton & React.ComponentPropsWithoutRef<'button'>,
    ref: React.Ref<HTMLButtonElement>
  ) => (
    <Tooltip content="Palette">
      <IconButton aria-label="palette" ref={ref} style={{ color: props.iconColor }} {...props}>
        <PaletteIcon />
      </IconButton>
    </Tooltip>
  )
);

const Example = () => {
  const [color, setColor] = useState(matrix[SELECTED_ROW_INDEX][SELECTED_COL_INDEX].value);
  const [rowIndex, setRowIndex] = useState(SELECTED_ROW_INDEX);
  const [colIndex, setColIndex] = useState(SELECTED_COL_INDEX);
  const [selectedRowIndex, setSelectedRowIndex] = useState(SELECTED_ROW_INDEX);
  const [selectedColIndex, setSelectedColIndex] = useState(SELECTED_COL_INDEX);

  const onChange = (rowIdx: number, colIdx: number) => {
    setRowIndex(rowIdx);
    setColIndex(colIdx);
  };

  const onSelect = (rowIdx: number, colIdx: number) => {
    setSelectedRowIndex(rowIdx);
    setSelectedColIndex(colIdx);
    setColor(matrix[rowIdx][colIdx].value);
  };

  return (
    <Row>
      <Col textAlign="center">
        <ColorSwatchDialog
          colors={matrix}
          onChange={onChange}
          onSelect={onSelect}
          rowIndex={rowIndex}
          colIndex={colIndex}
          selectedRowIndex={selectedRowIndex}
          selectedColIndex={selectedColIndex}
        >
          <PaletteIconButton iconColor={color} />
        </ColorSwatchDialog>
      </Col>
    </Row>
  );
};

export default Example;