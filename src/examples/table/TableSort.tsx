/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import {
  Body,
  Cell,
  Head,
  HeaderCell,
  HeaderRow,
  Row,
  SortableCell,
  Table
} from '@zendeskgarden/react-tables';

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
    <div style={{ minWidth: 500 }}>
      <Table>
        <Head>
          <HeaderRow>
            <HeaderCell>Subject</HeaderCell>
            <SortableCell
              onClick={() => {
                if (requesterSort === 'asc') {
                  setData(data);
                  setRequesterSort('desc');
                  setTypeSort(undefined);
                } else if (requesterSort === 'desc') {
                  setData(data);
                  setRequesterSort(undefined);
                  setTypeSort(undefined);
                } else {
                  setData(data);
                  setRequesterSort('asc');
                  setTypeSort(undefined);
                }
              }}
              sort={requesterSort}
            >
              Requester
            </SortableCell>
            <SortableCell
              onClick={() => {
                if (typeSort === 'asc') {
                  setData(data);
                  setRequesterSort(undefined);
                  setTypeSort('desc');
                } else if (typeSort === 'desc') {
                  setData(data);
                  setRequesterSort(undefined);
                  setTypeSort(undefined);
                } else {
                  setData(data);
                  setRequesterSort(undefined);
                  setTypeSort('asc');
                }
              }}
              sort={typeSort}
            >
              Type
            </SortableCell>
          </HeaderRow>
        </Head>
        <Body>
          {sortData(data.slice(), requesterSort, typeSort).map(row => (
            <Row key={row.id}>
              <Cell>{row.subject}</Cell>
              <Cell>{row.requester}</Cell>
              <Cell>{row.type}</Cell>
            </Row>
          ))}
        </Body>
      </Table>
    </div>
  );
};

export default Example;
