/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import {
  Dropdown,
  Field,
  Menu,
  Item,
  Select,
  Label,
  Message
} from '@zendeskgarden/react-dropdowns';

const StyledField = styled(Field)`
  * {
    /* stylelint-disable-next-line declaration-no-important */
    appearance: none !important;
  }
`;

const Example = () => {
  return (
    <Grid>
      <Row>
        <Col>
          <Dropdown selectedItem="success">
            <StyledField>
              <Label>Success</Label>
              <Select validation="success">Veggies es bonus</Select>
              <Message validation="success">Success validation message</Message>
            </StyledField>
            <Menu>
              <Item disabled>Mock dropdown with no selection logic</Item>
            </Menu>
          </Dropdown>
        </Col>
        <Col>
          <Dropdown selectedItem="warning">
            <StyledField>
              <Label>Warning</Label>
              <Select validation="warning">Veggies es bonus</Select>
              <Message validation="warning">Warning validation message</Message>
            </StyledField>
            <Menu>
              <Item disabled>Mock dropdown with no selection logic</Item>
            </Menu>
          </Dropdown>
        </Col>
        <Col>
          <Dropdown selectedItem="error">
            <StyledField>
              <Label>Error</Label>
              <Select validation="error">Veggies es bonus</Select>
              <Message validation="error">Error validation message</Message>
            </StyledField>
            <Menu>
              <Item disabled>Mock dropdown with no selection logic</Item>
            </Menu>
          </Dropdown>
        </Col>
      </Row>
    </Grid>
  );
};

export default Example;
