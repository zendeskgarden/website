/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Blockquote, Paragraph, MD } from '@zendeskgarden/react-typography';

const Example = () => (
  <MD>
    <Paragraph>
      Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth
      tatsoi tomatillo melon azuki bean garlic.
    </Paragraph>
    <Blockquote>Life begins the day you start a garden.</Blockquote>
    <Paragraph>
      Lotus root spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin
      onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard
      wakame kohlrabi beetroot carrot watercress. Cordn amaranth salsify bunya nuts nori azuki bean
      chickweed potato bell pepper artichoke.
    </Paragraph>
    <Blockquote>
      In garden arrangement, as in all other kinds of decorative work, one has not only to acquire a
      knowledge of what to do, but also to gain some wisdom in perceiving what it is well to let
      alone.
    </Blockquote>
  </MD>
);

export default Example;
