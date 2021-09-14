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
import { ReactComponent as LocationIcon } from '@zendeskgarden/svg-icons/src/12/location-stroke.svg';
import { ReactComponent as RearrangeIcon } from '@zendeskgarden/svg-icons/src/12/rearrange-stroke.svg';
import { ReactComponent as CartIcon } from '@zendeskgarden/svg-icons/src/12/shopping-cart-stroke.svg';
import { ReactComponent as LeafIcon } from '@zendeskgarden/svg-icons/src/12/leaf-stroke.svg';

const Example = () => (
  <Row justifyContent="center">
    <Col sm={5}>
      <Timeline>
        <Timeline.Item icon={<LeafIcon />}>
          <Timeline.Content>
            <Span isBold style={{ display: 'block' }}>
              Planted seed
            </Span>
            <Span hue="grey">Today 9:00 AM</Span>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item icon={<CartIcon />}>
          <Timeline.Content>
            <Span isBold style={{ display: 'block' }}>
              Purchased seed
            </Span>
            <Span hue="grey">Feb 08, 9:05 AM</Span>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item icon={<RearrangeIcon />}>
          <Timeline.Content>
            <Span isBold style={{ display: 'block' }}>
              Arranged layout of garden
            </Span>
            <Span hue="grey">Jan 21, 9:13 AM</Span>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item icon={<LocationIcon />}>
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
