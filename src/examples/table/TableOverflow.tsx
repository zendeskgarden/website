/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Dropdown, Trigger, Menu, Item } from '@zendeskgarden/react-dropdowns';
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

const OverflowMenu = () => (
  <Dropdown>
    <Trigger>
      <OverflowButton aria-label="Row actions" />
    </Trigger>
    <Menu
      placement="bottom-end"
      popperModifiers={{
        preventOverflow: {
          boundariesElement: 'viewport'
        },
        flip: {
          enabled: false
        },
        offset: {
          fn: data => {
            /**
             * Ensure correct placement relative to trigger
             **/
            data.offsets.popper.top -= 2;

            return data;
          }
        }
      }}
    >
      <Item value="item-1">Edit</Item>
      <Item value="item-2">Delete</Item>
    </Menu>
  </Dropdown>
);

const Example = () => (
  <div style={{ minWidth: 500 }}>
    <Table>
      <Head>
        <HeaderRow>
          <HeaderCell>Fruit type</HeaderCell>
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
