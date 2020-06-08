/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import { Code, Paragraph } from '@zendeskgarden/react-typography';
import { CodeExample } from './components/CodeExample';
import { Configuration } from './components/Configuration';
import { PropSheets } from './components/PropSheets';
import { Usage, Use, Misuse } from './components/Usage';
import { BestPractice, Do, Dont, Caution } from './components/BestPractice';
import {
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5,
  StyledH6,
  StyledBlockquote,
  StyledHr,
  StyledPre,
  StyledStrong,
  StyledEmphasis
} from './components/Typography';
import { Anchor } from '@zendeskgarden/react-buttons';
import { MDSyntaxHighlighter } from './components/Code';
import { UL, OL, LI } from './components/Lists';
import { Table, TR, TH, TD, TBody, THead } from './components/Table';

const GlobalStyle = createGlobalStyle`
  .anchor {
    visibility: hidden;
    margin-left: -${p => p.theme.space.md};
    padding-right: ${p => p.theme.space.xxs};
    line-height: 1;
    color: ${p => p.theme.colors.foreground};
  }

  .anchor:hover {
    color: inherit;
  }

  .anchor[data-garden-focus-visible] {
    visibility: visible;
  }

  h2:hover .anchor,
  h3:hover .anchor,
  h4:hover .anchor,
  h5:hover .anchor,
  h6:hover .anchor {
    visibility: visible;
  }
`;

export const MarkdownProvider: React.FC = ({ children }) => (
  <div>
    <GlobalStyle />
    <MDXProvider
      components={{
        /**
         * Helper components
         */
        CodeExample,
        Configuration,
        PropSheets,
        Usage,
        Use,
        Misuse,
        Do,
        Dont,
        Caution,
        BestPractice,
        /**
         * Markdown elements
         */
        h2: StyledH2,
        h3: StyledH3,
        h4: StyledH4,
        h5: StyledH5,
        h6: StyledH6,
        p: Paragraph,
        a: Anchor,
        blockquote: StyledBlockquote,
        hr: StyledHr,
        strong: StyledStrong,
        em: StyledEmphasis,
        inlineCode: Code,
        pre: StyledPre,
        code: MDSyntaxHighlighter,
        ul: UL,
        ol: OL,
        li: LI,
        table: Table,
        thead: THead,
        tbody: TBody,
        tr: TR,
        td: TD,
        th: TH
      }}
    >
      {children}
    </MDXProvider>
  </div>
);
