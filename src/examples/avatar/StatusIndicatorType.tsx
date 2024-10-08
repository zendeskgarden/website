/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Grid } from '@zendeskgarden/react-grid';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { StatusIndicator } from '@zendeskgarden/react-avatars';

const StyledCol = styled(Grid.Col)`
  ${p => mediaQuery('down', 'xs', p.theme)} {
    margin-top: ${p => p.theme.space.sm};
  }
`;

const Example = () => (
  <Grid.Row alignItems="center">
    <Grid.Col textAlign="center" sm>
      <StatusIndicator type="available" aria-label="status: available">
        Available
      </StatusIndicator>
    </Grid.Col>
    <StyledCol textAlign="center" sm>
      <StatusIndicator type="away" aria-label="status: away">
        Away
      </StatusIndicator>
    </StyledCol>
    <StyledCol textAlign="center" sm>
      <StatusIndicator type="transfers" aria-label="status: transfers only">
        Transfers only
      </StatusIndicator>
    </StyledCol>
    <StyledCol textAlign="center" sm>
      <StatusIndicator type="offline" aria-label="status: offline">
        Offline
      </StatusIndicator>
    </StyledCol>
  </Grid.Row>
);

export default Example;
