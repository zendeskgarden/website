/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Field, Label, Radio, Hint } from '@zendeskgarden/react-forms';
import { Row, Col } from '@zendeskgarden/react-grid';

const StyledField = styled(Field)`
  margin-top: ${p => p.theme.space.xs};
`;

const StyledHint = styled(Hint)`
  ${p => `margin-${p.theme.rtl ? 'right' : 'left'}: ${p.theme.space.base * 6}px;`}
`;

const Example = () => {
  const [radioValue, setRadioValue] = useState('annual');

  return (
    <Row justifyContent="center">
      <Col size="auto">
        <div role="group" aria-label="Choose a plant lifecycle">
          <Field>
            <Radio
              name="hint-example"
              value="annual"
              checked={radioValue === 'annual'}
              onChange={event => setRadioValue(event.target.value)}
            >
              <Label>Annual</Label>
            </Radio>
            <StyledHint>Completes its life cycle with growing season</StyledHint>
          </Field>
          <StyledField>
            <Radio
              name="hint-example"
              value="perennial"
              checked={radioValue === 'perennial'}
              onChange={event => setRadioValue(event.target.value)}
            >
              <Label>Perennial</Label>
            </Radio>
            <StyledHint>Lives more than two years</StyledHint>
          </StyledField>
        </div>
      </Col>
    </Row>
  );
};

export default Example;
