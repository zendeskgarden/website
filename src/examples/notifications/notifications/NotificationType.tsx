/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Notification, Title, Close } from '@zendeskgarden/react-notifications';

const StyledSpacer = styled.div`
  height: ${p => p.theme.space.md};
`;

const Example = () => (
  <>
    <Notification type="info">
      <Title>Info</Title>
      Turnip greens yarrow ricebean cauliflower sea lettuce kohlrabi amaranth water
      <Close aria-label="Close Notification" />
    </Notification>
    <StyledSpacer />
    <Notification type="warning">
      <Title>Warning</Title>
      Corn amaranth salsify bunya nuts nori azuki bean potato bell pepper artichoke
      <Close aria-label="Close Notification" />
    </Notification>
    <StyledSpacer />
    <Notification type="error">
      <Title>Error</Title>
      Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic
      <Close aria-label="Close Notification" />
    </Notification>
    <StyledSpacer />
    <Notification type="success">
      <Title>Success</Title>
      Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke
      <Close aria-label="Close Notification" />
    </Notification>
  </>
);

export default Example;
