/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useContext } from 'react';
import styled, { css, DefaultTheme, ThemeContext, ThemeProps } from 'styled-components';
import { math } from 'polished';
import { Grid } from '@zendeskgarden/react-grid';
import {
  IGardenTheme,
  PALETTE,
  ThemeProvider,
  getColor,
  mediaQuery
} from '@zendeskgarden/react-theming';

const colorStyles = (component: 'flower' | 'leaf' | 'pot', { theme }: ThemeProps<DefaultTheme>) => {
  let retVal;

  if (component === 'flower') {
    const color = getColor({ theme, hue: 'lemon', light: { shade: 300 }, dark: { shade: 200 } });

    retVal = css`
      background-color: ${color};

      &::before,
      &::after {
        background-color: ${color};
      }
    `;
  } else if (component === 'leaf') {
    const color = getColor({ theme, hue: 'green', light: { shade: 500 }, dark: { shade: 400 } });

    retVal = css`
      background-color: ${color};
    `;
  } else if (component === 'pot') {
    const options = { theme, hue: 'pink' };
    const backgroundColor = getColor({ ...options, light: { shade: 700 }, dark: { shade: 600 } });
    const foregroundColor = getColor({ ...options, light: { shade: 600 }, dark: { shade: 700 } });

    retVal = css`
      background-color: ${backgroundColor};
      background-image:
        radial-gradient(${foregroundColor} 25%, transparent 0),
        radial-gradient(${foregroundColor} 25%, transparent 0);
    `;
  }

  return retVal;
};

const sizeStyles = (
  component: 'flower' | 'leaf' | 'plant' | 'pot',
  { theme }: ThemeProps<DefaultTheme>
) => {
  let retVal;

  if (component === 'flower') {
    const borderRadius = math(`${theme.borderRadii.md} * 5px`);
    const size = theme.space.base * 10;
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
    const size = theme.space.base * 10;

    retVal = css`
      border-radius: 80% ${theme.borderRadii.md};
      width: ${size}px;
      height: ${size}px;
    `;
  } else if (component === 'plant') {
    const marginBottom = theme.space.base * 5;
    const top = theme.space.base * 6;
    const position = theme.space.base * 10;

    retVal = css`
      margin-bottom: ${marginBottom}px;

      & > :first-child {
        top: ${top}px;
        ${theme.rtl ? 'right' : 'left'}: ${position}px;
      }

      & > :last-child {
        top: ${top}px;
        ${theme.rtl ? 'left' : 'right'}: ${position}px;
      }
    `;
  } else if (component === 'pot') {
    const backgroundSize = theme.space.base * 6;
    const borderRadius = math(`${theme.borderRadii.md} * 3px`);
    const size = theme.space.base * 24;

    retVal = css`
      border-radius: ${borderRadius} ${borderRadius} ${math(`${borderRadius} * 2`)}
        ${math(`${borderRadius} * 2`)} / ${borderRadius} ${borderRadius} 100% 100%;
      background-position:
        ${backgroundSize / 2}px ${backgroundSize / 2}px,
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

const StyledCol = styled(Grid.Col)`
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
    <Grid.Row>
      <ThemeProvider theme={sizeTheme}>
        <Grid.Col>
          <FlowerPot />
        </Grid.Col>
        <ThemeProvider theme={colorTheme}>
          <StyledCol>
            <FlowerPot />
          </StyledCol>
          <ThemeProvider theme={shapeTheme}>
            <StyledCol>
              <FlowerPot />
            </StyledCol>
          </ThemeProvider>
        </ThemeProvider>
      </ThemeProvider>
    </Grid.Row>
  );
};

export default Example;
