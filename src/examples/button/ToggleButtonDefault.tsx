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
  const [pressed, setPressed] = useState(false);

  return (
    <Row>
      <Col textAlign="center">
        <ToggleButton isPressed={pressed} onClick={() => setPressed(!pressed)}>
          Sprinklers
        </ToggleButton>
      </Col>
    </Row>
  );
};

export default Example;
