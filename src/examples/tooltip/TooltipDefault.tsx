/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Tooltip } from '@zendeskgarden/react-tooltips';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';

const Example = () => (
  <Row>
    <Col textAlign="center">
      <Tooltip content="Eat, drink, and be rosemary">
        <Button>Hover for a tooltip</Button>
      </Tooltip>
    </Col>
  </Row>
);

export default Example;
