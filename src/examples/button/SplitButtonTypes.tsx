/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Row, Col } from '@zendeskgarden/react-grid';
import { SplitButton, Button, ChevronButton } from '@zendeskgarden/react-buttons';
import { Dropdown, Trigger, Menu, Item } from '@zendeskgarden/react-dropdowns';

const StyledCol = styled(Col)`
  @media (max-width: ${p => p.theme.breakpoints.sm}) {
    margin-top: ${p => p.theme.space.sm};
  }
`;

const Example = () => (
  <Row alignItems="center">
    <Col textAlign="center" sm={5}>
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
    <StyledCol textAlign="center" sm={5}>
      <SplitButton>
        <Button isPrimary>Harvest</Button>
        <Dropdown>
          <Trigger>
            <ChevronButton isPrimary />
          </Trigger>
          <Menu>
            <Item value="prune">Prune</Item>
            <Item value="water">Water</Item>
            <Item value="fertilize">Fertilize</Item>
          </Menu>
        </Dropdown>
      </SplitButton>
    </StyledCol>
  </Row>
);

export default Example;