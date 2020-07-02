/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Ellipsis } from '@zendeskgarden/react-typography';

const Example = () => (
  <>
    <Ellipsis>Veggies es bonus vobis, proinde vos postulo.</Ellipsis>
    <Ellipsis style={{ width: 220 }}>Veggies es bonus vobis, proinde vos postulo.</Ellipsis>
    <Ellipsis style={{ width: 165 }}>Veggies es bonus vobis, proinde vos postulo.</Ellipsis>
  </>
);

export default Example;
