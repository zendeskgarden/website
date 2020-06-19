/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { PALETTE } from '@zendeskgarden/react-theming';
import { Avatar } from '@zendeskgarden/react-avatars';
import { Row, Col } from '@zendeskgarden/react-grid';

const Example = () => (
  <Row>
    <Col textAlign="center">
      <Avatar backgroundColor={PALETTE.grey[600]} status="away">
        <img
          alt="away avatar"
          src="https://garden.zendesk.com/react-components/avatars/images/avatar-3.png"
        />
      </Avatar>
    </Col>
    <Col textAlign="center">
      <Avatar backgroundColor={PALETTE.grey[600]} status="available">
        <img
          alt="available avatar"
          src="https://garden.zendesk.com/react-components/avatars/images/avatar-3.png"
        />
      </Avatar>
    </Col>
    <Col textAlign="center">
      <Avatar backgroundColor={PALETTE.grey[600]} badge={8}>
        <img
          alt="active avatar"
          src="https://garden.zendesk.com/react-components/avatars/images/avatar-3.png"
        />
      </Avatar>
    </Col>
  </Row>
);

export default Example;
