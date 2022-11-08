/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { GlobalAlert } from '@zendeskgarden/react-notifications';

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
      <GlobalAlert.Title>Info</GlobalAlert.Title>
      <GlobalAlert.Content>Gumbo beet greens corn soko endive gumbo gourd.</GlobalAlert.Content>
      <GlobalAlert.Button>Primary</GlobalAlert.Button>
      <GlobalAlert.Close aria-label="Close GlobalAlert" />
    </GlobalAlert>

    <GlobalAlert type="warning">
      <GlobalAlert.Title>Warning</GlobalAlert.Title>
      <GlobalAlert.Content>Gumbo beet greens corn soko endive gumbo gourd.</GlobalAlert.Content>
      <GlobalAlert.Button>Primary</GlobalAlert.Button>
      <GlobalAlert.Close aria-label="Close GlobalAlert" />
    </GlobalAlert>

    <GlobalAlert type="error">
      <GlobalAlert.Title>Error</GlobalAlert.Title>
      <GlobalAlert.Content>Gumbo beet greens corn soko endive gumbo gourd.</GlobalAlert.Content>
      <GlobalAlert.Button>Primary</GlobalAlert.Button>
      <GlobalAlert.Close aria-label="Close GlobalAlert" />
    </GlobalAlert>

    <GlobalAlert type="success">
      <GlobalAlert.Title>Success</GlobalAlert.Title>
      <GlobalAlert.Content>Gumbo beet greens corn soko endive gumbo gourd.</GlobalAlert.Content>
      <GlobalAlert.Button>Primary</GlobalAlert.Button>
      <GlobalAlert.Close aria-label="Close GlobalAlert" />
    </GlobalAlert>
  </Container>
);

export default Example;
