/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Avatar } from '@zendeskgarden/react-avatars';
import { Grid } from '@zendeskgarden/react-grid';
import { ReactComponent as UserIcon } from '@zendeskgarden/svg-icons/src/16/user-solo-stroke.svg';

const Example = () => (
  <Grid.Row>
    <Grid.Col textAlign="center">
      <Avatar backgroundColor="background.emphasis">
        <UserIcon role="img" aria-label="icon avatar" />
      </Avatar>
    </Grid.Col>
    <Grid.Col textAlign="center">
      <Avatar backgroundColor="background.emphasis">
        <img alt="image avatar" src="https://garden.zendesk.com/components/avatar/user.png" />
      </Avatar>
    </Grid.Col>
    <Grid.Col textAlign="center">
      <Avatar backgroundColor="background.emphasis">
        <Avatar.Text>ZD</Avatar.Text>
      </Avatar>
    </Grid.Col>
  </Grid.Row>
);

export default Example;
