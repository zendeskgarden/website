/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Timeline } from '@zendeskgarden/react-accordions';
import { Span } from '@zendeskgarden/react-typography';

const Example = () => (
  <Timeline>
    <Timeline.Item>
      <Timeline.OppositeContent>
        <Span hue="grey">Today 9:00 AM</Span>
      </Timeline.OppositeContent>
      <Timeline.Content>
        <Span isBold>Planted seed</Span>
      </Timeline.Content>
    </Timeline.Item>
    <Timeline.Item>
      <Timeline.OppositeContent>
        <Span hue="grey">Feb 08, 9:05 AM</Span>
      </Timeline.OppositeContent>
      <Timeline.Content>
        <Span isBold>Purchased seed</Span>
      </Timeline.Content>
    </Timeline.Item>
    <Timeline.Item>
      <Timeline.OppositeContent>
        <Span hue="grey">Jan 21, 9:13 AM</Span>
      </Timeline.OppositeContent>
      <Timeline.Content>
        <Span isBold>Arranged layout of garden</Span>
      </Timeline.Content>
    </Timeline.Item>
    <Timeline.Item>
      <Timeline.OppositeContent>
        <Span hue="grey">Jan 21, 9:21 AM </Span>
      </Timeline.OppositeContent>
      <Timeline.Content>
        <Span isBold>Chose a gardening location</Span>
      </Timeline.Content>
    </Timeline.Item>
  </Timeline>
);

export default Example;
