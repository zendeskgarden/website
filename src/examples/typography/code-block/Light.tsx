/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { CodeBlock } from '@zendeskgarden/react-typography';

const Example = () => (
  <CodeBlock isLight>{`
/**
 * Copy the given value to the clipboard.
 *
 * @param {string} value The value to copy
 */
const copy = (value: string) => {
  const element = document.createElement('textarea');

  element.readOnly = true;
  element.style.position = 'absolute';
  element.style.left = '-9999px';
  document.body.appendChild(element);
  element.value = value;
  element.select();
  document.execCommand('copy');
  element.remove();
};
  `}</CodeBlock>
);

export default Example;
