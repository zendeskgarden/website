/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Anchor } from '@zendeskgarden/react-buttons';
import { Span } from '@zendeskgarden/react-typography';
import { Breadcrumb } from '@zendeskgarden/react-breadcrumbs';
import { Row, Col } from '@zendeskgarden/react-grid';

const Example = () => (
  <Row justifyContent="center">
    <Col size="auto">
      <Breadcrumb>
        <Anchor>Flowers</Anchor>
        <Anchor>Roses</Anchor>
        <Span>Floribunda</Span>
      </Breadcrumb>
    </Col>
  </Row>
);

export default Example;
