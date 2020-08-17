/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Paragraph, Span, MD } from '@zendeskgarden/react-typography';
import { ReactComponent as AsteriskIcon } from '@zendeskgarden/svg-icons/src/16/asterisk-stroke.svg';

const Example = () => (
  <>
    <Paragraph>
      <MD tag="span">
        <Span>
          Veggies es{' '}
          <Span.Icon>
            <AsteriskIcon />
          </Span.Icon>{' '}
          bonus vobis.
        </Span>
      </MD>
    </Paragraph>
    <Paragraph>
      <MD tag="span">
        <Span>
          Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip
          chicory salsify pea sprouts fava bean. Dandelion zucchini burdock yarrow chickpea
          dandelion sorrel courgette turnip greens tigernut soybean radish artichoke wattle seed
          endive groundnut broccoli arugula.{' '}
          <Span.Icon>
            <AsteriskIcon />
          </Span.Icon>
        </Span>
      </MD>
    </Paragraph>
  </>
);

export default Example;
