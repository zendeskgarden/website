/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { Paragraph, SM, MD, LG } from '@zendeskgarden/react-typography';
import { Row, Col } from '@zendeskgarden/react-grid';

const StyledCol = styled(Col)`
  ${p => mediaQuery('down', 'xs', p.theme)} {
    margin-top: ${p => p.theme.space.xl};
  }
`;

const Example = () => (
  <Row>
    <Col sm={4}>
      <Paragraph size="small">
        <SM tag="span">
          &lt;SM&gt;Lotus root spinach fennel kombu maize bamboo shoot green bean swiss chard
          seakale pumpkin onion chickpea gram corn pea.
        </SM>
      </Paragraph>
      <Paragraph size="small">
        <SM tag="span">
          Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot
          watercress.
        </SM>
      </Paragraph>
      <Paragraph size="small">
        <SM tag="span">
          Cordn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.
        </SM>
      </Paragraph>
    </Col>
    <StyledCol sm={4}>
      <Paragraph size="medium">
        <MD tag="span">
          &lt;MD&gt;Lotus root spinach fennel kombu maize bamboo shoot green bean swiss chard
          seakale pumpkin onion chickpea gram corn pea.
        </MD>
      </Paragraph>
      <Paragraph size="medium">
        <MD tag="span">
          Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot
          watercress.
        </MD>
      </Paragraph>
      <Paragraph size="medium">
        <MD tag="span">
          Cordn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.
        </MD>
      </Paragraph>
    </StyledCol>
    <StyledCol sm={4}>
      <Paragraph size="large">
        <LG tag="span">
          &lt;LG&gt;Lotus root spinach fennel kombu maize bamboo shoot green bean swiss chard
          seakale pumpkin onion chickpea gram corn pea.
        </LG>
      </Paragraph>
      <Paragraph size="large">
        <LG tag="span">
          Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot
          watercress.
        </LG>
      </Paragraph>
      <Paragraph size="large">
        <LG tag="span">
          Cordn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.
        </LG>
      </Paragraph>
    </StyledCol>
  </Row>
);

export default Example;
