/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Alert, Title, Close } from '@zendeskgarden/react-notifications';

const Example = () => (
  <Alert type="warning">
    <Title>Warning</Title>
    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water
    <Close aria-label="Close Alert" />
  </Alert>
);

export default Example;
