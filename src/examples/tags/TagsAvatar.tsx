/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Tag } from '@zendeskgarden/react-tags';
import { Row, Col } from '@zendeskgarden/react-grid';
import { ReactComponent as LeafIcon } from '@zendeskgarden/svg-icons/src/12/leaf-stroke.svg';

const Example = () => (
  <Row alignItems="center">
    <Col textAlign="center">
      <Tag>
        <Tag.Avatar>
          <LeafIcon />
        </Tag.Avatar>
        <span>Conifer</span>
      </Tag>
    </Col>
    <Col textAlign="center">
      <Tag size="large">
        <Tag.Avatar>
          <LeafIcon />
        </Tag.Avatar>
        <span>Conifer</span>
      </Tag>
    </Col>
  </Row>
);

export default Example;
