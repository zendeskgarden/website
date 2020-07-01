/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ReactElement, ReactNode } from 'react';
import remark from 'remark';
import remark2react from 'remark-react';
import VFile from 'vfile';
import { Anchor } from '@zendeskgarden/react-buttons';
import { Code } from '@zendeskgarden/react-typography';
import { UL, OL, LI } from './Lists';
import { StyledTable as Table, TR, TH, TD, TBody, THead } from './Table';
import {
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5,
  StyledH6,
  StyledBlockquote,
  StyledHr,
  StyledParagraph,
  StyledStrong,
  StyledEmphasis
} from './Typography';

export const COMPONENTS = {
  h2: StyledH2,
  h3: StyledH3,
  h4: StyledH4,
  h5: StyledH5,
  h6: StyledH6,
  p: StyledParagraph,
  a: Anchor,
  blockquote: StyledBlockquote,
  hr: StyledHr,
  strong: StyledStrong,
  em: StyledEmphasis,
  code: Code,
  ul: UL,
  ol: OL,
  li: LI,
  table: Table,
  thead: THead,
  tbody: TBody,
  tr: TR,
  td: TD,
  th: TH
};

const PROCESSOR = remark().use(remark2react, { remarkReactComponents: COMPONENTS });

interface IMarkdown extends VFile.VFile {
  result: ReactElement;
}

const toMarkdown = (node: ReactNode) => {
  const element = (PROCESSOR.processSync(node as string) as IMarkdown).result;

  return element.props.children;
};

export const Markdown: React.FC = ({ children }) => <>{toMarkdown(children)}</>;
