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
              <Label>Plants</Label>
              <Select validation="success">Cactus</Select>
              <Message validation="success">Cactus was successfully submitted</Message>
            </StyledField>
            <Menu>
              <Item disabled>Mock dropdown with no selection logic</Item>
            </Menu>
          </Dropdown>
        </Col>
        <Col>
          <Dropdown selectedItem="warning">
            <StyledField>
              <Label>Plants</Label>
              <Select validation="warning">Cactus</Select>
              <Message validation="warning">A cactus is a very dry plant</Message>
            </StyledField>
            <Menu>
              <Item disabled>Mock dropdown with no selection logic</Item>
            </Menu>
          </Dropdown>
        </Col>
        <Col>
          <Dropdown selectedItem="error">
            <StyledField>
              <Label>Plants</Label>
              <Select validation="error">Cactus</Select>
              <Message validation="error">Cactus is currently unavailable</Message>
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
