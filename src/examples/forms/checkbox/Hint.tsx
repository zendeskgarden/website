/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Field, Label, Hint, Checkbox } from '@zendeskgarden/react-forms';
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
          <Hint>Completes its life cycle with growing season</Hint>
        </Checkbox>
      </Field>
      <StyledField>
        <Checkbox>
          <Label>Perennial</Label>
          <Hint>Lives more than two years</Hint>
        </Checkbox>
      </StyledField>
    </Col>
  </Row>
);

export default Example;
