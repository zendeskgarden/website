/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import getScrollbarSize from 'dom-helpers/scrollbarSize';
import { FixedSizeList } from 'react-window';
import { Table, Head, HeaderRow, HeaderCell, Body, Row, Cell } from '@zendeskgarden/react-tables';

const SCROLLBAR_SIZE = getScrollbarSize();

const StyledSpacerCell = styled(HeaderCell)`
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
`;

const ScrollableHead = styled(Head)`
  display: block;
`;

const ScrollableHeaderRow = styled(HeaderRow).attrs({ role: 'row' })`
  /* stylelint-disable-next-line */
  display: table !important;
  width: 100%;
  table-layout: fixed;
`;

const ScrollableHeaderCell = styled(HeaderCell).attrs({ role: 'columnheader' })``;

const ScrollableBody = styled(Body)`
  /* stylelint-disable-next-line */
  display: block !important;
`;

const ScrollableRow = styled(Row).attrs({ role: 'row' })`
  /* stylelint-disable-next-line */
  display: table !important;
  table-layout: fixed;
`;

const ScrollableCell = styled(Cell).attrs({ role: 'cell' })``;

const Example = () => (
  <div role="grid" aria-rowcount={rowData.length} aria-colcount={4}>
    <ScrollableTable>
      <ScrollableHead>
        <ScrollableHeaderRow>
          <ScrollableHeaderCell>Fruit</ScrollableHeaderCell>
          <ScrollableHeaderCell>Sun exposure</ScrollableHeaderCell>
          <ScrollableHeaderCell>Soil type</ScrollableHeaderCell>
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
          <ScrollableCell isTruncated>{rowData[index].fruit}</ScrollableCell>
          <ScrollableCell isTruncated>{rowData[index].sun}</ScrollableCell>
          <ScrollableCell isTruncated>{rowData[index].soil}</ScrollableCell>
        </ScrollableRow>
      )}
    </FixedSizeList>
  </div>
);

export default Example;
