/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Paragraph, Span, MD } from '@zendeskgarden/react-typography';

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
        <Span isBold>
          Lotus root spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin
        </Span>
        onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard
        wakame kohlrabi beetroot carrot watercress.{' '}
        <Span isMonospace>
          <Span isBold>Cordn amaranth salsify bunya</Span> nuts nori azuki bean
        </Span>
        chickweed potato bell pepper artichoke.{' '}
      </MD>
    </Paragraph>
  </>
);

export default Example;
