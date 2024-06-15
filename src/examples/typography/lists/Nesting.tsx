/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { Grid } from '@zendeskgarden/react-grid';
import { OrderedList, UnorderedList } from '@zendeskgarden/react-typography';

const StyledCol = styled(Grid.Col)`
  ${p => mediaQuery('down', 'xs', p.theme)} {
    margin-top: ${p => p.theme.space.md};
  }
`;

const Example = () => (
  <Grid.Row>
    <Grid.Col>
      <OrderedList>
        <OrderedList.Item>
          Gumbo beet greens
          <OrderedList type="lower-alpha">
            <OrderedList.Item>
              Parsley shallot courgette
              <OrderedList type="lower-roman">
                <OrderedList.Item>Celery potato scallion</OrderedList.Item>
                <OrderedList.Item>Turnip cauliflower yarrow</OrderedList.Item>
                <OrderedList.Item>Corn amaranth salsify</OrderedList.Item>
              </OrderedList>
            </OrderedList.Item>
            <OrderedList.Item>Pea horseradish azuki</OrderedList.Item>
            <OrderedList.Item>Chickweed okra coriander</OrderedList.Item>
          </OrderedList>
        </OrderedList.Item>
        <OrderedList.Item>Grape kakadu plum</OrderedList.Item>
        <OrderedList.Item>Water spinach arugula</OrderedList.Item>
      </OrderedList>
    </Grid.Col>
    <StyledCol>
      <UnorderedList>
        <UnorderedList.Item>
          Gumbo beet greens
          <UnorderedList type="circle">
            <UnorderedList.Item>
              Parsley shallot courgette
              <UnorderedList type="square">
                <UnorderedList.Item>Celery potato scallion</UnorderedList.Item>
                <UnorderedList.Item>Turnip cauliflower yarrow</UnorderedList.Item>
                <UnorderedList.Item>Corn amaranth salsify</UnorderedList.Item>
              </UnorderedList>
            </UnorderedList.Item>
            <UnorderedList.Item>Pea horseradish azuki</UnorderedList.Item>
            <UnorderedList.Item>Chickweed okra coriander</UnorderedList.Item>
          </UnorderedList>
        </UnorderedList.Item>
        <UnorderedList.Item>Grape kakadu plum</UnorderedList.Item>
        <UnorderedList.Item>Water spinach arugula</UnorderedList.Item>
      </UnorderedList>
    </StyledCol>
  </Grid.Row>
);

export default Example;
