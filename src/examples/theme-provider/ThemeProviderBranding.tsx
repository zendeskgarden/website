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

/* Each Garden example is wrapped by a <ThemeProvider> */
const Example = () => {
  const theme = (parentTheme: IGardenTheme) => ({
    ...parentTheme,
    borderRadii: {
      ...parentTheme.borderRadii,
      md: '0'
    },
    colors: {
      ...parentTheme.colors,
      primaryHue: 'purple'
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid.Row>
        <Grid.Col textAlign="center">
          <Button>Default</Button>
        </Grid.Col>
        <Grid.Col textAlign="center">
          <Button isPrimary>Primary</Button>
        </Grid.Col>
        <Grid.Col textAlign="center">
          <Button isBasic>Basic</Button>
        </Grid.Col>
      </Grid.Row>
    </ThemeProvider>
  );
};

export default Example;
