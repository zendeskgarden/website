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
          <Field.Hint>Has natural resistance to bugs and animals</Field.Hint>
        </Checkbox>
      </Field>
      <StyledField>
        <Checkbox>
          <Field.Label>Needs direct light</Field.Label>
          <Field.Hint>Thrives in warm temperatures with lots of sun</Field.Hint>
        </Checkbox>
      </StyledField>
    </Grid.Col>
  </Grid.Row>
);

export default Example;
