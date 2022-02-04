/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Sheet } from '@zendeskgarden/react-chrome';
import { Row, Col } from '@zendeskgarden/react-grid';
import { getColor, mediaQuery } from '@zendeskgarden/react-theming';

const StyledCol = styled(Col)`
  height: ${props => props.theme.space.base * 120}px;

  ${props => mediaQuery('down', 'sm', props.theme)} {
    height: ${props => props.theme.space.base * 80}px;

    &:not(:last-child) {
      margin-bottom: ${props => props.theme.space.md};
    }
  }
`;

const StyledSheet = styled(Sheet)`
  border-top: ${props => props.theme.borderWidths.sm} dashed;
  border-right: ${props => props.theme.borderWidths.sm} dashed;
  border-bottom: ${props => props.theme.borderWidths.sm} dashed;
  border-color: ${props => getColor('neutralHue', 400, props.theme)};
`;

const Example = () => (
  <Row>
    <StyledCol sm={12} md={4} lg={4}>
      <StyledSheet
        isOpen
        size="100%"
        aria-describedby=""
        aria-labelledby=""
        title="Sheet with no title"
      >
        <Sheet.Close />
      </StyledSheet>
    </StyledCol>

    <StyledCol sm={12} md={4} lg={4}>
      <StyledSheet
        isOpen
        size="100%"
        aria-describedby=""
        aria-labelledby=""
        title="Sheet with title"
      >
        <Sheet.Header>
          <Sheet.Title>Heading</Sheet.Title>
        </Sheet.Header>
        <Sheet.Close />
      </StyledSheet>
    </StyledCol>

    <StyledCol sm={12} md={4} lg={4}>
      <StyledSheet
        isOpen
        size="100%"
        aria-describedby=""
        aria-labelledby=""
        title="Sheet with title and description"
      >
        <Sheet.Header>
          <Sheet.Title>Heading</Sheet.Title>
          <Sheet.Description>Description</Sheet.Description>
        </Sheet.Header>
        <Sheet.Close />
      </StyledSheet>
    </StyledCol>
  </Row>
);

export default Example;
