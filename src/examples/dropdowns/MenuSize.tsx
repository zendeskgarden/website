/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Dropdown, Menu, Item, Trigger } from '@zendeskgarden/react-dropdowns';
import { Button } from '@zendeskgarden/react-buttons';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

const Example = () => (
  <Grid>
    <Row>
      <Col textAlign="center">
        <Dropdown onSelect={item => alert(`You planted a ${item}`)}>
          <Trigger>
            <Button>Default</Button>
          </Trigger>
          <Menu>
            <Item value="cactus">Cactus</Item>
            <Item value="flower">Flower</Item>
            <Item value="succulent">Succulent</Item>
          </Menu>
        </Dropdown>
      </Col>
      <Col textAlign="center">
        <Dropdown onSelect={item => alert(`You planted a ${item}`)}>
          <Trigger>
            <Button size="small">Compact</Button>
          </Trigger>
          <Menu isCompact>
            <Item value="cactus">Cactus</Item>
            <Item value="flower">Flower</Item>
            <Item value="succulent">Succulent</Item>
          </Menu>
        </Dropdown>
      </Col>
    </Row>
  </Grid>
);

export default Example;
