/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { MD } from '@zendeskgarden/react-typography';
import { Grid } from '@zendeskgarden/react-grid';
import { ReactComponent as LeafStrokeIcon } from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';
import { ReactComponent as LeafFillIcon } from '@zendeskgarden/svg-icons/src/16/leaf-fill.svg';
import { getColorV8 } from '@zendeskgarden/react-theming';

const StyledCol = styled(Grid.Col)`
  text-align: center;
  color: ${p => getColorV8('neutralHue', 600, p.theme)};
`;

const Example = () => {
  return (
    <Grid.Row justifyContent="center">
      <StyledCol xs md={3}>
        <LeafStrokeIcon />
        <MD>Stroke (default)</MD>
      </StyledCol>
      <StyledCol xs md={3}>
        <LeafFillIcon />
        <MD>Fill</MD>
      </StyledCol>
    </Grid.Row>
  );
};

export default Example;
