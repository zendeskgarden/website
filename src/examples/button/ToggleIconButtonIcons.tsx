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
import { Tooltip } from '@zendeskgarden/react-tooltips';

const Example = () => {
  const [pressed, setPressed] = useState(false);

  return (
    <Row>
      <Col textAlign="center">
        <Tooltip content="Leaf">
          <ToggleIconButton
            aria-label="leaf"
            isPressed={pressed}
            onClick={() => setPressed(!pressed)}
          >
            <svg focusable="false">
              <FillIcon style={{ opacity: pressed ? 1 : 0 }} />
              <StrokeIcon style={{ opacity: pressed ? 0 : 1 }} />
            </svg>
          </ToggleIconButton>
        </Tooltip>
      </Col>
    </Row>
  );
};

export default Example;
