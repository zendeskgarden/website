/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import './markdown.css';

export const MarkdownProvider: React.FC<{ children: string }> = ({ children }) => (
  <div className="markdown-body">
    <MDXProvider components={{}}>
      <MDXRenderer>{children}</MDXRenderer>
    </MDXProvider>
  </div>
);
