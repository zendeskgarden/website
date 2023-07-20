/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { Col, Row } from '@zendeskgarden/react-grid';
import { Combobox, Field, Label, Option } from '@zendeskgarden/react-dropdowns.next';

const StyledCol = styled(Col)`
  ${p => mediaQuery('down', 'xs', p.theme)} {
    margin-top: ${p => p.theme.space.sm};
  }
`;

const StyledRow = styled(Row)`
  margin-top: ${p => p.theme.space.md};
`;

const Example = () => (
  <>
    <Row justifyContent="center">
      <Col sm={5}>
        <Field>
          <Label>Tree</Label>
          <Combobox>
            <Option value="Douglas fir" />
            <Option value="Redwood" />
            <Option value="Sequoia" isSelected />
          </Combobox>
        </Field>
      </Col>
      <StyledCol sm={5}>
        <Field>
          <Label>Tree</Label>
          <Combobox isCompact>
            <Option value="Crape myrtle" isSelected />
            <Option value="Hydrangea" />
            <Option value="Japanese maple" />
          </Combobox>
        </Field>
      </StyledCol>
    </Row>
    <StyledRow justifyContent="center">
      <Col sm={5}>
        <Field>
          <Label>Trees</Label>
          <Combobox isMultiselectable maxHeight="76px">
            <Option value="Douglas fir" isSelected />
            <Option value="Redwood" isSelected />
            <Option value="Sequoia" isSelected />
          </Combobox>
        </Field>
      </Col>
      <StyledCol sm={5}>
        <Field>
          <Label>Trees</Label>
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
