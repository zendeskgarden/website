/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import ReactSyntaxHighlighter from 'react-syntax-highlighter';
import dracula from 'react-syntax-highlighter/dist/esm/styles/hljs/dracula';

const StyledPre = styled.pre`
  margin: ${p => p.theme.space.md} 0;
  border-radius: ${p => p.theme.borderRadii.md};
  /* stylelint-disable-next-line declaration-no-important */
  padding: ${p => p.theme.space.sm} !important;
  overflow: auto;
`;

export const MDSyntaxHighlighter: React.FC<HTMLAttributes<HTMLPreElement>> = ({
  children,
  className
}) => {
  let language = undefined;

  if (className) {
    language = className.replace('language-', '');
  }

  return (
    <ReactSyntaxHighlighter PreTag={StyledPre} language={language} style={dracula}>
      {children}
    </ReactSyntaxHighlighter>
  );
};
