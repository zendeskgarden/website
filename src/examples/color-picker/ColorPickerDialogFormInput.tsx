/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { rgba, parseToRgb, toColorString } from 'polished';
import { PALETTE } from '@zendeskgarden/react-theming';
import { Grid } from '@zendeskgarden/react-grid';
import { ColorPickerDialog, IColor } from '@zendeskgarden/react-colorpickers';
import { Field, Input, InputGroup } from '@zendeskgarden/react-forms';

const validHex = /^#(?:(?:[0-9A-F]{6}(?:[0-9A-F]{2})?)|(?:[0-9A-F]{3})(?:[0-9A-F]?))$/iu;

const StyledCol = styled(Grid.Col)`
  flex-grow: 0;
`;

const StyledInput = styled(Input)`
  max-width: ${props => props.theme.space.base * 27}px;
`;

const toHex = (selectedColor: IColor) => {
  let colorHex = selectedColor.hex;

  if (selectedColor.alpha === 100) {
    return colorHex;
  }

  let alphaHex = Math.round((selectedColor.alpha / 100) * 255).toString(16);

  if (alphaHex.length === 1) {
    alphaHex = `0${alphaHex}`;
  }

  if (colorHex.length === 4) {
    if (alphaHex.startsWith(alphaHex.charAt(1))) {
      alphaHex = alphaHex.charAt(0);
    } else {
      colorHex = `#${colorHex.charAt(1)}${colorHex.charAt(1)}${colorHex.charAt(2)}${colorHex.charAt(
        2
      )}${colorHex.charAt(3)}${colorHex.charAt(3)}`;
    }
  }

  return `${colorHex}${alphaHex}`;
};

const Example = () => {
  const defaultColor = `${PALETTE.blue[700]}99`;
  const [input, setInput] = useState(defaultColor);
  const [color, setColor] = useState<string | IColor>(rgba(PALETTE.blue[700], 0.6));

  return (
    <Grid.Row justifyContent="center">
      <StyledCol>
        <Field>
          <Field.Label>Favorite color</Field.Label>
          <InputGroup style={{ zIndex: 1 }}>
            <StyledInput
              maxLength={9}
              value={input}
              onChange={e => {
                setInput(e.target.value);
                if (validHex.test(e.target.value)) {
                  setColor(toColorString(parseToRgb(e.target.value)));
                }
              }}
            />
            <ColorPickerDialog
              focusInset
              color={color}
              onChange={selectedColor => {
                setColor(selectedColor);
                setInput(toHex(selectedColor));
              }}
              buttonProps={{
                'aria-label': 'choose your favorite color'
              }}
            />
          </InputGroup>
        </Field>
      </StyledCol>
    </Grid.Row>
  );
};

export default Example;
