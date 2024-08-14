/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { PALETTE } from '@zendeskgarden/react-theming';
import { Avatar } from '@zendeskgarden/react-avatars';
import { Grid } from '@zendeskgarden/react-grid';
import { ReactComponent as UserIcon } from '@zendeskgarden/svg-icons/src/16/user-solo-stroke.svg';

const Example = () => (
  <Grid.Row>
    <Grid.Col textAlign="center">
      <Avatar backgroundColor={PALETTE.grey[700]} status="away">
        <UserIcon role="img" aria-label="user" />
      </Avatar>
    </Grid.Col>
    <Grid.Col textAlign="center">
      <Avatar backgroundColor={PALETTE.grey[700]} status="available">
        <UserIcon role="img" aria-label="user" />
      </Avatar>
    </Grid.Col>
    <Grid.Col textAlign="center">
      <Avatar backgroundColor={PALETTE.grey[700]} badge={8}>
        <UserIcon role="img" aria-label="user" />
      </Avatar>
    </Grid.Col>
  </Grid.Row>
);

export default Example;
