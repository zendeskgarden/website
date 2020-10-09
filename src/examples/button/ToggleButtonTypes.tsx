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
  const [defaultPressed, setDefaultPressed] = useState(false);
  const [primaryPressed, setPrimaryPressed] = useState(false);
  const [basicPressed, setBasicPressed] = useState(false);

  return (
    <Row alignItems="center">
      <Col textAlign="center">
        <ToggleButton isPressed={defaultPressed} onClick={() => setDefaultPressed(!defaultPressed)}>
          Default
        </ToggleButton>
      </Col>
      <Col textAlign="center">
        <ToggleButton
          isPressed={primaryPressed}
          onClick={() => setPrimaryPressed(!primaryPressed)}
          isPrimary
        >
          Primary
        </ToggleButton>
      </Col>
      <Col textAlign="center">
        <ToggleButton
          isPressed={basicPressed}
          onClick={() => setBasicPressed(!basicPressed)}
          isBasic
        >
          Basic
        </ToggleButton>
      </Col>
    </Row>
  );
};

export default Example;
