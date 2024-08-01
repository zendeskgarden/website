/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Field, Label, Message, Checkbox } from '@zendeskgarden/react-forms';
import { Grid } from '@zendeskgarden/react-grid';

const StyledField = styled(Field)`
  margin-top: ${p => p.theme.space.xs};
`;

const Example = () => (
  <Grid.Row justifyContent="center">
    <Grid.Col size="auto">
      <Field>
        <Checkbox defaultChecked>
          <Label>Pest resistant</Label>
        </Checkbox>
        <Message validation="success">Safe for outdoor beds</Message>
      </Field>
      <StyledField>
        <Checkbox>
          <Label>Needs direct light</Label>
        </Checkbox>
        <Message validation="warning">Requires 4 hours of sun per day</Message>
      </StyledField>
      <StyledField>
        <Checkbox>
          <Label>Drought-tolerant</Label>
        </Checkbox>
        <Message validation="error">Not appropriate for greenhouse</Message>
      </StyledField>
    </Grid.Col>
  </Grid.Row>
);

export default Example;
