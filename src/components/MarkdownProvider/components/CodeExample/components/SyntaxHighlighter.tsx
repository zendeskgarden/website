/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { math } from 'polished';
import { Prism as ReactSyntaxHighlighter } from 'react-syntax-highlighter';

const colors = {
  background: '#1e1e1e',
  boolean: '#569cd6',
  builtin: '#4ec9b0',
  comment: '#6a9955',
  foreground: '#9cdcfe',
  function: '#dcdcaa',
  keyword: '#c586c0',
  number: '#b5cea8',
  punctuation: '#d4d4d4',
  regex: '#d16969',
  string: '#ce9178'
};

export const style = {
  'pre[class*="language-"]': { backgroundColor: colors.background },
  'code[class*="language-"]': { color: colors.foreground },

  'attr-name': { color: colors.foreground },
  'attr-value': { color: colors.string },
  boolean: { color: colors.boolean },
  builtin: { color: colors.builtin },
  cdata: { color: colors.comment },
  'class-name': { color: colors.builtin },
  comment: { color: colors.comment },
  constant: { color: colors.foreground },
  doctype: { color: colors.comment },
  function: { color: colors.function },
  keyword: { color: colors.keyword },
  number: { color: colors.number },
  operator: { color: colors.punctuation },
  prolog: { color: colors.comment },
  punctuation: { color: colors.punctuation },
  regex: { color: colors.regex },
  string: { color: colors.string },
  tag: { color: colors.foreground }
};

const StyledSyntaxHighlighter = styled(ReactSyntaxHighlighter)`
  padding: ${p => p.theme.space.sm};
  overflow: auto;
  line-height: ${p => p.theme.lineHeights.md};
  font-family: ${p => p.theme.fonts.mono};
  font-size: ${p => math(`${p.theme.fontSizes.md} - 1`)};
`;

export const SyntaxHighlighter: React.FC = ({ children }) => (
  <StyledSyntaxHighlighter language="tsx" style={style}>
    {children}
  </StyledSyntaxHighlighter>
);
