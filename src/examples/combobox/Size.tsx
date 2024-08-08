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
import { Combobox, Field, Option } from '@zendeskgarden/react-dropdowns';

const StyledCol = styled(Grid.Col)`
  ${p => mediaQuery('down', 'xs', p.theme)} {
    margin-top: ${p => p.theme.space.sm};
  }
`;

const StyledRow = styled(Grid.Row)`
  margin-top: ${p => p.theme.space.md};
`;

const Example = () => (
  <>
    <Grid.Row justifyContent="center">
      <Grid.Col sm={5}>
        <Field>
          <Field.Label>Tree</Field.Label>
          <Combobox>
            <Option value="Douglas fir" />
            <Option value="Redwood" />
            <Option value="Sequoia" isSelected />
          </Combobox>
        </Field>
      </Grid.Col>
      <StyledCol sm={5}>
        <Field>
          <Field.Label>Tree</Field.Label>
          <Combobox isCompact>
            <Option value="Crape myrtle" isSelected />
            <Option value="Hydrangea" />
            <Option value="Japanese maple" />
          </Combobox>
        </Field>
      </StyledCol>
    </Grid.Row>
    <StyledRow justifyContent="center">
      <Grid.Col sm={5}>
        <Field>
          <Field.Label>Trees</Field.Label>
          <Combobox isMultiselectable maxHeight="76px">
            <Option value="Douglas fir" isSelected />
            <Option value="Redwood" isSelected />
            <Option value="Sequoia" isSelected />
          </Combobox>
        </Field>
      </Grid.Col>
      <StyledCol sm={5}>
        <Field>
          <Field.Label>Trees</Field.Label>
          <Combobox isCompact isMultiselectable maxHeight="64px">
            <Option value="Crape myrtle" isSelected />
            <Option value="Hydrangea" isSelected />
            <Option value="Japanese maple" isSelected />
          </Combobox>
        </Field>
      </StyledCol>
    </StyledRow>
  </>
);

export default Example;
