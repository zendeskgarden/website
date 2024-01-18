/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';
import { ThemeProvider } from '@zendeskgarden/react-theming';

/* Each Garden example is wrapped by a <ThemeProvider> */
const Example = () => {
  const theme = (parentTheme: any) => ({
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
    <ThemeProvider focusVisibleRef={null} theme={theme as any}>
      <Row>
        <Col textAlign="center">
          <Button>Default</Button>
        </Col>
        <Col textAlign="center">
          <Button isPrimary>Primary</Button>
        </Col>
        <Col textAlign="center">
          <Button isBasic>Basic</Button>
        </Col>
      </Row>
    </ThemeProvider>
  );
};

export default Example;
