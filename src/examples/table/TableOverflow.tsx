/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ButtonHTMLAttributes } from 'react';
import { Menu, Item } from '@zendeskgarden/react-dropdowns';
import { Tooltip } from '@zendeskgarden/react-tooltips';
import { Table } from '@zendeskgarden/react-tables';

const TooltipOverflowButton = React.forwardRef(
  (props: ButtonHTMLAttributes<HTMLButtonElement>, ref: React.Ref<HTMLButtonElement>) => (
    <Tooltip content={props['aria-label']} placement="start">
      <Table.OverflowButton ref={ref} {...props} />
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
      <Table.Head>
        <Table.HeaderRow>
          <Table.HeaderCell>Fruit</Table.HeaderCell>
          <Table.HeaderCell>Sun exposure</Table.HeaderCell>
          <Table.HeaderCell>Soil type</Table.HeaderCell>
          <Table.HeaderCell hasOverflow>
            <OverflowMenu />
          </Table.HeaderCell>
        </Table.HeaderRow>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Raspberries</Table.Cell>
          <Table.Cell>Partial shade</Table.Cell>
          <Table.Cell>Moist and slightly acidic</Table.Cell>
          <Table.Cell hasOverflow>
            <OverflowMenu />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Strawberries</Table.Cell>
          <Table.Cell>Full sun</Table.Cell>
          <Table.Cell>Medium moisture</Table.Cell>
          <Table.Cell hasOverflow>
            <OverflowMenu />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Grapes</Table.Cell>
          <Table.Cell>Full sun</Table.Cell>
          <Table.Cell>Rich and well draining</Table.Cell>
          <Table.Cell hasOverflow>
            <OverflowMenu />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cherries</Table.Cell>
          <Table.Cell>Partial sun</Table.Cell>
          <Table.Cell>Rich and well draining</Table.Cell>
          <Table.Cell hasOverflow>
            <OverflowMenu />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Tomatoes</Table.Cell>
          <Table.Cell>Partial shade</Table.Cell>
          <Table.Cell>Well draining</Table.Cell>
          <Table.Cell hasOverflow>
            <OverflowMenu />
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
);

export default Example;
