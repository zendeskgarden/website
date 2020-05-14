/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { Avatar } from '@zendeskgarden/react-avatars';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

const Example = () => {
  const iconColor = DEFAULT_THEME.palette.grey[600];

  return (
    <Grid>
      <Row alignItems="center">
        <Col textAlign="center">
          <Avatar backgroundColor={iconColor} status="away">
            <img
              alt="away avatar"
              src="https://garden.zendesk.com/react-components/avatars/images/avatar-3.png"
            />
          </Avatar>
        </Col>
        <Col textAlign="center">
          <Avatar backgroundColor={iconColor}>
            <img
              alt="standard avatar"
              src="https://garden.zendesk.com/react-components/avatars/images/avatar-3.png"
            />
          </Avatar>
        </Col>
        <Col textAlign="center">
          <Avatar backgroundColor={iconColor} status="available">
            <img
              alt="available avatar"
              src="https://garden.zendesk.com/react-components/avatars/images/avatar-3.png"
            />
          </Avatar>
        </Col>
      </Row>
    </Grid>
  );
};

export default Example;
