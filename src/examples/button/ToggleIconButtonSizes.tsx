/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { ToggleIconButton } from '@zendeskgarden/react-buttons';
import { ReactComponent as StarIcon } from '@zendeskgarden/svg-icons/src/16/star-stroke.svg';

const Example = () => {
  const [smallPressed, setSmallPressed] = useState(true);
  const [mediumPressed, setMediumPressed] = useState(true);
  const [largePressed, setLargePressed] = useState(true);

  return (
    <Row alignItems="center">
      <Col textAlign="center">
        <ToggleIconButton
          isPressed={smallPressed}
          onClick={() => setSmallPressed(!smallPressed)}
          size="small"
        >
          <StarIcon aria-label="small star" />
        </ToggleIconButton>
      </Col>
      <Col textAlign="center">
        <ToggleIconButton
          isPressed={mediumPressed}
          onClick={() => setMediumPressed(!mediumPressed)}
          size="medium"
        >
          <StarIcon aria-label="medium star" />
        </ToggleIconButton>
      </Col>
      <Col textAlign="center">
        <ToggleIconButton
          isPressed={largePressed}
          onClick={() => setLargePressed(!largePressed)}
          size="large"
        >
          <StarIcon aria-label="large star" />
        </ToggleIconButton>
      </Col>
    </Row>
  );
};

export default Example;
