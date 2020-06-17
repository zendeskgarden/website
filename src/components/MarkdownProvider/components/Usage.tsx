/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import { Row, Col } from '@zendeskgarden/react-grid';
import { StyledH4 as Title } from './Typography';

export const Use: React.FC = props => (
  <Col sm>
    <Title tag="div">Used for this</Title>
    {props.children}
  </Col>
);

export const Misuse: React.FC = props => (
  <Col sm>
    <Title tag="div">Not for this</Title>
    {props.children}
  </Col>
);

export const Usage: React.FC = props => (
  <Row
    css={css`
      margin-bottom: ${p => p.theme.space.base * 7}px;
    `}
  >
    {props.children}
  </Row>
);
