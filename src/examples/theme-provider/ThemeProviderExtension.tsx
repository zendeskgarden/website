/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Grid } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';
import { IGardenTheme, ThemeProvider } from '@zendeskgarden/react-theming';

const deepOrange = {
  100: '#fff5f2',
  200: '#ffe6de',
  300: '#ffd5c8',
  400: '#ff9f81',
  500: '#ff6d3f',
  600: '#fa5521',
  700: '#c4431a',
  800: '#782910',
  900: '#591e0c',
  1000: '#3d1508',
  1100: '#2e1006',
  1200: '#1f0a04'
};

/* Each Garden example is wrapped by a <ThemeProvider> */
const Example = () => {
  const theme = (parentTheme: IGardenTheme) => ({
    ...parentTheme,
    palette: {
      ...parentTheme.palette,
      deepOrange
    },
    colors: {
      ...parentTheme.colors,
      dangerHue: 'deepOrange'
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid.Row>
        <Grid.Col textAlign="center">
          <Button isDanger>Default</Button>
        </Grid.Col>
        <Grid.Col textAlign="center">
          <Button isDanger isPrimary>
            Primary
          </Button>
        </Grid.Col>
        <Grid.Col textAlign="center">
          <Button isDanger isBasic>
            Basic
          </Button>
        </Grid.Col>
      </Grid.Row>
    </ThemeProvider>
  );
};

export default Example;
