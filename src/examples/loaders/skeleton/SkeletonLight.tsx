/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Grid } from '@zendeskgarden/react-grid';
import { MD, XXL } from '@zendeskgarden/react-typography';
import { Skeleton } from '@zendeskgarden/react-loaders';

const StyledCol = styled(Grid.Col)`
  background-color: ${p => p.theme.palette.kale[600]};
  padding: ${p => p.theme.space.md};
`;

const Example = () => (
  <Grid.Row justifyContent="center">
    <StyledCol sm={5}>
      <XXL>
        <Skeleton isLight />
      </XXL>
      <MD>
        <Skeleton isLight />
        <Skeleton isLight />
        <Skeleton isLight />
      </MD>
    </StyledCol>
  </Grid.Row>
);

export default Example;
