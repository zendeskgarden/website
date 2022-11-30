/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { GlobalAlert } from '@zendeskgarden/react-notifications';

const Example = () => (
  <GlobalAlert type="info">
    <GlobalAlert.Content>
      <GlobalAlert.Title>Info</GlobalAlert.Title>
      Gumbo beet greens corn soko endive gumbo gourd.
    </GlobalAlert.Content>
    <GlobalAlert.Close aria-label="Close Global Alert" />
  </GlobalAlert>
);

export default Example;
