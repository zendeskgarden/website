/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { math } from 'polished';
import { Row, Col } from '@zendeskgarden/react-grid';

const colorStyles = (component: 'flower' | 'leaf' | 'pot', props: ThemeProps<DefaultTheme>) => {
  let retVal;

  if (component === 'flower') {
    const color = props.theme.palette.lemon[400];

    retVal = css`
      background-color: ${color};

      &::before,
      &::after {
        background-color: ${color};
      }
    `;
  } else if (component === 'leaf') {
    retVal = css`
      background-color: ${props.theme.palette.green[400]};
    `;
  } else if (component === 'pot') {
    const backgroundColor = props.theme.palette.pink['M600' as any];
    const foregroundColor = props.theme.palette.pink['M400' as any];

    retVal = css`
      background-color: ${backgroundColor};
      background-image: radial-gradient(${foregroundColor} 25%, transparent 0),
        radial-gradient(${foregroundColor} 25%, transparent 0);
    `;
  }

  return retVal;
};

const sizeStyles = (component: 'flower' | 'leaf' | 'pot', props: ThemeProps<DefaultTheme>) => {
  let retVal;

  if (component === 'flower') {
    const borderRadius = math(`${props.theme.borderRadii.md} * 5px`);
    const size = props.theme.space.base * 10;
    const width = size * 3;

    retVal = css`
      margin: ${size}px 0 ${size}px;
      border-radius: ${borderRadius};
      width: ${width}px;
      height: ${size}px;

      &::before,
      &::after {
        border-radius: ${borderRadius};
        width: ${width}px;
        height: ${size}px;
      }

      &::after {
        top: -${size}px;
      }
    `;
  } else if (component === 'leaf') {
    const size = props.theme.space.base * 10;

    retVal = css`
      border-radius: 80% ${props.theme.borderRadii.md};
      width: ${size}px;
      height: ${size}px;
    `;
  } else if (component === 'pot') {
    const backgroundSize = props.theme.space.base * 6;
    const borderRadius = math(`${props.theme.borderRadii.md} * 3px`);
    const size = props.theme.space.base * 24;

    retVal = css`
      border-radius: ${borderRadius} ${borderRadius} ${math(`${borderRadius} * 2`)}
        ${math(`${borderRadius} * 2`)} / ${borderRadius} ${borderRadius} 100% 100%;
      background-position: ${backgroundSize / 2}px ${backgroundSize / 2}px,
        ${backgroundSize}px ${backgroundSize}px;
      background-size: ${backgroundSize}px ${backgroundSize}px;
      width: ${size}px;
      height: ${size}px;
    `;
  }

  return retVal;
};

const StyledFlower = styled.div`
  display: inline-block;
  transform: rotate(90deg);

  &::before,
  &::after {
    display: block;
    position: relative;
    transform: rotate(60deg);
    content: '';
  }

  &::before {
    transform: rotate(-60deg);
  }

  ${p => sizeStyles('flower', p)};
  ${p => colorStyles('flower', p)};
`;

const StyledLeaf = styled.div`
  display: inline-block;
  position: relative;

  ${p => sizeStyles('leaf', p)};
  ${p => colorStyles('leaf', p)};
`;

const StyledPlant = styled.div`
  margin-bottom: ${p => p.theme.space.base * 5}px;

  & > ${StyledLeaf}:first-of-type {
    top: ${p => p.theme.space.base * 6}px;
    left: ${p => p.theme.space.base * 10}px;
    transform: rotate(70deg);
  }

  & > ${StyledLeaf}:last-of-type {
    top: ${p => p.theme.space.base * 6}px;
    right: ${p => p.theme.space.base * 10}px;
    transform: rotate(20deg);
  }
`;

const StyledPot = styled.div`
  display: inline-block;

  ${p => sizeStyles('pot', p)};
  ${p => colorStyles('pot', p)};
`;

const Example = () => (
  <Row>
    <Col textAlign="center">
      <StyledPlant>
        <StyledLeaf />
        <StyledFlower />
        <StyledLeaf />
      </StyledPlant>
      <StyledPot />
    </Col>
  </Row>
);

export default Example;
