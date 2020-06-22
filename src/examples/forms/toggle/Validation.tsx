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

const Example = () => {
  return (
    <Row justifyContent="center">
      <Col size="auto" textAlign="start">
        <Field>
          <Toggle>
            <Label>Show tulips</Label>
            <Message validation="success">Tulips are blooming</Message>
          </Toggle>
        </Field>
        <StyledField>
          <Toggle>
            <Label>Show marigolds</Label>
            <Message validation="warning">It&apos;s not the right reason for marigolds</Message>
          </Toggle>
        </StyledField>
        <StyledField>
          <Toggle>
            <Label>Show roses</Label>
            <Message validation="error">There are no roses available</Message>
          </Toggle>
        </StyledField>
      </Col>
    </Row>
  );
};

export default Example;
