/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { ColorpickerDialog, IColor } from '@zendeskgarden/react-colorpickers';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Tooltip } from '@zendeskgarden/react-tooltips';
import { IconButton } from '@zendeskgarden/react-buttons';
import { ReactComponent as PaletteIcon } from '@zendeskgarden/svg-icons/src/16/palette-fill.svg';

interface IPaletteIconButton {
  iconColor: string;
}

const PaletteIconButton = React.forwardRef(
  (
    props: IPaletteIconButton & React.ComponentPropsWithoutRef<'button'>,
    ref: React.Ref<HTMLButtonElement>
  ) => (
    <Tooltip content="Palette">
      <IconButton
        aria-label="palette"
        ref={ref}
        style={{ color: props.disabled ? undefined : props.iconColor }}
        {...props}
      >
        <PaletteIcon />
      </IconButton>
    </Tooltip>
  )
);

const Example = () => {
  const [color, setColor] = useState<string | IColor>('rgba(31, 115, 183, 1)');
  const [selectedColor, setSelectedColor] = useState<string | IColor>('rgba(31, 115, 183, 100)');
  const iconColor =
    typeof selectedColor === 'string'
      ? selectedColor
      : `rgba(${selectedColor.red}, ${selectedColor.green}, ${selectedColor.blue}, ${selectedColor.alpha})`;

  return (
    <Row>
      <Col textAlign="center">
        <ColorpickerDialog color={color} onChange={setColor} onClose={setSelectedColor}>
          <PaletteIconButton iconColor={iconColor} />
        </ColorpickerDialog>
      </Col>
    </Row>
  );
};

export default Example;
