/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Timeline } from '@zendeskgarden/react-accordions';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Span } from '@zendeskgarden/react-typography';
import { ReactComponent as LocationIcon } from '@zendeskgarden/svg-icons/src/12/location-stroke.svg';
import { ReactComponent as RearrangeIcon } from '@zendeskgarden/svg-icons/src/12/rearrange-stroke.svg';
import { ReactComponent as CartIcon } from '@zendeskgarden/svg-icons/src/12/shopping-cart-stroke.svg';
import { ReactComponent as LeafIcon } from '@zendeskgarden/svg-icons/src/12/leaf-stroke.svg';

export const StyledSpan = styled(Span).attrs({ isBold: true })`
  display: block;
`;

const Example = () => (
  <Row justifyContent="center">
    <Col sm="auto">
      <Timeline>
        <Timeline.Item icon={<LeafIcon />}>
          <Timeline.Content>
            <StyledSpan>Planted seed</StyledSpan>
            <Span hue="grey">Today 9:00 AM</Span>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item icon={<CartIcon />}>
          <Timeline.Content>
            <StyledSpan>Purchased seed</StyledSpan>
            <Span hue="grey">Feb 08, 9:05 AM</Span>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item icon={<RearrangeIcon />}>
          <Timeline.Content>
            <StyledSpan>Arranged layout of garden</StyledSpan>
            <Span hue="grey">Jan 21, 9:13 AM</Span>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item icon={<LocationIcon />}>
          <Timeline.Content>
            <StyledSpan>Chose a gardening location</StyledSpan>
            <Span hue="grey">Jan 21, 9:21 AM </Span>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </Col>
  </Row>
);

export default Example;
