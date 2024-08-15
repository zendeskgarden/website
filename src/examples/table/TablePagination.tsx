/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Table } from '@zendeskgarden/react-tables';
import { OffsetPagination } from '@zendeskgarden/react-pagination';

const StyledTable = styled(Table)`
  margin-bottom: ${p => p.theme.space.md};
  min-width: 500px;
`;

const StyledContainer = styled.div`
  overflow-x: auto;
  color-scheme: only ${p => p.theme.colors.base};
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
  <Table.Row key={index}>
    <Table.Cell>{row.fruit}</Table.Cell>
    <Table.Cell>{row.sun}</Table.Cell>
    <Table.Cell>{row.soil}</Table.Cell>
  </Table.Row>
);

const Example = () => {
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <StyledContainer>
      <StyledTable>
        <Table.Head>
          <Table.HeaderRow>
            <Table.HeaderCell>Fruit</Table.HeaderCell>
            <Table.HeaderCell>Sun exposure</Table.HeaderCell>
            <Table.HeaderCell>Soil type</Table.HeaderCell>
          </Table.HeaderRow>
        </Table.Head>
        <Table.Body>
          {currentPage === 1
            ? rowData.slice(currentPage - 1, pageSize).map(createRow)
            : rowData
                .slice(currentPage * pageSize - pageSize, currentPage * pageSize)
                .map(createRow)}
        </Table.Body>
      </StyledTable>
      <nav aria-label="table example pagination">
        <OffsetPagination
          totalPages={rowData.length / pageSize}
          currentPage={currentPage}
          onChange={setCurrentPage}
        />
      </nav>
    </StyledContainer>
  );
};

export default Example;
