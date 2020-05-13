/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { MD } from '@zendeskgarden/react-typography';

export const Use: React.FC = props => (
  <div>
    <MD isBold>When to use</MD>
    {props.children}
  </div>
);

export const Misuse: React.FC = props => (
  <div>
    <MD isBold>When NOT to use</MD>
    {props.children}
  </div>
);

export const Usage = styled.div`
  @media (min-width: ${p => p.theme.breakpoints.sm}) {
    display: flex;
  }
`;
