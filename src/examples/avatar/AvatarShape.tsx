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
import { ReactComponent as ZendeskIcon } from '@zendeskgarden/svg-icons/src/26/zendesk.svg';
import { ReactComponent as UserStrokeIcon } from '@zendeskgarden/svg-icons/src/16/user-solo-stroke.svg';

const Example = () => (
  <Row>
    <Col textAlign="center">
      <Avatar backgroundColor={PALETTE.grey[600]} size="medium">
        <UserStrokeIcon role="img" aria-label="User" />
      </Avatar>
    </Col>
    <Col textAlign="center">
      <Avatar backgroundColor={PALETTE.kale[700]} size="medium" isSystem>
        <ZendeskIcon role="img" aria-label="Zendesk" />
      </Avatar>
    </Col>
  </Row>
);

export default Example;
