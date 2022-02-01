/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { MD } from '@zendeskgarden/react-typography';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { ReactComponent as LeafStrokeIcon } from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';
import { ReactComponent as LeafFillIcon } from '@zendeskgarden/svg-icons/src/16/leaf-fill.svg';
import { getColor } from '@zendeskgarden/react-theming';

const StyledCol = styled(Col)`
  text-align: center;
  color: ${p => getColor('gray', 600, p.theme)};
`;

const Example = () => {
  return (
    <Grid>
      <Row justifyContent="center">
        <StyledCol size={3}>
          <LeafStrokeIcon />
          <MD>Stroke style (default)</MD>
        </StyledCol>
        <StyledCol size={3}>
          <LeafFillIcon />
          <MD>Filled Styled</MD>
        </StyledCol>
      </Row>
    </Grid>
  );
};

export default Example;
