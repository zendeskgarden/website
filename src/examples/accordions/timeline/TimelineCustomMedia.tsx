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
import { ReactComponent as EyeIcon } from '@zendeskgarden/svg-icons/src/12/eye-stroke.svg';
import { ReactComponent as EmailIcon } from '@zendeskgarden/svg-icons/src/12/email-stroke.svg';
import { ReactComponent as CartIcon } from '@zendeskgarden/svg-icons/src/12/shopping-cart-stroke.svg';
import { ReactComponent as ClipboardIcon } from '@zendeskgarden/svg-icons/src/12/clipboard-blank-stroke.svg';

const Example = () => (
  <Row justifyContent="center">
    <Col sm={4}>
      <Timeline>
        <Timeline.Item icon={<EmailIcon />}>
          <Timeline.Content>
            <Span isBold style={{ display: 'block' }}>
              Issue with order
            </Span>
            <Span hue="grey">Today 9:00 AM</Span>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item icon={<ClipboardIcon />}>
          <Timeline.Content>
            <Span isBold style={{ display: 'block' }}>
              Ordered 3 items
            </Span>
            <Span hue="grey">Feb 08, 9:05 AM</Span>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item icon={<CartIcon />}>
          <Timeline.Content>
            <Span isBold style={{ display: 'block' }}>
              Added 3 items to cart
            </Span>
            <Span hue="grey">Jan 21, 9:13 AM</Span>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item icon={<EyeIcon />}>
          <Timeline.Content>
            <Span isBold style={{ display: 'block' }}>
              Viewed product page
            </Span>
            <Span hue="grey">Jan 21, 9:21 AM </Span>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </Col>
  </Row>
);

export default Example;
