/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

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

interface IObjectBlockProps {
  replacementPattern?: string;
  replacementValue?: string;
}

export const ObjectBlock: React.FC<IObjectBlockProps> = props => {
  let code = JSON.stringify(props.children, replacer, '  ');

  if (props.replacementPattern && props.replacementValue) {
    code = code.replace(props.replacementPattern, props.replacementValue);
  }

  return <CodeBlock language="json">{code}</CodeBlock>;
};
