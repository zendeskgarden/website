/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { PropsWithChildren } from 'react';
import { css } from 'styled-components';
import { Grid } from '@zendeskgarden/react-grid';
import { StyledH4 as Title } from './Typography';

export const Use: React.FC<PropsWithChildren> = props => (
  <Grid.Col sm>
    <Title tag="div">Used for this</Title>
    {props.children}
  </Grid.Col>
);

export const Misuse: React.FC<PropsWithChildren> = props => (
  <Grid.Col sm>
    <Title tag="div">Not for this</Title>
    {props.children}
  </Grid.Col>
);

export const Usage: React.FC<PropsWithChildren> = props => (
  <Grid.Row
    css={css`
      margin-bottom: ${p => p.theme.space.base * 7}px;
    `}
  >
    {props.children}
  </Grid.Row>
);
