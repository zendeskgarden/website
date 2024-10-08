/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { CursorPagination } from '@zendeskgarden/react-pagination';

const Example = () => {
  const [cursor, setCursor] = useState(0);

  const pages = [0, 1, 2, 3, 4];

  const onFirst = () => {
    setCursor(0);
  };

  const onLast = () => {
    setCursor(pages.length - 1);
  };

  const onNext = () => {
    if (cursor < pages.length - 1) {
      setCursor(cursor + 1);
    }
  };

  const onPrevious = () => {
    if (cursor > 0) {
      setCursor(cursor - 1);
    }
  };

  return (
    <CursorPagination aria-label="Cursor pagination">
      <CursorPagination.First onClick={onFirst} disabled={cursor === 0}>
        First
      </CursorPagination.First>
      <CursorPagination.Previous onClick={onPrevious} disabled={cursor === 0}>
        Previous
      </CursorPagination.Previous>
      <CursorPagination.Next onClick={onNext} disabled={cursor === pages.length - 1}>
        Next
      </CursorPagination.Next>
      <CursorPagination.Last onClick={onLast} disabled={cursor === pages.length - 1}>
        Last
      </CursorPagination.Last>
    </CursorPagination>
  );
};

export default Example;
