/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Body, Cell, Head, HeaderCell, HeaderRow, Row, Table } from '@zendeskgarden/react-tables';
import { Pagination } from '@zendeskgarden/react-pagination';

const rowData: { [key: string]: string }[] = [];

for (let x = 0; x < 100; x++) {
  rowData.push({
    index: `row-${x}`,
    fruit: `Fruit #${x}`,
    sun: 'Full sun',
    soil: 'Well draining'
  });
}

const getPagedData = (data: any, currentPage: number, pageSize: number) => {
  const output = [];

  for (let x = (currentPage - 1) * pageSize; x < data.length && x < currentPage * pageSize; x++) {
    output.push(data[x]);
  }

  return output;
};

const Example = () => {
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div style={{ minWidth: 500 }}>
      <Table>
        <Head>
          <HeaderRow>
            <HeaderCell>Fruit</HeaderCell>
            <HeaderCell>Sun exposure</HeaderCell>
            <HeaderCell>Soil type</HeaderCell>
          </HeaderRow>
        </Head>
        <Body>
          {getPagedData(rowData, currentPage, pageSize).map(row => (
            <Row key={row.index}>
              <Cell>{row.fruit}</Cell>
              <Cell>{row.sun}</Cell>
              <Cell>{row.soil}</Cell>
            </Row>
          ))}
        </Body>
      </Table>
      <div style={{ height: 20 }} />
      <Pagination
        totalPages={Math.floor(rowData.length / pageSize)}
        currentPage={currentPage}
        onChange={setCurrentPage}
      />
    </div>
  );
};

export default Example;
