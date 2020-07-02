/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { SM, MD, LG, Code } from '@zendeskgarden/react-typography';

const marginBottom = `margin-bottom: 14px;`;

const Example = () => (
  <>
    <SM css={marginBottom}>
      <Code>Veggies es bonus vobis</Code>
    </SM>
    <MD css={marginBottom}>
      <Code hue="green">Veggies es bonus vobis</Code>
    </MD>
    <LG>
      <Code hue="yellow">Veggies es bonus vobis</Code>
    </LG>
  </>
);

export default Example;
