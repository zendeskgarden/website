/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { FC, PropsWithChildren } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Alert } from './components/Alert';
import { CodeExample } from './components/CodeExample';
import { StyledCodeBlock as CodeBlock } from './components/CodeBlock';
import { ColorPalette } from './components/ColorPalette';
import { ColorShades } from './components/ColorShades';
import { Component } from './components/Component';
import { Configuration } from './components/Configuration';
import { ObjectBlock } from './components/ObjectBlock';
import { PropSheet } from './components/PropSheet';
import { Usage, Use, Misuse } from './components/Usage';
import { BestPractice, Do, Dont, Caution } from './components/BestPractice';
import { ImageFigure } from './components/ImageFigure';
import { COMPONENTS, Markdown } from './components/Markdown';
import { OverviewLinks } from './components/OverviewLinks';

/**
 * The CodeBlock component provides it's own `<pre>` tag.
 * This ensures valid DOM nesting.
 */
const Pre: FC<{ children: any }> = ({ children }) => (
  <CodeBlock>{children?.props?.children}</CodeBlock>
);

export const MarkdownProvider: FC<PropsWithChildren> = ({ children }) => (
  <MDXProvider
    components={{
      /**
       * Helper components
       */
      Alert,
      CodeExample,
      ColorPalette,
      ColorShades,
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
      ImageFigure,
      /**
       * Markdown elements
       */
      ...COMPONENTS,
      pre: Pre
    }}
  >
    {children}
  </MDXProvider>
);
