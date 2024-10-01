/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Grid } from '@zendeskgarden/react-grid';
import { Field, Toggle } from '@zendeskgarden/react-forms';

const StyledField = styled(Field)`
  margin-top: ${p => p.theme.space.xs};
`;

const Example = () => {
  return (
    <Grid.Row justifyContent="center">
      <Grid.Col size="auto">
        <Field>
          <Toggle>
            <Field.Label>Show tulips</Field.Label>
            <Field.Message validation="success">Tulips are blooming</Field.Message>
          </Toggle>
        </Field>
        <StyledField>
          <Toggle>
            <Field.Label>Show marigolds</Field.Label>
            <Field.Message validation="warning">
              It&apos;s not the right reason for marigolds
            </Field.Message>
          </Toggle>
        </StyledField>
        <StyledField>
          <Toggle>
            <Field.Label>Show roses</Field.Label>
            <Field.Message validation="error">There are no roses available</Field.Message>
          </Toggle>
        </StyledField>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Example;
