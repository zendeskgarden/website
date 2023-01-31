/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Pagination } from '@zendeskgarden/react-pagination';

const Example = () => {
  const [page, setPage] = useState(1);

  return (
    <nav aria-label="pagination example offset">
      <Pagination totalPages={6} currentPage={page} onChange={setPage} />
    </nav>
  );
};

export default Example;
