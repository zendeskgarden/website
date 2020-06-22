/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { SplitButton, Button, ChevronButton } from '@zendeskgarden/react-buttons';
import { Dropdown, Trigger, Menu, Item } from '@zendeskgarden/react-dropdowns';

const Example = () => (
  <Row>
    <Col>
      <SplitButton>
        <Button size="small">Harvest</Button>
        <Dropdown>
          <Trigger>
            <ChevronButton size="small" />
          </Trigger>
          <Menu>
            <Item value="prune">Prune</Item>
            <Item value="water">Water</Item>
            <Item value="fertilize">Fertilize</Item>
          </Menu>
        </Dropdown>
      </SplitButton>
    </Col>
    <Col textAlign="center">
      <SplitButton>
        <Button>Harvest</Button>
        <Dropdown>
          <Trigger>
            <ChevronButton />
          </Trigger>
          <Menu>
            <Item value="prune">Prune</Item>
            <Item value="water">Water</Item>
            <Item value="fertilize">Fertilize</Item>
          </Menu>
        </Dropdown>
      </SplitButton>
    </Col>
    <Col textAlign="center">
      <SplitButton>
        <Button size="large">Harvest</Button>
        <Dropdown>
          <Trigger>
            <ChevronButton size="large" />
          </Trigger>
          <Menu>
            <Item value="prune">Prune</Item>
            <Item value="water">Water</Item>
            <Item value="fertilize">Fertilize</Item>
          </Menu>
        </Dropdown>
      </SplitButton>
    </Col>
  </Row>
);

export default Example;
