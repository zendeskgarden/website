/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Table } from '@zendeskgarden/react-tables';

const StyledContainer = styled.div`
  overflow-x: auto;
  color-scheme: only ${p => p.theme.colors.base};
`;

interface IRow {
  index: number;
  fruit: string;
  sun: string;
  soil: string;
}

const rowData: IRow[] = Array.from(Array(10)).map((row, index) => ({
  index,
  fruit: `Fruit #${index}`,
  sun: 'Full sun',
  soil: 'Well draining'
}));

const Example = () => (
  <StyledContainer>
    <Table style={{ minWidth: 500 }}>
      <Table.Head>
        <Table.HeaderRow>
          <Table.HeaderCell>Fruit</Table.HeaderCell>
          <Table.HeaderCell>Sun exposure</Table.HeaderCell>
          <Table.HeaderCell>Soil type</Table.HeaderCell>
        </Table.HeaderRow>
      </Table.Head>
      <Table.Body>
        {rowData.map(data => (
          <Table.Row key={data.index} isStriped={data.index % 2 === 0}>
            <Table.Cell>{data.fruit}</Table.Cell>
            <Table.Cell>{data.sun}</Table.Cell>
            <Table.Cell>{data.soil}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </StyledContainer>
);

export default Example;
