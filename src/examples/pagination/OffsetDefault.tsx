/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Pagination } from '@zendeskgarden/react-pagination';
import { Row, Col } from '@zendeskgarden/react-grid';

const Example = () => {
  const [page, setPage] = useState(0);

  return (
    <Row alignItems="center">
      <Col alignSelf="center">
        <Pagination totalPages={6} currentPage={page} onChange={newPage => setPage(newPage)} />
      </Col>
    </Row>
  );
};

export default Example;
