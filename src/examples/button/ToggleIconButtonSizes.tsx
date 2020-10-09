/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { ToggleIconButton } from '@zendeskgarden/react-buttons';
import { ReactComponent as Icon } from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';

const Example = () => {
  const [smallPressed, setSmallPressed] = useState(true);
  const [mediumPressed, setMediumPressed] = useState(true);
  const [largePressed, setLargePressed] = useState(true);

  return (
    <Row alignItems="center">
      <Col textAlign="center">
        <ToggleIconButton
          aria-label="small leaf"
          isPressed={smallPressed}
          onClick={() => setSmallPressed(!smallPressed)}
          size="small"
        >
          <Icon />
        </ToggleIconButton>
      </Col>
      <Col textAlign="center">
        <ToggleIconButton
          aria-label="medium leaf"
          isPressed={mediumPressed}
          onClick={() => setMediumPressed(!mediumPressed)}
          size="medium"
        >
          <Icon />
        </ToggleIconButton>
      </Col>
      <Col textAlign="center">
        <ToggleIconButton
          aria-label="large leaf"
          isPressed={largePressed}
          onClick={() => setLargePressed(!largePressed)}
          size="large"
        >
          <Icon />
        </ToggleIconButton>
      </Col>
    </Row>
  );
};

export default Example;
