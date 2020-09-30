/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Body, Cell, Head, HeaderCell, HeaderRow, Row, Table } from '@zendeskgarden/react-tables';

interface IRowData {
  index: number;
  fruit: string;
  sun: string;
  soil: string;
}

const rowData: IRowData[] = [];

for (let x = 0; x < 10; x++) {
  rowData.push({
    index: x,
    fruit: 'Strawberries',
    sun: 'Full sun',
    soil: 'Well draining'
  });
}

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
        {rowData.map(data => (
          <Row key={data.index} isStriped={data.index % 2 === 0}>
            <Cell>{data.fruit}</Cell>
            <Cell>{data.sun}</Cell>
            <Cell>{data.soil}</Cell>
          </Row>
        ))}
      </Body>
    </Table>
  </div>
);

export default Example;
