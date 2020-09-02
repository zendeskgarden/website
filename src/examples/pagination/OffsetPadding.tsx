/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Pagination } from '@zendeskgarden/react-pagination';
import { Row, Col } from '@zendeskgarden/react-grid';

const StyledCol = styled(Col)`
  margin-top: ${p => p.theme.space.sm};
`;

const Example = () => {
  const [page, setPage] = useState(0);

  return (
    <Row alignItems="center">
      <Col alignSelf="center">
        <Pagination totalPages={20} pagePadding={1} currentPage={page} onChange={setPage} />
      </Col>
      <StyledCol alignSelf="center">
        <Pagination totalPages={20} pagePadding={3} currentPage={page} onChange={setPage} />
      </StyledCol>
    </Row>
  );
};

export default Example;
