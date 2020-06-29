/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { IconButton } from '@zendeskgarden/react-buttons';
import { ReactComponent as LeafIcon } from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';

const Example = () => (
  <Row>
    <Col textAlign="center">
      <IconButton isDanger>
        <LeafIcon />
      </IconButton>
    </Col>
    <Col textAlign="center">
      <IconButton isDanger isBasic={false}>
        <LeafIcon />
      </IconButton>
    </Col>
    <Col textAlign="center">
      <IconButton isDanger isPrimary>
        <LeafIcon />
      </IconButton>
    </Col>
  </Row>
);

export default Example;
