/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
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

const Example = () => {
  return (
    <Grid>
      <Row>
        <Col>
          <Dropdown selectedItem="success">
            <Field>
              <Label>Plants</Label>
              <Select validation="success">Cactus</Select>
              <Message validation="success">Cactus was successfully submitted</Message>
            </Field>
            <Menu>
              <Item disabled>Mock dropdown with no selection logic</Item>
            </Menu>
          </Dropdown>
        </Col>
        <Col>
          <Dropdown selectedItem="warning">
            <Field>
              <Label>Plants</Label>
              <Select validation="warning">Cactus</Select>
              <Message validation="warning">A cactus is a very dry plant</Message>
            </Field>
            <Menu>
              <Item disabled>Mock dropdown with no selection logic</Item>
            </Menu>
          </Dropdown>
        </Col>
        <Col>
          <Dropdown selectedItem="error">
            <Field>
              <Label>Plants</Label>
              <Select validation="error">Cactus</Select>
              <Message validation="error">Cactus is currently unavailable</Message>
            </Field>
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
