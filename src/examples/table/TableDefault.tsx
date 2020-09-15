/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Body, Cell, Head, HeaderCell, HeaderRow, Row, Table } from '@zendeskgarden/react-tables';

const Example = () => (
  <div style={{ minWidth: 500 }}>
    <Table>
      <Head>
        <HeaderRow>
          <HeaderCell>Fruit type</HeaderCell>
          <HeaderCell>Sun exposure</HeaderCell>
          <HeaderCell>Soil type</HeaderCell>
        </HeaderRow>
      </Head>
      <Body>
        <Row>
          <Cell>Raspberries</Cell>
          <Cell>Partial shade</Cell>
          <Cell>Moist and slightly acidic</Cell>
        </Row>
        <Row>
          <Cell>Strawberries</Cell>
          <Cell>Full sun</Cell>
          <Cell>Medium moisture</Cell>
        </Row>
        <Row>
          <Cell>Grapes</Cell>
          <Cell>Full sun</Cell>
          <Cell>Rich and well draining</Cell>
        </Row>
      </Body>
    </Table>
  </div>
);

export default Example;
