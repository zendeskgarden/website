/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
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

/**
 * The SyntaxHighlighter component provides it's own `<pre>` tag.
 * This ensures valid DOM nesting.
 */
export const Pre: React.FC = ({ children }) => {
  return <>{children}</>;
};

export const MarkdownProvider: React.FC = ({ children }) => (
  <>
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
