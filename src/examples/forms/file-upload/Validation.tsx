/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { File } from '@zendeskgarden/react-forms';
import { Row, Col } from '@zendeskgarden/react-grid';

const Example = () => (
  <Row justifyContent="center">
    <Col sm={5}>
      <File validation="success">Rose.png</File>
    </Col>
    <Col sm={5}>
      <File validation="error">Thorn.txt</File>
    </Col>
  </Row>
);

export default Example;
