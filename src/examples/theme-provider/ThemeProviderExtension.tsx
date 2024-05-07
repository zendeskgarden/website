/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Grid } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';
import { ThemeProvider } from '@zendeskgarden/react-theming';

const deepOrange = {
  100: '#ffccbc',
  200: '#ffab91',
  300: '#ff8a65',
  400: '#ff7043',
  500: '#ff5722',
  600: '#f4511e',
  700: '#e64a19',
  800: '#d84315'
};

/* Each Garden example is wrapped by a <ThemeProvider> */
const Example = () => {
  const theme = (parentTheme: any) => ({
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
    <ThemeProvider focusVisibleRef={null} theme={theme as any}>
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
