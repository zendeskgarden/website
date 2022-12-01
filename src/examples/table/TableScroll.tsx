/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { getColor } from '@zendeskgarden/react-theming';
import { Body, Cell, Head, HeaderCell, HeaderRow, Row, Table } from '@zendeskgarden/react-tables';

const StyledStickyHead = styled(Head)`
  position: sticky;
  top: 0;
  box-shadow: ${props => {
    const boxShadow = props.theme.shadows.sm(getColor('neutralHue', 200, props.theme) as string);

    return `${boxShadow.replace('2px', '1px')}`;
  }};
  background-color: ${props => props.theme.colors.background};
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
  <div style={{ maxHeight: 500, overflowY: 'auto' }}>
    <Table>
      <StyledStickyHead>
        <HeaderRow>
          <HeaderCell>Fruit</HeaderCell>
          <HeaderCell>Sun exposure</HeaderCell>
          <HeaderCell>Soil type</HeaderCell>
        </HeaderRow>
      </StyledStickyHead>
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
);

export default Example;
