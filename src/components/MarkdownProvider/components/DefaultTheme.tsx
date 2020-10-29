/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import React from 'react';
import { StyledCodeBlock as CodeBlock } from './CodeBlock';

const replacer = (key: string, value: unknown) => {
  let retVal = value;

  if (typeof value === 'function') {
    const fn = value.toString();
    const start = fn.indexOf('(');
    const end = fn.indexOf(')') + 1;

    retVal = `${fn.substring(start, end)} => expression`;
  }

  return retVal;
};

const code = JSON.stringify(DEFAULT_THEME, replacer, '  ');

export const DefaultTheme: React.FC = () => (
  <CodeBlock language="json">
    {code.replace(/"palette": \{.*?^\s\s\},/msu, '"palette": { /* see API for details */ },')}
  </CodeBlock>
);
