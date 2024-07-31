/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { createContext, useContext } from 'react';
import styled from 'styled-components';
import { Table } from '@zendeskgarden/react-tables';

const TableHeadContext = createContext(false);

export const StyledTable = styled(Table).attrs({ isReadOnly: true })`
  margin-bottom: ${p => p.theme.space.xl};
`;

export const TBody = Table.Body;
export const TH = Table.HeaderCell;
export const TD = Table.Cell;

export const THead: React.FC = props => {
  return (
    <TableHeadContext.Provider value>
      <Table.Head {...props} />
    </TableHeadContext.Provider>
  );
};

/**
 * Markdown doesn't differentiate between header and body rows.
 * This renders the correct component based on the parent element.
 */
export const TR: React.FC = props => {
  const isWithinHead = useContext(TableHeadContext);

  if (isWithinHead) {
    return <Table.HeaderRow {...props} />;
  }

  return <Table.Row {...props} />;
};
