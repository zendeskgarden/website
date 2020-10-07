/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { ToggleIconButton } from '@zendeskgarden/react-buttons';
import { ReactComponent as StrokeIcon } from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';
import { ReactComponent as FillIcon } from '@zendeskgarden/svg-icons/src/16/leaf-fill.svg';

const Example = () => {
  const [pressed, setPressed] = useState(false);

  return (
    <Row>
      <Col textAlign="center">
        <ToggleIconButton isPressed={pressed} onClick={() => setPressed(!pressed)}>
          <svg aria-label="leaf" focusable="false">
            <FillIcon style={{ opacity: pressed ? 1 : 0 }} />
            <StrokeIcon style={{ opacity: pressed ? 0 : 1 }} />
          </svg>
        </ToggleIconButton>
      </Col>
    </Row>
  );
};

export default Example;
