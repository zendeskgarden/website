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
  const [pressed, setPressed] = useState(false);

  return (
    <Row>
      <Col textAlign="center">
        <ToggleIconButton
          aria-label="disabled star"
          disabled
          isPressed={pressed}
          onClick={() => setPressed(!pressed)}
        >
          <StarIcon />
        </ToggleIconButton>
      </Col>
    </Row>
  );
};

export default Example;
