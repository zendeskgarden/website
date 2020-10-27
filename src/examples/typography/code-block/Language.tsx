/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { CodeBlock } from '@zendeskgarden/react-typography';

const Example = () => (
  <CodeBlock language="css">{`
/* CSS utility for making hidden content accessible to screen readers */
.sr-only {
  position: absolute;
  margin: -1px;
  border-width: 0;
  clip: rect(0, 0, 0, 0);
  padding: 0;
  width: 1px;
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
}
  `}</CodeBlock>
);

export default Example;
