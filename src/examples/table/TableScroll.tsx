/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Body, Cell, Head, HeaderCell, HeaderRow, Row, Table } from '@zendeskgarden/react-tables';

interface IRowData {
  index: string;
  fruit: string;
  sun: string;
  soil: string;
}

const rowData: IRowData[] = [];

for (let x = 0; x < 100; x++) {
  rowData.push({
    index: `row-${x}`,
    fruit: `Fruit #${x}`,
    sun: 'Full sun',
    soil: 'Well draining'
  });
}

const Example = () => (
  <div style={{ minWidth: 500 }}>
    <Table>
      <Head>
        <HeaderRow>
          <HeaderCell>Fruit</HeaderCell>
          <HeaderCell>Sun exposure</HeaderCell>
          <HeaderCell>Soil type</HeaderCell>
        </HeaderRow>
      </Head>
    </Table>
    <div style={{ maxHeight: 500, overflowY: 'auto' }}>
      <Table>
        <Body>
          {rowData.map(data => (
            <Row key={data.index}>
              <Cell>{data.fruit}</Cell>
              <Cell>{data.sun}</Cell>
              <Cell>{data.soil}</Cell>
            </Row>
          ))}
        </Body>
      </Table>
    </div>
  </div>
);

export default Example;
