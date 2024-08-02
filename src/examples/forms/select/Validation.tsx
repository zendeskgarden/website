/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Grid } from '@zendeskgarden/react-grid';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { Field, Select } from '@zendeskgarden/react-forms';

const StyledCol = styled(Grid.Col)`
  ${p => mediaQuery('down', 'xs', p.theme)} {
    margin-top: ${p => p.theme.space.sm};
  }
`;

const Example = () => (
  <Grid.Row>
    <Grid.Col sm={4}>
      <Field>
        <Field.Label>Plant</Field.Label>
        <Select validation="success">
          <option>Cactus</option>
        </Select>
        <Field.Message validation="success">A cactus is a beautiful plant</Field.Message>
      </Field>
    </Grid.Col>
    <StyledCol sm={4}>
      <Field>
        <Field.Label>Plant</Field.Label>
        <Select validation="warning">
          <option>Cactus</option>
        </Select>
        <Field.Message validation="warning">A cactus has thorns</Field.Message>
      </Field>
    </StyledCol>
    <StyledCol sm={4}>
      <Field>
        <Field.Label>Plant</Field.Label>
        <Select validation="error">
          <option>Cactus</option>
        </Select>
        <Field.Message validation="error">A cactus belongs in the desert</Field.Message>
      </Field>
    </StyledCol>
  </Grid.Row>
);

export default Example;
