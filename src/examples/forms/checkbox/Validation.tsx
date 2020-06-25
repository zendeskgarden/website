/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Field, Label, Message, Checkbox } from '@zendeskgarden/react-forms';
import { Row, Col } from '@zendeskgarden/react-grid';

const StyledField = styled(Field)`
  margin-top: ${p => p.theme.space.xs};
`;

const Example = () => (
  <Row justifyContent="center">
    <Col size="auto">
      <Field>
        <Checkbox defaultChecked>
          <Label>Annual</Label>
        </Checkbox>
        <Message validation="success">Grows all the time</Message>
      </Field>
      <StyledField>
        <Checkbox>
          <Label>Perennial</Label>
        </Checkbox>
        <Message validation="warning">Two years and growing</Message>
      </StyledField>
      <StyledField>
        <Checkbox>
          <Label>Biennial</Label>
        </Checkbox>
        <Message validation="error">Incomplete growth</Message>
      </StyledField>
    </Col>
  </Row>
);

export default Example;
