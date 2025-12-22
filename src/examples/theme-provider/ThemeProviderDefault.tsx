/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useContext } from 'react';
import useResizeObserver from 'use-resize-observer';
import styled, {
  css,
  DefaultTheme,
  ThemeContext,
  ThemeProps,
  ThemeProvider
} from 'styled-components';
import { math } from 'polished';
import { getColor, IGardenTheme } from '@zendeskgarden/react-theming';
import { Pane, PaneProvider } from '@zendeskgarden/react-grid';

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

const StyledPane = styled(Pane)`
  background-color: ${p => getColor({ theme: p.theme, variable: 'background.default' })};
`;

const StyledPaneContent = styled(Pane.Content)`
  ${p => (p.theme.rtl ? 'left' : 'right')}: 0;
  padding: ${p => p.theme.space.base * 6}px;
`;

const StyledPanes = styled.div`
  display: grid;
  direction: ${p => (p.theme.rtl ? 'rtl' : 'ltr')};
`;

const FlowerPot = () => {
  const theme = useContext(ThemeContext);

  return (
    <div style={{ textAlign: 'center', minWidth: theme.space.base * 50 }}>
      <StyledPlant>
        <StyledLeaf />
        <StyledFlower />
        <StyledLeaf />
      </StyledPlant>
      <StyledPot />
    </div>
  );
};

/* Each Garden example is wrapped by a <ThemeProvider> */
const Example = () => {
  const { ref, width = 1, height = 1 } = useResizeObserver();

  const reverseTheme = (parentTheme: IGardenTheme): IGardenTheme => ({
    ...parentTheme,
    colors: { ...parentTheme.colors, base: parentTheme.colors.base === 'light' ? 'dark' : 'light' }
  });

  return (
    <div ref={ref}>
      <PaneProvider
        totalPanesHeight={height}
        totalPanesWidth={width}
        defaultColumnValues={{
          'column-1': 1,
          'column-2': 1
        }}
      >
        {({ getGridTemplateColumns }) => (
          <StyledPanes style={{ gridTemplateColumns: getGridTemplateColumns() }}>
            <StyledPane>
              <StyledPaneContent style={{ width }}>
                <FlowerPot />
              </StyledPaneContent>
              <Pane.Splitter layoutKey="column-1" min={0.01} max={2} />
            </StyledPane>
            <ThemeProvider theme={reverseTheme}>
              <StyledPane style={{ overflow: 'hidden' }}>
                <StyledPaneContent style={{ width, position: 'absolute' }}>
                  <FlowerPot />
                </StyledPaneContent>
              </StyledPane>
            </ThemeProvider>
          </StyledPanes>
        )}
      </PaneProvider>
    </div>
  );
};

export default Example;
