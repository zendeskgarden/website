/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { MD } from '@zendeskgarden/react-typography';
import { Row, Col } from '@zendeskgarden/react-grid';

export const Use: React.FC = props => (
  <Col>
    <MD isBold>When to use</MD>
    {props.children}
  </Col>
);

export const Misuse: React.FC = props => (
  <Col>
    <MD isBold>When NOT to use</MD>
    {props.children}
  </Col>
);

export const StyledUsage = styled(Row)`
  @media (max-width: ${p => p.theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;
