/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Tag } from '@zendeskgarden/react-tags';
import { KEY_CODES } from '@zendeskgarden/container-utilities';
import { Row, Col } from '@zendeskgarden/react-grid';

const handleKeyDown = (e: React.KeyboardEvent<any>) => {
  if (e.keyCode === KEY_CODES.DELETE || e.keyCode === KEY_CODES.BACKSPACE) {
    e.preventDefault();
    alert('Tag dismissed via keyboard');
  }
};

const Example = () => (
  <Row>
    <Col textAlign="center">
      <Tag tabIndex={0} onKeyDown={handleKeyDown}>
        <span>Algae</span>
        <Tag.Close onClick={() => alert('Tag dismissed via mouse')} />
      </Tag>
    </Col>
  </Row>
);

export default Example;
