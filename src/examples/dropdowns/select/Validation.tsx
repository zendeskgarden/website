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
import {
  Dropdown,
  Field,
  Menu,
  Item,
  Select,
  Label,
  Message
} from '@zendeskgarden/react-dropdowns';

const StyledCol = styled(Col)`
  ${p => mediaQuery('down', 'xs', p.theme)} {
    margin-top: ${p => p.theme.space.sm};
  }
`;

const Example = () => (
  <Row>
    <Col sm>
      <Dropdown selectedItem="success">
        <Field>
          <Label>Plant</Label>
          <Select validation="success">Cactus</Select>
          <Message validation="success">Cactus was successfully submitted</Message>
        </Field>
        <Menu>
          <Item disabled>Mock dropdown with no selection logic</Item>
        </Menu>
      </Dropdown>
    </Col>
    <StyledCol sm>
      <Dropdown selectedItem="warning">
        <Field>
          <Label>Plant</Label>
          <Select validation="warning">Cactus</Select>
          <Message validation="warning">A cactus is a very dry plant</Message>
        </Field>
        <Menu>
          <Item disabled>Mock dropdown with no selection logic</Item>
        </Menu>
      </Dropdown>
    </StyledCol>
    <StyledCol sm>
      <Dropdown selectedItem="error">
        <Field>
          <Label>Plant</Label>
          <Select validation="error">Cactus</Select>
          <Message validation="error">Cactus is currently unavailable</Message>
        </Field>
        <Menu>
          <Item disabled>Mock dropdown with no selection logic</Item>
        </Menu>
      </Dropdown>
    </StyledCol>
  </Row>
);

export default Example;
