/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Body, Cell, Head, HeaderCell, HeaderRow, Row, Table } from '@zendeskgarden/react-tables';

const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

const Example = () => (
  <div style={{ minWidth: 500 }}>
    <Table>
      <Head>
        <HeaderRow>
          <HeaderCell>Wrapping content</HeaderCell>
          <HeaderCell>Truncated content</HeaderCell>
        </HeaderRow>
      </Head>
      <Body>
        <Row>
          <Cell>{content}</Cell>
          <Cell isTruncated>{content}</Cell>
        </Row>
        <Row>
          <Cell>{content}</Cell>
          <Cell isTruncated>{content}</Cell>
        </Row>
        <Row>
          <Cell>{content}</Cell>
          <Cell isTruncated>{content}</Cell>
        </Row>
      </Body>
    </Table>
  </div>
);

export default Example;
