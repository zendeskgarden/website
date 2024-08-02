/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Grid } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';

const StyledRow = styled(Grid.Row)`
  margin-top: ${p => p.theme.space.md};
`;

const Example = () => (
  <>
    <Grid.Row>
      <Grid.Col textAlign="center">
        <Button isStretched>Stretched</Button>
      </Grid.Col>
    </Grid.Row>
    <StyledRow>
      <Grid.Col textAlign="center">
        <Button isPrimary isStretched>
          Also stretched
        </Button>
      </Grid.Col>
    </StyledRow>
  </>
);

export default Example;
