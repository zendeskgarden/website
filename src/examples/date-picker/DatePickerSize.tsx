/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { DatePicker } from '@zendeskgarden/react-datepickers';
import { Field, Input } from '@zendeskgarden/react-forms';
import { Grid } from '@zendeskgarden/react-grid';

const StyledCol = styled(Grid.Col)`
  ${p => mediaQuery('down', 'xs', p.theme)} {
    margin-top: ${p => p.theme.space.sm};
  }
`;

const Example = () => {
  const [state, setState] = useState(new Date());

  return (
    <Grid.Row justifyContent="center">
      <Grid.Col sm={5}>
        <Field>
          <Field.Label>Default</Field.Label>
          <DatePicker value={state} onChange={setState}>
            <Input />
          </DatePicker>
        </Field>
      </Grid.Col>
      <StyledCol sm={5}>
        <Field>
          <Field.Label>Compact</Field.Label>
          <DatePicker value={state} onChange={setState} isCompact>
            <Input isCompact />
          </DatePicker>
        </Field>
      </StyledCol>
    </Grid.Row>
  );
};

export default Example;
