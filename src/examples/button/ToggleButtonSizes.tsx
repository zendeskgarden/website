/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { ToggleButton } from '@zendeskgarden/react-buttons';

const Example = () => {
  const [smallPressed, setSmallPressed] = useState(false);
  const [mediumPressed, setMediumPressed] = useState(false);
  const [largePressed, setLargePressed] = useState(false);

  return (
    <Row alignItems="center">
      <Col textAlign="center">
        <ToggleButton
          isPressed={smallPressed}
          onClick={() => setSmallPressed(!smallPressed)}
          size="small"
        >
          Small
        </ToggleButton>
      </Col>
      <Col textAlign="center">
        <ToggleButton
          isPressed={mediumPressed}
          onClick={() => setMediumPressed(!mediumPressed)}
          size="medium"
        >
          Default
        </ToggleButton>
      </Col>
      <Col textAlign="center">
        <ToggleButton
          isPressed={largePressed}
          onClick={() => setLargePressed(!largePressed)}
          size="large"
        >
          Large
        </ToggleButton>
      </Col>
    </Row>
  );
};

export default Example;
