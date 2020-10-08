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
  const [defaultPressed, setDefaultPressed] = useState(false);
  const [primaryPressed, setPrimaryPressed] = useState(false);
  const [basicPressed, setBasicPressed] = useState(false);

  return (
    <Row alignItems="center">
      <Col textAlign="center">
        <ToggleIconButton
          aria-label="default star"
          isPressed={defaultPressed}
          onClick={() => setDefaultPressed(!defaultPressed)}
        >
          <StarIcon />
        </ToggleIconButton>
      </Col>
      <Col textAlign="center">
        <ToggleIconButton
          aria-label="primary star"
          isPressed={primaryPressed}
          onClick={() => setPrimaryPressed(!primaryPressed)}
          isPrimary
        >
          <StarIcon />
        </ToggleIconButton>
      </Col>
      <Col textAlign="center">
        <ToggleIconButton
          aria-label="basic star"
          isPressed={basicPressed}
          onClick={() => setBasicPressed(!basicPressed)}
          isBasic={false}
        >
          <StarIcon />
        </ToggleIconButton>
      </Col>
    </Row>
  );
};

export default Example;
