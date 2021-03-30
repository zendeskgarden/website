/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { rgba, parseToRgb, toColorString } from 'polished';
import { Row, Col } from '@zendeskgarden/react-grid';
import { ColorpickerDialog, IColor } from '@zendeskgarden/react-colorpickers';
import { Field, Label, Input, InputGroup } from '@zendeskgarden/react-forms';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

interface IRgbaColor {
  red: number;
  green: number;
  blue: number;
  alpha: number;
}

const validHex = /^#(?:(?:[0-9A-F]{6}(?:[0-9A-F]{2})?)|(?:[0-9A-F]{3})(?:[0-9A-F]?))$/iu;

const StyledCol = styled(Col)`
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
    if (alphaHex.charAt(0) === alphaHex.charAt(1)) {
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
  const defaultColor = `${DEFAULT_THEME.palette.blue[600]}99`;
  const [input, setInput] = useState(defaultColor);
  const [color, setColor] = useState<string | IColor>(rgba(parseToRgb(defaultColor) as IRgbaColor));

  return (
    <Row justifyContent="center">
      <StyledCol>
        <Field>
          <Label>Favorite color</Label>
          <InputGroup>
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
            <ColorpickerDialog
              focusInset
              color={color}
              aria-label="Color picker dialog button"
              onChange={selectedColor => {
                setColor(selectedColor);
                setInput(toHex(selectedColor));
              }}
            />
          </InputGroup>
        </Field>
      </StyledCol>
    </Row>
  );
};

export default Example;
