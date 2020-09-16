/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Notification, Title, Close } from '@zendeskgarden/react-notifications';
import { Row, Col } from '@zendeskgarden/react-grid';

const StyledSpacer = styled.div`
  width: 100%;
  height: ${p => p.theme.space.md};
`;

const Example = () => (
  <Row>
    <Col>
      <Notification type="info">
        <Title>Info</Title>
        Watering plants in a garden will cause them to grow.
        <Close aria-label="Close Alert" />
      </Notification>
      <StyledSpacer />
      <Notification type="warning">
        <Title>Warning</Title>
        The garden plants are getting too much sun and not enough water.
        <Close aria-label="Close Alert" />
      </Notification>
      <StyledSpacer />
      <Notification type="error">
        <Title>Error</Title>
        There isn&apos;t any water left to water the plants.
        <Close aria-label="Close Alert" />
      </Notification>
      <StyledSpacer />
      <Notification type="success">
        <Title>Success</Title>
        It started to rain and your garden is getting plenty of water.
        <Close aria-label="Close Alert" />
      </Notification>
    </Col>
  </Row>
);

export default Example;
