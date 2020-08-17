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
      <MD tag="span" isMonospace>
        Veggies es bonus vobis.
      </MD>
    </Paragraph>
    <Paragraph>
      <MD tag="span">
        Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip
        chicory salsify pea sprouts fava bean.{' '}
        <Span isMonospace>Dandelion zucchini burdock yarrow chickpea dandelion</Span> sorrel
        courgette turnip greens tigernut soybean radish artichoke wattle seed endive groundnut
        broccoli arugula.
      </MD>
    </Paragraph>
  </>
);

export default Example;
