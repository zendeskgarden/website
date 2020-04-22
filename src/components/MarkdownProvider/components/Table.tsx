/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { createContext, useContext } from 'react';
import {
  Table as GardenTable,
  Head,
  Body,
  Row,
  HeaderRow,
  HeaderCell,
  Cell
} from '@zendeskgarden/react-tables';

const TableHeadContext = createContext(false);

export const Table = GardenTable;
export const TBody = Body;
export const TH = HeaderCell;
export const TD = Cell;

export const THead: React.FC = props => {
  return (
    <TableHeadContext.Provider value={true}>
      <Head {...props} />
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
    return <HeaderRow {...props} />;
  }

  return <Row {...props} />;
};
