/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ButtonHTMLAttributes } from 'react';
import { Menu, Item } from '@zendeskgarden/react-dropdowns.next';
import { Tooltip } from '@zendeskgarden/react-tooltips';
import {
  Body,
  Cell,
  Head,
  HeaderCell,
  HeaderRow,
  OverflowButton,
  Row,
  Table
} from '@zendeskgarden/react-tables';

const TooltipOverflowButton = React.forwardRef(
  (props: ButtonHTMLAttributes<HTMLButtonElement>, ref: React.Ref<HTMLButtonElement>) => (
    <Tooltip content={props['aria-label']} placement="start">
      <OverflowButton ref={ref} {...props} />
    </Tooltip>
  )
);

const OverflowMenu = () => (
  <Menu
    button={props => <TooltipOverflowButton aria-label="Row actions" {...props} />}
    placement="bottom-end"
  >
    <Item value="item-1">Edit</Item>
    <Item value="item-2" type="danger">
      Delete
    </Item>
  </Menu>
);

const Example = () => (
  <div style={{ overflowX: 'auto' }}>
    <Table style={{ minWidth: 500 }}>
      <Head>
        <HeaderRow>
          <HeaderCell>Fruit</HeaderCell>
          <HeaderCell>Sun exposure</HeaderCell>
          <HeaderCell>Soil type</HeaderCell>
          <HeaderCell hasOverflow>
            <OverflowMenu />
          </HeaderCell>
        </HeaderRow>
      </Head>
      <Body>
        <Row>
          <Cell>Raspberries</Cell>
          <Cell>Partial shade</Cell>
          <Cell>Moist and slightly acidic</Cell>
          <Cell hasOverflow>
            <OverflowMenu />
          </Cell>
        </Row>
        <Row>
          <Cell>Strawberries</Cell>
          <Cell>Full sun</Cell>
          <Cell>Medium moisture</Cell>
          <Cell hasOverflow>
            <OverflowMenu />
          </Cell>
        </Row>
        <Row>
          <Cell>Grapes</Cell>
          <Cell>Full sun</Cell>
          <Cell>Rich and well draining</Cell>
          <Cell hasOverflow>
            <OverflowMenu />
          </Cell>
        </Row>
        <Row>
          <Cell>Cherries</Cell>
          <Cell>Partial sun</Cell>
          <Cell>Rich and well draining</Cell>
          <Cell hasOverflow>
            <OverflowMenu />
          </Cell>
        </Row>
        <Row>
          <Cell>Tomatoes</Cell>
          <Cell>Partial shade</Cell>
          <Cell>Well draining</Cell>
          <Cell hasOverflow>
            <OverflowMenu />
          </Cell>
        </Row>
      </Body>
    </Table>
  </div>
);

export default Example;
