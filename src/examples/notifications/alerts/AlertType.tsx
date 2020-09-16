/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Alert, Title, Close } from '@zendeskgarden/react-notifications';

const StyledSpacer = styled.div`
  height: ${p => p.theme.space.md};
`;

const Example = () => (
  <>
    <Alert type="info">
      <Title>Info</Title>
      Watering plants in a garden will cause them to grow.
      <Close aria-label="Close Alert" />
    </Alert>
    <StyledSpacer />
    <Alert type="warning">
      <Title>Warning</Title>
      The garden plants are getting too much sun and not enough water.
      <Close aria-label="Close Alert" />
    </Alert>
    <StyledSpacer />
    <Alert type="error">
      <Title>Error</Title>
      There isn&apos;t any water left to water the plants.
      <Close aria-label="Close Alert" />
    </Alert>
    <StyledSpacer />
    <Alert type="success">
      <Title>Success</Title>
      It started to rain and the garden is getting plenty of water.
      <Close aria-label="Close Alert" />
    </Alert>
  </>
);

export default Example;