/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Timeline } from '@zendeskgarden/react-accordions';
import { Span } from '@zendeskgarden/react-typography';
import { StyledSpan } from './TimelineDefault';

const Example = () => (
  <Timeline isAlternate>
    <Timeline.Item>
      <Timeline.Content>
        <StyledSpan>Planted seed</StyledSpan>
        <Span hue="grey">Today 9:00 AM</Span>
      </Timeline.Content>
    </Timeline.Item>
    <Timeline.Item>
      <Timeline.Content>
        <StyledSpan>Purchased seed</StyledSpan>
        <Span hue="grey">Feb 08, 9:05 AM</Span>
      </Timeline.Content>
    </Timeline.Item>
    <Timeline.Item>
      <Timeline.Content>
        <StyledSpan>Arranged layout of garden</StyledSpan>
        <Span hue="grey">Jan 21, 9:13 AM</Span>
      </Timeline.Content>
    </Timeline.Item>
    <Timeline.Item>
      <Timeline.Content>
        <StyledSpan>Chose a gardening location</StyledSpan>
        <Span hue="grey">Jan 21, 9:21 AM </Span>
      </Timeline.Content>
    </Timeline.Item>
  </Timeline>
);

export default Example;
