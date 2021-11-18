/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Field, Label, Toggle, Message } from '@zendeskgarden/react-forms';

const StyledField = styled(Field)`
  margin-top: ${p => p.theme.space.xs};
`;

const StyledMessage = styled(Message)`
  ${p => `margin-${p.theme.rtl ? 'right' : 'left'}: ${p.theme.space.base * 6}px;`}
`;

const Example = () => {
  return (
    <Row justifyContent="center">
      <Col size="auto">
        <Field>
          <Toggle>
            <Label>Show tulips</Label>
          </Toggle>
          <StyledMessage validation="success">Tulips are blooming</StyledMessage>
        </Field>
        <StyledField>
          <Toggle>
            <Label>Show marigolds</Label>
          </Toggle>
          <StyledMessage validation="warning">
            It&apos;s not the right reason for marigolds
          </StyledMessage>
        </StyledField>
        <StyledField>
          <Toggle>
            <Label>Show roses</Label>
          </Toggle>
          <StyledMessage validation="error">There are no roses available</StyledMessage>
        </StyledField>
      </Col>
    </Row>
  );
};

export default Example;
