/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { rgba } from 'polished';
import { ColorPickerDialog, IColor } from '@zendeskgarden/react-colorpickers';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Tooltip } from '@zendeskgarden/react-tooltips';
import { IconButton } from '@zendeskgarden/react-buttons';
import { ReactComponent as PaletteIcon } from '@zendeskgarden/svg-icons/src/16/palette-fill.svg';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

interface IPaletteIconButton {
  iconColor: string;
}

const PaletteIconButton = React.forwardRef(
  (
    props: IPaletteIconButton & React.ComponentPropsWithoutRef<'button'>,
    ref: React.Ref<HTMLButtonElement>
  ) => (
    <Tooltip content="Palette">
      <IconButton aria-label="palette" ref={ref} {...props}>
        <PaletteIcon style={{ color: props.iconColor }} />
      </IconButton>
    </Tooltip>
  )
);

const Example = () => {
  const [color, setColor] = useState<string | IColor>(rgba(DEFAULT_THEME.palette.blue[600], 1));

  const iconColor =
    typeof color === 'string'
      ? color
      : `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.alpha / 100})`;

  return (
    <Row>
      <Col textAlign="center">
        <ColorPickerDialog color={color} onChange={setColor}>
          <PaletteIconButton iconColor={iconColor} />
        </ColorPickerDialog>
      </Col>
    </Row>
  );
};

export default Example;
