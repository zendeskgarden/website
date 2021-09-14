/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Timeline } from '@zendeskgarden/react-accordions';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Span } from '@zendeskgarden/react-typography';

const Example = () => (
  <Row justifyContent="center">
    <Col sm={9}>
      <Timeline isAlternate>
        <Timeline.Item>
          <Timeline.Content>
            <Span isBold style={{ display: 'block' }}>
              Planted seed
            </Span>
            <Span hue="grey">Today 9:00 AM</Span>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Content>
            <Span isBold style={{ display: 'block' }}>
              Purchased seed
            </Span>
            <Span hue="grey">Feb 08, 9:05 AM</Span>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Content>
            <Span isBold style={{ display: 'block' }}>
              Arranged layout of garden
            </Span>
            <Span hue="grey">Jan 21, 9:13 AM</Span>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Content>
            <Span isBold style={{ display: 'block' }}>
              Chose a gardening location
            </Span>
            <Span hue="grey">Jan 21, 9:21 AM </Span>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </Col>
  </Row>
);

export default Example;
