/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { ToggleIconButton } from '@zendeskgarden/react-buttons';
import { ReactComponent as RoundIcon } from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';
import { ReactComponent as SquareIcon } from '@zendeskgarden/svg-icons/src/16/bold-stroke.svg';

const Example = () => {
  const [roundPressed, setRoundPressed] = useState(false);
  const [squarePressed, setSquarePressed] = useState(false);

  return (
    <Row>
      <Col textAlign="center">
        <ToggleIconButton
          aria-label="round leaf"
          isBasic={false}
          isPressed={roundPressed}
          onClick={() => setRoundPressed(!roundPressed)}
        >
          <RoundIcon />
        </ToggleIconButton>
      </Col>
      <Col textAlign="center">
        <ToggleIconButton
          isBasic={false}
          isPill={false}
          isPressed={squarePressed}
          onClick={() => setSquarePressed(!squarePressed)}
        >
          <SquareIcon aria-label="square bold" />
        </ToggleIconButton>
      </Col>
    </Row>
  );
};

export default Example;
