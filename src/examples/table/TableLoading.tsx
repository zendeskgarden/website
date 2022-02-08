/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Body, Cell, Head, HeaderCell, HeaderRow, Row, Table } from '@zendeskgarden/react-tables';
import { Skeleton } from '@zendeskgarden/react-loaders';

const Example = () => (
  <div style={{ overflowX: 'auto' }}>
    <Table style={{ minWidth: 500 }}>
      <Head>
        <HeaderRow>
          <HeaderCell>Fruit</HeaderCell>
          <HeaderCell>Sun exposure</HeaderCell>
          <HeaderCell>Soil</HeaderCell>
        </HeaderRow>
      </Head>
      <Body>
        <Row>
          <Cell>
            <Skeleton />
          </Cell>
          <Cell>
            <Skeleton />
          </Cell>
          <Cell>
            <Skeleton />
          </Cell>
        </Row>
        <Row>
          <Cell>
            <Skeleton />
          </Cell>
          <Cell>
            <Skeleton />
          </Cell>
          <Cell>
            <Skeleton />
          </Cell>
        </Row>
        <Row>
          <Cell>
            <Skeleton />
          </Cell>
          <Cell>
            <Skeleton />
          </Cell>
          <Cell>
            <Skeleton />
          </Cell>
        </Row>
      </Body>
    </Table>
  </div>
);

export default Example;
