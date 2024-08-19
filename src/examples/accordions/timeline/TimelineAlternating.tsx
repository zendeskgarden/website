/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Timeline } from '@zendeskgarden/react-accordions';
import { Span } from '@zendeskgarden/react-typography';

export const StyledSpan = styled(Span).attrs({ isBold: true })`
  display: block;
`;

const Example = () => (
  <Timeline isAlternate>
    <Timeline.Item>
      <Timeline.Content>
        <StyledSpan>Planted seed</StyledSpan>
        <Span hue="foreground.subtle">Today 9:00 AM</Span>
      </Timeline.Content>
    </Timeline.Item>
    <Timeline.Item>
      <Timeline.Content>
        <StyledSpan>Purchased seed</StyledSpan>
        <Span hue="foreground.subtle">Feb 08, 9:05 AM</Span>
      </Timeline.Content>
    </Timeline.Item>
    <Timeline.Item>
      <Timeline.Content>
        <StyledSpan>Arranged layout of garden</StyledSpan>
        <Span hue="foreground.subtle">Jan 21, 9:13 AM</Span>
      </Timeline.Content>
    </Timeline.Item>
    <Timeline.Item>
      <Timeline.Content>
        <StyledSpan>Chose a gardening location</StyledSpan>
        <Span hue="foreground.subtle">Jan 21, 9:21 AM </Span>
      </Timeline.Content>
    </Timeline.Item>
  </Timeline>
);

export default Example;
