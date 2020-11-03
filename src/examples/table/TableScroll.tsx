/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import getScrollbarSize from 'dom-helpers/scrollbarSize';
import { Body, Cell, Head, HeaderCell, HeaderRow, Row, Table } from '@zendeskgarden/react-tables';

const SCROLLBAR_SIZE = getScrollbarSize();

const StyledSpacerCell = styled(HeaderCell)`
  padding: 0;
  width: ${SCROLLBAR_SIZE}px;
`;

interface IRow {
  index: number;
  fruit: string;
  sun: string;
  soil: string;
}

const rowData: IRow[] = Array.from(Array(100)).map((row, index) => ({
  index,
  fruit: `Fruit #${index}`,
  sun: 'Full sun',
  soil: 'Well draining'
}));

const Example = () => (
  <div style={{ overflowX: 'auto' }}>
    <Table style={{ minWidth: 500 }}>
      <Head>
        <HeaderRow>
          <HeaderCell>Fruit</HeaderCell>
          <HeaderCell>Sun exposure</HeaderCell>
          <HeaderCell>Soil type</HeaderCell>
          <StyledSpacerCell aria-hidden={true} />
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
