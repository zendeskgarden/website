/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { Datepicker } from '@zendeskgarden/react-datepickers';
import { Field, Label, Input } from '@zendeskgarden/react-forms';
import { Row, Col } from '@zendeskgarden/react-grid';

const StyledCol = styled(Col)`
  ${p => mediaQuery('down', 'xs', p.theme)} {
    margin-top: ${p => p.theme.space.sm};
  }
`;

const Example = () => {
  const [state, setState] = useState(new Date());

  return (
    <Row justifyContent="center">
      <Col sm={5}>
        <Field>
          <Label>Default</Label>
          <Datepicker value={state} onChange={setState}>
            <Input />
          </Datepicker>
        </Field>
      </Col>
      <StyledCol sm={5}>
        <Field>
          <Label>Compact</Label>
          <Datepicker value={state} onChange={setState} isCompact>
            <Input isCompact />
          </Datepicker>
        </Field>
      </StyledCol>
    </Row>
  );
};

export default Example;
