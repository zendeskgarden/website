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
import { StyledCodeBlock as CodeBlock } from './components/CodeBlock';
import { ColorPalette } from './components/ColorPalette';
import { Component } from './components/Component';
import { Configuration } from './components/Configuration';
import { ObjectBlock } from './components/ObjectBlock';
import { PropSheet } from './components/PropSheet';
import { Usage, Use, Misuse } from './components/Usage';
import { BestPractice, Do, Dont, Caution } from './components/BestPractice';
import { COMPONENTS, Markdown } from './components/Markdown';
import { OverviewLinks } from './components/OverviewLinks';

/**
 * The CodeBlock component provides it's own `<pre>` tag.
 * This ensures valid DOM nesting.
 */
const Pre: React.FC = ({ children }) => <>{children}</>; // eslint-disable-line react/jsx-no-useless-fragment

export const MarkdownProvider: React.FC = ({ children }) => (
  <MDXProvider
    components={{
      /**
       * Helper components
       */
      CodeExample,
      ColorPalette,
      Component,
      Configuration,
      ObjectBlock,
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
      code: CodeBlock
    }}
  >
    {children}
  </MDXProvider>
);
