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
import { PALETTE } from '@zendeskgarden/react-theming';

interface IPaletteIconButton {
  iconColor: string;
}

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
  const [selectedRowIndex, setSelectedRowIndex] = useState(SELECTED_ROW_INDEX);
  const [selectedColIndex, setSelectedColIndex] = useState(SELECTED_COL_INDEX);

  const onSelect = (rowIdx: number | null, colIdx: number | null) => {
    if (typeof rowIdx !== 'number' || typeof colIdx !== 'number') return;

    setSelectedRowIndex(rowIdx);
    setSelectedColIndex(colIdx);
    setColor(matrix[rowIdx][colIdx].value);
  };

  return (
    <Row>
      <Col textAlign="center">
        <ColorSwatchDialog
          name="color-swatch-custom-trigger"
          colors={matrix}
          onSelect={onSelect}
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
