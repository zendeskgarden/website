/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { getColor } from '@zendeskgarden/react-theming';
import { MD } from '@zendeskgarden/react-typography';
import { Grid } from '@zendeskgarden/react-grid';

const StyledGrid = styled(Grid)`
  color: ${p => getColor({ variable: 'foreground.default', theme: p.theme })};
`;

const Example = () => (
  <StyledGrid gutters={false} debug>
    <Grid.Row>
      <Grid.Col size={12} sm={6} md={8}>
        <MD>Col[size=12][sm=6][md=8]</MD>
      </Grid.Col>
      <Grid.Col size={6} md={4}>
        <MD>Col[size=6][md=4]</MD>
      </Grid.Col>
    </Grid.Row>
  </StyledGrid>
);

export default Example;
