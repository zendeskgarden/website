/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Row } from '@zendeskgarden/react-grid';
import { IconButton } from '@zendeskgarden/react-buttons';
import { ReactComponent as ZendeskIcon } from '@zendeskgarden/svg-icons/src/26/zendesk.svg';

const Example = () => (
  <Row justifyContent="around">
    <IconButton>
      <ZendeskIcon />
    </IconButton>
    <IconButton isBasic={false}>
      <ZendeskIcon />
    </IconButton>
    <IconButton isPrimary>
      <ZendeskIcon />
    </IconButton>
  </Row>
);

export default Example;
