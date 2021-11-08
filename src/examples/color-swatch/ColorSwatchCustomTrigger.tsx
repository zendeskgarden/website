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
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { convertToMatrix } from '@zendeskgarden/container-utilities';
import { labeledColors } from '../../../react-components/packages/colorpickers/stories/examples/utils';

interface IPaletteIconButton {
  iconColor: string;
}

const colors = labeledColors(
  DEFAULT_THEME.palette,
  ['green', 'red', 'blue', 'yellow'],
  ['200', '300', '400', '500', '600', '700', '800']
);

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
