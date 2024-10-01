/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Table } from '@zendeskgarden/react-tables';

const StyledContainer = styled.div`
  overflow-x: auto;
  color-scheme: only ${p => p.theme.colors.base};
`;

interface IRowData {
  id: string;
  subject: string;
  requester: string;
  type: string;
}

type Direction = 'asc' | 'desc' | undefined;

const rowData: IRowData[] = Array.from(Array(10)).map((row, index) => ({
  id: `row-${index}`,
  subject: `Custom ticket view ${index + 1}`,
  requester: index % 2 === 0 ? 'John Smith' : 'Jane Doe',
  type: index % 3 === 0 ? 'Ticket' : 'Incident'
}));

const sortData = (tableData: IRowData[], requesterSort: Direction, typeSort: Direction) => {
  if (!requesterSort && !typeSort) {
    return tableData;
  }

  let field: 'requester' | 'type';
  let sortValue: Direction;

  if (requesterSort) {
    field = 'requester';
    sortValue = requesterSort;
  } else {
    field = 'type';
    sortValue = typeSort;
  }

  return tableData.sort((a, b) => {
    const aValue = a[field];
    const bValue = b[field];

    if (aValue > bValue) {
      return sortValue === 'asc' ? 1 : -1;
    } else if (aValue < bValue) {
      return sortValue === 'asc' ? -1 : 1;
    }

    return 0;
  });
};

const Example = () => {
  const [data, setData] = useState(rowData);
  const [requesterSort, setRequesterSort] = useState<Direction>();
  const [typeSort, setTypeSort] = useState<Direction>();

  return (
    <StyledContainer>
      <Table style={{ minWidth: 500 }}>
        <Table.Head>
          <Table.HeaderRow>
            <Table.HeaderCell>Subject</Table.HeaderCell>
            <Table.SortableCell
              onClick={() => {
                if (requesterSort === 'asc') {
                  setRequesterSort('desc');
                } else if (requesterSort === 'desc') {
                  setRequesterSort(undefined);
                } else {
                  setRequesterSort('asc');
                }
                setTypeSort(undefined);
                setData(data);
              }}
              sort={requesterSort}
            >
              Requester
            </Table.SortableCell>
            <Table.SortableCell
              onClick={() => {
                if (typeSort === 'asc') {
                  setTypeSort('desc');
                } else if (typeSort === 'desc') {
                  setTypeSort(undefined);
                } else {
                  setTypeSort('asc');
                }
                setRequesterSort(undefined);
                setData(data);
              }}
              sort={typeSort}
            >
              Type
            </Table.SortableCell>
          </Table.HeaderRow>
        </Table.Head>
        <Table.Body>
          {sortData(data.slice(), requesterSort, typeSort).map(row => (
            <Table.Row key={row.id}>
              <Table.Cell>{row.subject}</Table.Cell>
              <Table.Cell>{row.requester}</Table.Cell>
              <Table.Cell>{row.type}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </StyledContainer>
  );
};

export default Example;
