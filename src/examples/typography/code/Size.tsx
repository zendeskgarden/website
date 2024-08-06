/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { Grid } from '@zendeskgarden/react-grid';
import { Code } from '@zendeskgarden/react-typography';

const StyledCol = styled(Grid.Col)`
  ${p => mediaQuery('down', 'xs', p.theme)} {
    margin-top: ${p => p.theme.space.sm};
  }
`;

const Example = () => (
  <Grid.Row alignItems="center">
    <Grid.Col sm={4} textAlign="center">
      <Code size="small">Veggies es bonus</Code>
    </Grid.Col>
    <StyledCol sm={4} textAlign="center">
      <Code size="medium">Veggies es bonus</Code>
    </StyledCol>
    <StyledCol sm={4} textAlign="center">
      <Code size="large">Veggies es bonus</Code>
    </StyledCol>
  </Grid.Row>
);

export default Example;
