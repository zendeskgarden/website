/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Timeline } from '@zendeskgarden/react-accordions';
import { Grid } from '@zendeskgarden/react-grid';
import { Span } from '@zendeskgarden/react-typography';

export const StyledSpan = styled(Span).attrs({ isBold: true })`
  display: block;
`;

const Example = () => (
  <Grid.Row justifyContent="center">
    <Grid.Col sm="auto">
      <Timeline>
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
    </Grid.Col>
  </Grid.Row>
);

export default Example;
