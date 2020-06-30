/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';
import { ReactComponent as LeafIcon } from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';

const Example = () => (
  <Row>
    <Col textAlign="center">
      <Button>
        <Button.StartIcon>
          <LeafIcon />
        </Button.StartIcon>
        Media
      </Button>
    </Col>
    <Col textAlign="center">
      <Button isPrimary>
        Media
        <Button.EndIcon>
          <LeafIcon />
        </Button.EndIcon>
      </Button>
    </Col>
  </Row>
);

export default Example;
