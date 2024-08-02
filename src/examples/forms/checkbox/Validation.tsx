/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Field, Checkbox } from '@zendeskgarden/react-forms';
import { Grid } from '@zendeskgarden/react-grid';

const StyledField = styled(Field)`
  margin-top: ${p => p.theme.space.xs};
`;

const Example = () => (
  <Grid.Row justifyContent="center">
    <Grid.Col size="auto">
      <Field>
        <Checkbox defaultChecked>
          <Field.Label>Pest resistant</Field.Label>
        </Checkbox>
        <Field.Message validation="success">Safe for outdoor beds</Field.Message>
      </Field>
      <StyledField>
        <Checkbox>
          <Field.Label>Needs direct light</Field.Label>
        </Checkbox>
        <Field.Message validation="warning">Requires 4 hours of sun per day</Field.Message>
      </StyledField>
      <StyledField>
        <Checkbox>
          <Field.Label>Drought-tolerant</Field.Label>
        </Checkbox>
        <Field.Message validation="error">Not appropriate for greenhouse</Field.Message>
      </StyledField>
    </Grid.Col>
  </Grid.Row>
);

export default Example;
