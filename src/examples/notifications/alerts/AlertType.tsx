/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Alert } from '@zendeskgarden/react-notifications';

const StyledSpacer = styled.div`
  height: ${p => p.theme.space.md};
`;

const Example = () => (
  <>
    <Alert type="info">
      <Alert.Title>Info</Alert.Title>
      Turnip greens yarrow endive cauliflower sea lettuce kohlrabi amaranth water
      <Alert.Close aria-label="Close Info Alert" />
    </Alert>
    <StyledSpacer />
    <Alert type="warning">
      <Alert.Title>Warning</Alert.Title>
      Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke
      <Alert.Close aria-label="Close Warning Alert" />
    </Alert>
    <StyledSpacer />
    <Alert type="error">
      <Alert.Title>Error</Alert.Title>
      Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic
      <Alert.Close aria-label="Close Error Alert" />
    </Alert>
    <StyledSpacer />
    <Alert type="success">
      <Alert.Title>Success</Alert.Title>
      Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke
      <Alert.Close aria-label="Close Success Alert" />
    </Alert>
  </>
);

export default Example;
