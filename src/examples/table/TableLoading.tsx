/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Table } from '@zendeskgarden/react-tables';
import { Skeleton } from '@zendeskgarden/react-loaders';

const Example = () => (
  <div style={{ overflowX: 'auto' }}>
    <Table style={{ minWidth: 500 }}>
      <Table.Head>
        <Table.HeaderRow>
          <Table.HeaderCell>Fruit</Table.HeaderCell>
          <Table.HeaderCell>Sun exposure</Table.HeaderCell>
          <Table.HeaderCell>Soil</Table.HeaderCell>
        </Table.HeaderRow>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Skeleton />
          </Table.Cell>
          <Table.Cell>
            <Skeleton />
          </Table.Cell>
          <Table.Cell>
            <Skeleton />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Skeleton />
          </Table.Cell>
          <Table.Cell>
            <Skeleton />
          </Table.Cell>
          <Table.Cell>
            <Skeleton />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Skeleton />
          </Table.Cell>
          <Table.Cell>
            <Skeleton />
          </Table.Cell>
          <Table.Cell>
            <Skeleton />
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
);

export default Example;
