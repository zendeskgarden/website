/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Table } from '@zendeskgarden/react-tables';

const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

const Example = () => (
  <div style={{ overflowX: 'auto' }}>
    <Table style={{ minWidth: 500 }}>
      <Table.Head>
        <Table.HeaderRow>
          <Table.HeaderCell>Wrapping content</Table.HeaderCell>
          <Table.HeaderCell>Truncated content</Table.HeaderCell>
        </Table.HeaderRow>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>{content}</Table.Cell>
          <Table.Cell isTruncated>{content}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>{content}</Table.Cell>
          <Table.Cell isTruncated>{content}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>{content}</Table.Cell>
          <Table.Cell isTruncated>{content}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
);

export default Example;
