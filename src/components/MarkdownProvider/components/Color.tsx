/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { readableColor } from 'polished';
import { PALETTE } from '@zendeskgarden/react-theming';
import { Row, Col } from '@zendeskgarden/react-grid';

const StyledColorHex = styled.figcaption`
  margin-left: auto;
  font-size: ${p => p.theme.fontSizes.sm};
`;

const StyledColorSwatch = styled.figure<{ color: string }>`
  display: flex;
  align-items: center;
  background-color: ${p => p.color};
  padding: ${p => p.theme.space.xs} ${p => p.theme.space.sm};
  color: ${p => readableColor(p.color, p.theme.colors.foreground, p.theme.colors.background)};

  &:first-child {
    border-top-left-radius: ${p => p.theme.space.sm};
    border-top-right-radius: ${p => p.theme.space.sm};
  }

  &:last-child {
    border-bottom-left-radius: ${p => p.theme.space.sm};
    border-bottom-right-radius: ${p => p.theme.space.sm};
  }
`;

const StyledColorTitle = styled.b`
  font-size: ${p => p.theme.fontSizes.md};
  font-weight: ${p => p.theme.fontWeights.semibold};
`;

const Color: React.FC<{ hue: string }> = ({ hue }) => {
  const colors = (PALETTE as any)[hue];

  return (
    <>
      {Object.keys(colors).map(shade => {
        const color = colors[shade];

        return (
          <StyledColorSwatch color={color} key={shade}>
            <StyledColorTitle>{shade}</StyledColorTitle>
            <StyledColorHex>{color}</StyledColorHex>
          </StyledColorSwatch>
        );
      })}
    </>
  );
};

export const ColorPalette: React.FC = () => (
  <>
    <Row>
      <Col>
        <Color hue="grey" />
      </Col>
      <Col>
        <Color hue="kale" />
      </Col>
    </Row>
    <Row>
      <Col>
        <Color hue="blue" />
      </Col>
      <Col>
        <Color hue="green" />
      </Col>
    </Row>
    <Row>
      <Col>
        <Color hue="yellow" />
      </Col>
      <Col>
        <Color hue="red" />
      </Col>
    </Row>
  </>
);
