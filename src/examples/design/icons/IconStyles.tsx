/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { MD } from '@zendeskgarden/react-typography';
import { Row, Col } from '@zendeskgarden/react-grid';
import { ReactComponent as LeafStrokeIcon } from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';
import { ReactComponent as LeafFillIcon } from '@zendeskgarden/svg-icons/src/16/leaf-fill.svg';
import { getColor } from '@zendeskgarden/react-theming';

const StyledCol = styled(Col)`
  text-align: center;
  color: ${p => getColor('neutralHue', 600, p.theme)};
`;

const Example = () => {
  return (
    <Row justifyContent="center">
      <StyledCol xs md={3}>
        <LeafStrokeIcon />
        <MD>Stroke (default)</MD>
      </StyledCol>
      <StyledCol xs md={3}>
        <LeafFillIcon />
        <MD>Fill</MD>
      </StyledCol>
    </Row>
  );
};

export default Example;
