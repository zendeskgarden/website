/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import ReactSyntaxHighlighter from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark';

export const SyntaxHighlighter: React.FC = ({ children }) => (
  <ReactSyntaxHighlighter language="typescript" style={style}>
    {children}
  </ReactSyntaxHighlighter>
);
