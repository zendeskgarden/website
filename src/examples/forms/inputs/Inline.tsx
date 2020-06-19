/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Field, Label, Input } from '@zendeskgarden/react-forms';
import styled from 'styled-components';
import { Row, Col } from '@zendeskgarden/react-grid';

const StyledField = styled(Field)`
  display: flex;
  align-items: center;
`;

const StyledLabel = styled(Label)`
  margin-${props => (props.theme.rtl ? 'left' : 'right')}: ${props => props.theme.space.sm};
`;

const Example = () => (
  <Row justifyContent="center">
    <Col size="auto">
      <StyledField>
        <StyledLabel>Plant</StyledLabel>
        <Input style={{ margin: 0, width: 'auto' }} />
      </StyledField>
    </Col>
  </Row>
);

export default Example;
