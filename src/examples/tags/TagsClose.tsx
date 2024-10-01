/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Tag } from '@zendeskgarden/react-tags';
import { KEYS } from '@zendeskgarden/container-utilities';
import { Grid } from '@zendeskgarden/react-grid';
import { Tooltip } from '@zendeskgarden/react-tooltips';

const handleTagKeyDown = (e: React.KeyboardEvent<any>) => {
  if (e.key === KEYS.DELETE || e.key === KEYS.BACKSPACE) {
    e.preventDefault();
    alert('Tag dismissed via keyboard');
  }
};

const handleCloseKeyDown = (e: React.KeyboardEvent<any>) => {
  const keys = [KEYS.SPACE, KEYS.ENTER, KEYS.DELETE, KEYS.BACKSPACE];

  if (keys.includes(e.key)) {
    e.preventDefault();
    alert('Tag dismissed via keyboard');
  }
};

const Example = () => (
  <Grid.Row>
    <Grid.Col textAlign="center">
      <Tag tabIndex={0} aria-label="Algae, press delete to remove" onKeyDown={handleTagKeyDown}>
        <span>Algae</span>
        <Tooltip content="Remove tag">
          <Tag.Close
            aria-label="Remove tag"
            onClick={() => {
              alert('Tag dismissed via mouse');
            }}
            onKeyDown={handleCloseKeyDown}
          />
        </Tooltip>
      </Tag>
    </Grid.Col>
  </Grid.Row>
);

export default Example;
