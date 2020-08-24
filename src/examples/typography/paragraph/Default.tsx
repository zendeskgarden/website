/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Paragraph, MD } from '@zendeskgarden/react-typography';

const Example = () => (
  <>
    <Paragraph>
      <MD tag="span">
        Turnip greens yarrow ricebean rutabaga endive cauliflower sear lettuce kohlrabi amaranth
        water spinach avacado daikon napa cabbage asparagus winter purslane kale. Celery potato
        scallion desert raisin horseradish spinach carrot soko.
      </MD>
    </Paragraph>
    <Paragraph>
      <MD tag="span">
        Lotus root spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin
        onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard
        wakame kohlrabi beetroot carrot watercress. Cordn amaranth salsify bunya nuts nori azuki
        bean chickweed potato bell pepper artichoke.
      </MD>
    </Paragraph>
  </>
);

export default Example;
