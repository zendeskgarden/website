/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import { Code } from '@zendeskgarden/react-typography';
import { CodeExample } from './components/CodeExample';
import { Configuration } from './components/Configuration';
import { PropSheet } from './components/PropSheet';
import { Usage, Use, Misuse } from './components/Usage';
import { BestPractice, Do, Dont, Caution } from './components/BestPractice';
import { COMPONENTS, Markdown } from './components/Markdown';
import { MDSyntaxHighlighter } from './components/Code';
import { OverviewLinks } from './components/OverviewLinks';

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

/**
 * The SyntaxHighlighter component provides it's own `<pre>` tag.
 * This ensures valid DOM nesting.
 */
export const Pre: React.FC = ({ children }) => {
  return <>{children}</>;
};

export const MarkdownProvider: React.FC = ({ children }) => (
  <>
    <GlobalStyle />
    <MDXProvider
      components={{
        /**
         * Helper components
         */
        CodeExample,
        Configuration,
        PropSheet,
        Usage,
        Use,
        Misuse,
        Do,
        Dont,
        Caution,
        BestPractice,
        Markdown,
        OverviewLinks,
        /**
         * Markdown elements
         */
        ...COMPONENTS,
        inlineCode: Code,
        pre: Pre,
        code: MDSyntaxHighlighter
      }}
    >
      {children}
    </MDXProvider>
  </>
);
