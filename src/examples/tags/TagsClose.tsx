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
import { Tooltip } from '@zendeskgarden/react-tooltips';

const handleTagKeyDown = (e: React.KeyboardEvent<any>) => {
  if (e.keyCode === KEY_CODES.DELETE || e.keyCode === KEY_CODES.BACKSPACE) {
    e.preventDefault();
    alert('Tag dismissed via keyboard');
  }
};

const handleCloseKeyDown = (e: React.KeyboardEvent<any>) => {
  const KEYS = [KEY_CODES.SPACE, KEY_CODES.ENTER, KEY_CODES.DELETE, KEY_CODES.BACKSPACE];

  if (KEYS.includes(e.keyCode)) {
    e.preventDefault();
    alert('Tag dismissed via keyboard');
  }
};

const Example = () => (
  <Row>
    <Col textAlign="center">
      <Tag tabIndex={0} aria-label="Tag, press delete to remove" onKeyDown={handleTagKeyDown}>
        <span>Algae</span>
        <Tooltip content="Remove tag">
          <Tag.Close
            aria-label="Remove tag"
            onClick={() => alert('Tag dismissed via mouse')}
            onKeyDown={handleCloseKeyDown}
          />
        </Tooltip>
      </Tag>
    </Col>
  </Row>
);

export default Example;
