/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { GlobalAlert } from '@zendeskgarden/react-notifications';
import { Anchor } from '@zendeskgarden/react-buttons';

const Container = styled.div`
  & > * {
    margin-bottom: 32px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Example = () => (
  <Container>
    <GlobalAlert type="info">
      <GlobalAlert.Title>New update available</GlobalAlert.Title>
      <GlobalAlert.Content>
        <span>Your account will automatically update in 5 days. </span>
        <Anchor href="#" isExternal>
          Find out more
        </Anchor>
      </GlobalAlert.Content>
      <GlobalAlert.Button>Update now</GlobalAlert.Button>
      <GlobalAlert.Close aria-label="Close Global Alert" />
    </GlobalAlert>

    <GlobalAlert type="warning">
      <GlobalAlert.Title>Warning</GlobalAlert.Title>
      <GlobalAlert.Content>
        <span>During system maintenance, you may experience a service disruption. </span>
        <Anchor href="#" isExternal>
          Learn more
        </Anchor>
      </GlobalAlert.Content>
      <GlobalAlert.Close aria-label="Close Global Alert" />
    </GlobalAlert>

    <GlobalAlert type="error">
      <GlobalAlert.Title>Chat is disconnected</GlobalAlert.Title>
      <GlobalAlert.Content>Reconnect to make this session live.</GlobalAlert.Content>
      <GlobalAlert.Button>Reconnect</GlobalAlert.Button>
    </GlobalAlert>

    <GlobalAlert type="success">
      <GlobalAlert.Title>Success</GlobalAlert.Title>
      <GlobalAlert.Content>Your trial has been updated!</GlobalAlert.Content>
    </GlobalAlert>
  </Container>
);

export default Example;
