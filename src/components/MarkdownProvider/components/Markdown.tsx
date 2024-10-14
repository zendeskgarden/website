/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { PropsWithChildren } from 'react';
import MD from 'react-markdown';
import { Code } from '@zendeskgarden/react-typography';
import { StyledAnchor as Anchor } from './Anchor';
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
} as any;

export const Markdown: React.FC<PropsWithChildren> = () => <MD components={COMPONENTS} />;
