/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback, useState } from 'react';
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

const Example = () => {
  const [value, setValue] = useState('Soil');

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <Row justifyContent="center">
      <Col sm={5}>
        <Field>
          <Label>Default</Label>
          <InputGroup>
            <Input value={value} onChange={onChange} />
            <Button focusInset>Copy</Button>
          </InputGroup>
        </Field>
      </Col>
      <StyledCol sm={5}>
        <Field>
          <Label>Compact</Label>
          <InputGroup isCompact>
            <Input isCompact value={value} onChange={onChange} />
            <Button size="small" focusInset>
              Copy
            </Button>
          </InputGroup>
        </Field>
      </StyledCol>
    </Row>
  );
};

export default Example;
