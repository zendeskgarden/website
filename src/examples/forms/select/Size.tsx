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
  <Grid.Row justifyContent="center">
    <Grid.Col sm={5}>
      <Field>
        <Field.Label>Plant</Field.Label>
        <Select>
          <option>Succulent</option>
          <option>Orchid</option>
          <option>Cactus</option>
        </Select>
      </Field>
    </Grid.Col>
    <StyledCol sm={5}>
      <Field>
        <Field.Label>Plant</Field.Label>
        <Select isCompact>
          <option>Succulent</option>
          <option>Orchid</option>
          <option>Cactus</option>
        </Select>
      </Field>
    </StyledCol>
  </Grid.Row>
);

export default Example;
