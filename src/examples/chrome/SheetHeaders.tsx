/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Sheet } from '@zendeskgarden/react-chrome';
import { Grid } from '@zendeskgarden/react-grid';
import { getColor, mediaQuery } from '@zendeskgarden/react-theming';

const StyledCol = styled(Grid.Col)`
  height: 480px;

  ${props => mediaQuery('down', 'sm', props.theme)} {
    height: 320px;

    &:not(:last-child) {
      margin-bottom: ${props => props.theme.space.md};
    }
  }
`;

const StyledSheet = styled(Sheet)`
  border: ${props => props.theme.borderWidths.sm} dashed;
  ${props => (props.theme.rtl ? 'border-right' : 'border-left')}: ${props =>
    props.theme.borderWidths.sm} solid;
  border-color: ${({ theme }) => getColor({ theme, variable: 'border.default' })};
`;

const Example = () => (
  <Grid.Row>
    <StyledCol md>
      <StyledSheet isOpen size="100%">
        <Sheet.Close />
      </StyledSheet>
    </StyledCol>

    <StyledCol md>
      <StyledSheet isOpen size="100%">
        <Sheet.Header>
          <Sheet.Title>Heading</Sheet.Title>
        </Sheet.Header>
        <Sheet.Close />
      </StyledSheet>
    </StyledCol>

    <StyledCol md>
      <StyledSheet isOpen size="100%">
        <Sheet.Header>
          <Sheet.Title>Heading</Sheet.Title>
          <Sheet.Description>Description</Sheet.Description>
        </Sheet.Header>
        <Sheet.Close />
      </StyledSheet>
    </StyledCol>
  </Grid.Row>
);

export default Example;
