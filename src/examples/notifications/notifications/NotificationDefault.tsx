/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Notification } from '@zendeskgarden/react-notifications';

const Example = () => (
  <Notification type="info">
    <Notification.Title>Info</Notification.Title>
    Turnip greens yarrow ricebean endive cauliflower sea kohlrabi amaranth water
    <Notification.Close aria-label="Close Notification" />
  </Notification>
);

export default Example;
