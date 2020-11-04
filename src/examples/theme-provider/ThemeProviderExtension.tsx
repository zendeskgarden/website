/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';
import { DefaultTheme, ThemeProvider } from '@zendeskgarden/react-theming';

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
  const theme = (parentTheme: DefaultTheme) => ({
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
      <Row>
        <Col textAlign="center">
          <Button isDanger>Default</Button>
        </Col>
        <Col textAlign="center">
          <Button isDanger isPrimary>
            Primary
          </Button>
        </Col>
        <Col textAlign="center">
          <Button isDanger isBasic>
            Basic
          </Button>
        </Col>
      </Row>
    </ThemeProvider>
  );
};

export default Example;
