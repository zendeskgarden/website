/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { OrderedList, UnorderedList } from '@zendeskgarden/react-typography';

const marginBottom = `margin-bottom: 18px;`;

const Example = () => (
  <>
    <OrderedList size="small" css={marginBottom}>
      <OrderedList.Item>
        The world&apos;s tallest-growing tree is the coast redwood
      </OrderedList.Item>
      <OrderedList.Item>Bamboo can grow 35 inches in a single day</OrderedList.Item>
      <OrderedList.Item>During the 1600s, tulips were worth more than gold</OrderedList.Item>
    </OrderedList>
    <OrderedList size="medium" css={marginBottom}>
      <OrderedList.Item>
        The world&apos;s tallest-growing tree is the coast redwood
      </OrderedList.Item>
      <OrderedList.Item>Bamboo can grow 35 inches in a single day</OrderedList.Item>
      <OrderedList.Item>During the 1600s, tulips were worth more than gold</OrderedList.Item>
    </OrderedList>
    <UnorderedList size="large">
      <UnorderedList.Item>
        The world&apos;s tallest-growing tree is the coast redwood
      </UnorderedList.Item>
      <UnorderedList.Item>Bamboo can grow 35 inches in a single day</UnorderedList.Item>
      <UnorderedList.Item>During the 1600s, tulips were worth more than gold</UnorderedList.Item>
    </UnorderedList>
  </>
);

export default Example;
