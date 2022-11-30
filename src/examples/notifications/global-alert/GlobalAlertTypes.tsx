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

const StyledSpacer = styled.div`
  height: ${p => p.theme.space.md};
`;

const Example = () => (
  <>
    <GlobalAlert type="info">
      <GlobalAlert.Content>
        <GlobalAlert.Title>New update available</GlobalAlert.Title>
        Your account will automatically update in 5 days.{' '}
        <Anchor href="#" isExternal>
          Find out more
        </Anchor>
      </GlobalAlert.Content>
      <GlobalAlert.Button>Update now</GlobalAlert.Button>
      <GlobalAlert.Close aria-label="Close Global Alert" />
    </GlobalAlert>

    <StyledSpacer />

    <GlobalAlert type="warning">
      <GlobalAlert.Content>
        <GlobalAlert.Title>Warning</GlobalAlert.Title>
        During system maintenance, you may experience a service disruption.{' '}
        <Anchor href="#" isExternal>
          Learn more
        </Anchor>
      </GlobalAlert.Content>
      <GlobalAlert.Close aria-label="Close Global Alert" />
    </GlobalAlert>

    <StyledSpacer />

    <GlobalAlert type="error">
      <GlobalAlert.Content>
        <GlobalAlert.Title>Chat is disconnected</GlobalAlert.Title>
        Reconnect to make this session live.
      </GlobalAlert.Content>
      <GlobalAlert.Button>Reconnect</GlobalAlert.Button>
    </GlobalAlert>

    <StyledSpacer />

    <GlobalAlert type="success">
      <GlobalAlert.Content>
        <GlobalAlert.Title>Success</GlobalAlert.Title>
        Your trial has been updated!
      </GlobalAlert.Content>
    </GlobalAlert>
  </>
);

export default Example;
