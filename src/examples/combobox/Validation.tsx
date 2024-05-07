/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { Grid } from '@zendeskgarden/react-grid';
import { Combobox, Field, Label, Message, Option } from '@zendeskgarden/react-dropdowns';

const StyledCol = styled(Grid.Col)`
  ${p => mediaQuery('down', 'xs', p.theme)} {
    margin-top: ${p => p.theme.space.sm};
  }
`;

const Example = () => (
  <Grid.Row justifyContent="center">
    <Grid.Col sm>
      <Field>
        <Label>Plant</Label>
        <Combobox validation="success">
          <Option value="Cactus" isDisabled isSelected />
        </Combobox>
        <Message validation="success">Cactus is available</Message>
      </Field>
    </Grid.Col>
    <StyledCol>
      <Field>
        <Label>Plant</Label>
        <Combobox validation="warning">
          <Option value="Cactus" isDisabled isSelected />
        </Combobox>
        <Message validation="warning">Only 2 left in inventory</Message>
      </Field>
    </StyledCol>
    <StyledCol>
      <Field>
        <Label>Plant</Label>
        <Combobox validation="error">
          <Option value="Cactus" isDisabled isSelected />
        </Combobox>
        <Message validation="error">Cactus is currently unavailable</Message>
      </Field>
    </StyledCol>
  </Grid.Row>
);

export default Example;
