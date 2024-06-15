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
import { Field, Label, Message, Select } from '@zendeskgarden/react-forms';

const StyledCol = styled(Grid.Col)`
  ${p => mediaQuery('down', 'xs', p.theme)} {
    margin-top: ${p => p.theme.space.sm};
  }
`;

const Example = () => (
  <Grid.Row>
    <Grid.Col sm={4}>
      <Field>
        <Label>Plant</Label>
        <Select validation="success">
          <option>Cactus</option>
        </Select>
        <Message validation="success">A cactus is a beautiful plant</Message>
      </Field>
    </Grid.Col>
    <StyledCol sm={4}>
      <Field>
        <Label>Plant</Label>
        <Select validation="warning">
          <option>Cactus</option>
        </Select>
        <Message validation="warning">A cactus has thorns</Message>
      </Field>
    </StyledCol>
    <StyledCol sm={4}>
      <Field>
        <Label>Plant</Label>
        <Select validation="error">
          <option>Cactus</option>
        </Select>
        <Message validation="error">A cactus belongs in the desert</Message>
      </Field>
    </StyledCol>
  </Grid.Row>
);

export default Example;
