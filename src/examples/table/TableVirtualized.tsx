/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { scrollbarSize } from 'dom-helpers';
import { FixedSizeList } from 'react-window';
import { Table } from '@zendeskgarden/react-tables';

const SCROLLBAR_SIZE = scrollbarSize();

const StyledSpacerCell = styled(Table.HeaderCell)`
  padding: 0;
  width: ${SCROLLBAR_SIZE}px;
`;

interface IRow {
  id: number;
  fruit: string;
  sun: string;
  soil: string;
}

const rowData: IRow[] = Array.from(Array(100000)).map((row, index) => ({
  id: index,
  fruit: `Fruit #${index + 1}`,
  sun: 'Full sun',
  soil: 'Well draining'
}));

const ScrollableTable = styled(Table).attrs({ role: 'presentation' })`
  /* stylelint-disable-next-line */
  display: block !important;
  color-scheme: only ${p => p.theme.colors.base};
`;

const ScrollableHead = styled(Table.Head)`
  display: block;
`;

const ScrollableHeaderRow = styled(Table.HeaderRow).attrs({ role: 'row' })`
  /* stylelint-disable-next-line */
  display: table !important;
  width: 100%;
  table-layout: fixed;
`;

const ScrollableBody = styled(Table.Body)`
  /* stylelint-disable-next-line declaration-no-important */
  display: block !important;
`;

const ScrollableRow = styled(Table.Row).attrs({ role: 'row' })`
  /* stylelint-disable-next-line declaration-no-important */
  display: table !important;
  table-layout: fixed;
`;

const Example = () => (
  <div role="grid" aria-rowcount={rowData.length} aria-colcount={4}>
    <ScrollableTable>
      <ScrollableHead>
        <ScrollableHeaderRow>
          <Table.HeaderCell role="columnheader">Fruit</Table.HeaderCell>
          <Table.HeaderCell role="columnheader">Sun exposure</Table.HeaderCell>
          <Table.HeaderCell role="columnheader">Soil type</Table.HeaderCell>
          <StyledSpacerCell aria-hidden />
        </ScrollableHeaderRow>
      </ScrollableHead>
    </ScrollableTable>
    <FixedSizeList
      height={500}
      itemCount={rowData.length}
      itemSize={40}
      width="100%"
      outerElementType={ScrollableTable}
      innerElementType={ScrollableBody}
    >
      {({ index, style }) => (
        <ScrollableRow key={rowData[index].id} style={style} aria-rowindex={index + 1}>
          <Table.Cell role="cell" isTruncated>
            {rowData[index].fruit}
          </Table.Cell>
          <Table.Cell role="cell" isTruncated>
            {rowData[index].sun}
          </Table.Cell>
          <Table.Cell role="cell" isTruncated>
            {rowData[index].soil}
          </Table.Cell>
        </ScrollableRow>
      )}
    </FixedSizeList>
  </div>
);

export default Example;
