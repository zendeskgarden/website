/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Field, Label, Radio, Hint, Fieldset } from '@zendeskgarden/react-forms';
import { Row, Col } from '@zendeskgarden/react-grid';

const StyledField = styled(Field)`
  margin-top: ${p => p.theme.space.xs};
`;

const Example = () => {
  const [radioValue, setRadioValue] = useState('annual');

  return (
    <Row justifyContent="center">
      <Col size="auto">
        <Fieldset>
          <Fieldset.Legend>Choose a plant lifecycle</Fieldset.Legend>
          <Field>
            <Radio
              name="hint-example"
              value="annual"
              checked={radioValue === 'annual'}
              onChange={event => setRadioValue(event.target.value)}
            >
              <Label>Annual</Label>
              <Hint>Completes its life cycle with growing season</Hint>
            </Radio>
          </Field>
          <StyledField>
            <Radio
              name="hint-example"
              value="perennial"
              checked={radioValue === 'perennial'}
              onChange={event => setRadioValue(event.target.value)}
            >
              <Label>Perennial</Label>
              <Hint>Lives more than two years</Hint>
            </Radio>
          </StyledField>
        </Fieldset>
      </Col>
    </Row>
  );
};

export default Example;
