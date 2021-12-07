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
import { Tooltip } from '@zendeskgarden/react-tooltips';

const Example = () => (
  <Row>
    <Col textAlign="center">
      <Tooltip content="Square leaf">
        <IconButton aria-label="square leaf" isBasic={false} isPill={false}>
          <LeafIcon />
        </IconButton>
      </Tooltip>
    </Col>
    <Col textAlign="center">
      <Tooltip content="Round leaf">
        <IconButton aria-label="round leaf" isBasic={false}>
          <LeafIcon />
        </IconButton>
      </Tooltip>
    </Col>
  </Row>
);

export default Example;
