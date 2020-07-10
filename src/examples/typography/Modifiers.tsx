/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { MD, Span } from '@zendeskgarden/react-typography';

const Example = () => (
  <>
    <MD>
      Veggies es bonus vobis, <Span isBold>pronide vos postulo.</Span>
    </MD>
    <MD>
      Veggies es bonus vobis, <Span isMonospace>pronide vos postulo.</Span>
    </MD>
  </>
);

export default Example;
