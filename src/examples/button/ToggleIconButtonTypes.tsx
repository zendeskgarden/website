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
  const [defaultPressed, setDefaultPressed] = useState(false);
  const [primaryPressed, setPrimaryPressed] = useState(false);
  const [basicPressed, setBasicPressed] = useState(false);

  return (
    <Row alignItems="center">
      <Col textAlign="center">
        <ToggleIconButton
          aria-label="default leaf"
          isPressed={defaultPressed}
          onClick={() => setDefaultPressed(!defaultPressed)}
        >
          <Icon />
        </ToggleIconButton>
      </Col>
      <Col textAlign="center">
        <ToggleIconButton
          aria-label="primary leaf"
          isPressed={primaryPressed}
          onClick={() => setPrimaryPressed(!primaryPressed)}
          isPrimary
        >
          <Icon />
        </ToggleIconButton>
      </Col>
      <Col textAlign="center">
        <ToggleIconButton
          aria-label="basic leaf"
          isPressed={basicPressed}
          onClick={() => setBasicPressed(!basicPressed)}
          isBasic={false}
        >
          <Icon />
        </ToggleIconButton>
      </Col>
    </Row>
  );
};

export default Example;
