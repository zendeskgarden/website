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

const StyledHint = styled(Hint)`
  ${p => `margin-${p.theme.rtl ? 'right' : 'left'}: ${p.theme.space.base * 6}px;`}
`;

const Example = () => (
  <Row justifyContent="center">
    <Col size="auto">
      <Field>
        <Checkbox defaultChecked>
          <Label>Pest resistant</Label>
        </Checkbox>
        <StyledHint>Has natural resistance to bugs and animals</StyledHint>
      </Field>
      <StyledField>
        <Checkbox>
          <Label>Needs direct light</Label>
        </Checkbox>
        <StyledHint>Thrives in warm temperatures with lots of sun</StyledHint>
      </StyledField>
    </Col>
  </Row>
);

export default Example;
