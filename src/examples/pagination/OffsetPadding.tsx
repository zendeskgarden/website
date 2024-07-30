/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { OffsetPagination } from '@zendeskgarden/react-pagination';

const Example = () => {
  const [page, setPage] = useState(10);

  return (
    <nav aria-label="pagination example padding">
      <OffsetPagination totalPages={20} pagePadding={0} currentPage={page} onChange={setPage} />
      <OffsetPagination
        totalPages={20}
        pagePadding={2}
        currentPage={page}
        onChange={setPage}
        style={{ marginTop: '16px' }}
      />
    </nav>
  );
};

export default Example;
