/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useContext } from 'react';
import styled, { css, ThemeContext, ThemeProps } from 'styled-components';
import { math } from 'polished';
import { Row, Col } from '@zendeskgarden/react-grid';
import { IGardenTheme, PALETTE, ThemeProvider, mediaQuery } from '@zendeskgarden/react-theming';

const colorStyles = (component: 'flower' | 'leaf' | 'pot', props: ThemeProps<IGardenTheme>) => {
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

const sizeStyles = (
  component: 'flower' | 'leaf' | 'plant' | 'pot',
  props: ThemeProps<IGardenTheme>
) => {
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
  } else if (component === 'plant') {
    const marginBottom = props.theme.space.base * 5;
    const top = props.theme.space.base * 6;
    const position = props.theme.space.base * 10;

    retVal = css`
      margin-bottom: ${marginBottom}px;

      & > :first-child {
        top: ${top}px;
        ${props.theme.rtl ? 'right' : 'left'}: ${position}px;
      }

      & > :last-child {
        top: ${top}px;
        ${props.theme.rtl ? 'left' : 'right'}: ${position}px;
      }
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
  white-space: nowrap;

  & > ${StyledLeaf}:first-of-type {
    transform: rotate(65deg);
  }

  & > ${StyledLeaf}:last-of-type {
    transform: rotate(25deg);
  }

  ${p => sizeStyles('plant', p)};
`;

const StyledPot = styled.div`
  display: inline-block;

  ${p => sizeStyles('pot', p)};
  ${p => colorStyles('pot', p)};
`;

const FlowerPot = () => {
  const theme = useContext(ThemeContext);

  return (
    <div css={{ textAlign: 'center', minWidth: theme.space.base * 50 }}>
      <StyledPlant>
        <StyledLeaf />
        <StyledFlower />
        <StyledLeaf />
      </StyledPlant>
      <StyledPot />
    </div>
  );
};

const StyledCol = styled(Col)`
  ${p => mediaQuery('down', 'xs', p.theme)} {
    margin-top: ${p => p.theme.space.sm};
  }
`;

/* Each Garden example is wrapped by a <ThemeProvider> */
const Example = () => {
  const sizeTheme = (parentTheme: IGardenTheme) => ({
    ...parentTheme,
    borderRadii: {
      ...parentTheme.borderRadii,
      md: '3px'
    },
    space: {
      ...parentTheme.space,
      base: 3
    }
  });

  const shapeTheme = (parentTheme: IGardenTheme) => ({
    ...parentTheme,
    borderRadii: {
      ...parentTheme.borderRadii,
      md: '0'
    }
  });

  const colorTheme = (parentTheme: IGardenTheme) => ({
    ...parentTheme,
    palette: {
      ...parentTheme.palette,
      lemon: PALETTE.fuschia,
      pink: PALETTE.azure
    }
  });

  return (
    <Row>
      <ThemeProvider focusVisibleRef={null} theme={sizeTheme as any}>
        <Col>
          <FlowerPot />
        </Col>
        <ThemeProvider focusVisibleRef={null} theme={colorTheme as any}>
          <StyledCol>
            <FlowerPot />
          </StyledCol>
          <ThemeProvider focusVisibleRef={null} theme={shapeTheme as any}>
            <StyledCol>
              <FlowerPot />
            </StyledCol>
          </ThemeProvider>
        </ThemeProvider>
      </ThemeProvider>
    </Row>
  );
};

export default Example;
