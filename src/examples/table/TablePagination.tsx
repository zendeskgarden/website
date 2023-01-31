/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Body, Cell, Head, HeaderCell, HeaderRow, Row, Table } from '@zendeskgarden/react-tables';
import { Pagination } from '@zendeskgarden/react-pagination';

const StyledTable = styled(Table)`
  margin-bottom: ${p => p.theme.space.md};
  min-width: 500px;
`;

interface IRow {
  fruit: string;
  sun: string;
  soil: string;
}

const rowData: IRow[] = Array.from(Array(100)).map((row, index) => ({
  fruit: `Fruit #${index}`,
  sun: 'Full sun',
  soil: 'Well draining'
}));

const createRow = (row: IRow, index: number) => (
  <Row key={index}>
    <Cell>{row.fruit}</Cell>
    <Cell>{row.sun}</Cell>
    <Cell>{row.soil}</Cell>
  </Row>
);

const Example = () => {
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div style={{ overflowX: 'auto' }}>
      <StyledTable>
        <Head>
          <HeaderRow>
            <HeaderCell>Fruit</HeaderCell>
            <HeaderCell>Sun exposure</HeaderCell>
            <HeaderCell>Soil type</HeaderCell>
          </HeaderRow>
        </Head>
        <Body>
          {currentPage === 1
            ? rowData.slice(currentPage - 1, pageSize).map(createRow)
            : rowData
                .slice(currentPage * pageSize - pageSize, currentPage * pageSize)
                .map(createRow)}
        </Body>
      </StyledTable>
      <nav aria-label="table example pagination">
        <Pagination
          totalPages={rowData.length / pageSize}
          currentPage={currentPage}
          onChange={setCurrentPage}
        />
      </nav>
    </div>
  );
};

export default Example;
