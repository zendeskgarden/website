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
import { Field, Label, Input, InputGroup } from '@zendeskgarden/react-forms';
import { Button } from '@zendeskgarden/react-buttons';

const StyledCol = styled(Grid.Col)`
  ${p => mediaQuery('down', 'xs', p.theme)} {
    margin-top: ${p => p.theme.space.sm};
  }
`;

const Example = () => (
  <Grid.Row justifyContent="center">
    <Grid.Col sm={5}>
      <Field>
        <Label>Plant name generator</Label>
        <InputGroup>
          <Input defaultValue="Sheepberry" />
          <Button focusInset isNeutral>
            Generate
          </Button>
        </InputGroup>
      </Field>
    </Grid.Col>
    <StyledCol sm={5}>
      <Field>
        <Label>Plant name generator</Label>
        <InputGroup isCompact>
          <Input isCompact defaultValue="Sheepberry" />
          <Button size="small" focusInset isNeutral>
            Generate
          </Button>
        </InputGroup>
      </Field>
    </StyledCol>
  </Grid.Row>
);

export default Example;
