/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Row, Col } from '@zendeskgarden/react-grid';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { Field, Label, Input, InputGroup } from '@zendeskgarden/react-forms';
import { Button } from '@zendeskgarden/react-buttons';

const StyledCol = styled(Col)`
  ${p => mediaQuery('down', 'xs', p.theme)} {
    margin-top: ${p => p.theme.space.sm};
  }
`;

const Example = () => (
  <Row justifyContent="center">
    <Col sm={5}>
      <Field>
        <Label>Plant name generator</Label>
        <InputGroup>
          <Input defaultValue="Sheepberry" />
          <Button focusInset>Germinate</Button>
        </InputGroup>
      </Field>
    </Col>
    <StyledCol sm={5}>
      <Field>
        <Label>Plant name generator</Label>
        <InputGroup isCompact>
          <Input isCompact defaultValue="Sheepberry" />
          <Button size="small" focusInset>
            Germinate
          </Button>
        </InputGroup>
      </Field>
    </StyledCol>
  </Row>
);

export default Example;
