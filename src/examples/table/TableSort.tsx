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

const data: any = [];

for (let x = 0; x < 10; x++) {
  data.push({
    id: `row-${x}`,
    subject: `Custom ticket view ${x + 1}`,
    requester: x % 2 === 0 ? 'John Smith' : 'Jane Doe',
    type: x % 3 === 0 ? 'Ticket' : 'Incident'
  });
}

const sortData = (tableData: any, requesterSort: any, typeSort: any) => {
  if (!requesterSort && !typeSort) {
    return tableData;
  }

  let field: string;
  let sortValue: string;

  if (requesterSort) {
    field = 'requester';
    sortValue = requesterSort;
  } else {
    field = 'type';
    sortValue = typeSort;
  }

  return tableData.sort((a: any, b: any) => {
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
  const [state, setState] = useState({ data, requesterSort: 'asc', typeSort: undefined });

  return (
    <div style={{ minWidth: 500 }}>
      <Table>
        <Head>
          <HeaderRow>
            <HeaderCell>Subject</HeaderCell>
            <SortableCell
              onClick={() => {
                const { requesterSort } = state;

                if (requesterSort === 'asc') {
                  setState({ data, requesterSort: 'desc', typeSort: undefined });
                } else if (requesterSort === 'desc') {
                  setState({ data, requesterSort: undefined, typeSort: undefined });
                } else {
                  setState({ data, requesterSort: 'asc', typeSort: undefined });
                }
              }}
              sort={state.requesterSort}
            >
              Requester
            </SortableCell>
            <SortableCell
              onClick={() => {
                const { typeSort } = state;

                if (typeSort === 'asc') {
                  setState({ data, typeSort: 'desc', requesterSort: undefined });
                } else if (typeSort === 'desc') {
                  setState({ data, typeSort: undefined, requesterSort: undefined });
                } else {
                  setState({ data, typeSort: 'asc', requesterSort: undefined });
                }
              }}
              sort={state.typeSort}
            >
              Type
            </SortableCell>
          </HeaderRow>
        </Head>
        <Body>
          {sortData(state.data.slice(), state.requesterSort, state.typeSort).map(row => (
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
