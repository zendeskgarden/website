/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Notification } from '@zendeskgarden/react-notifications';

const StyledSpacer = styled.div`
  height: ${p => p.theme.space.md};
`;

const Example = () => (
  <>
    <Notification type="info">
      <Notification.Title>Info</Notification.Title>
      Turnip greens yarrow ricebean cauliflower sea lettuce kohlrabi amaranth water
      <Notification.Close aria-label="Close Info Notification" />
    </Notification>
    <StyledSpacer />
    <Notification type="warning">
      <Notification.Title>Warning</Notification.Title>
      Corn amaranth salsify bunya nuts nori azuki bean potato bell pepper artichoke
      <Notification.Close aria-label="Close Warning Notification" />
    </Notification>
    <StyledSpacer />
    <Notification type="error">
      <Notification.Title>Error</Notification.Title>
      Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic
      <Notification.Close aria-label="Close Error Notification" />
    </Notification>
    <StyledSpacer />
    <Notification type="success">
      <Notification.Title>Success</Notification.Title>
      Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke
      <Notification.Close aria-label="Close Success Notification" />
    </Notification>
  </>
);

export default Example;
