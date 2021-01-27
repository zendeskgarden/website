/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { IHeading } from 'layouts/Titled/components/TOC';

interface IPropData {
  description: string;
  defaultValue: string;
  required: boolean;
  type: string;
  params: Record<string, string>;
}

export interface IComponentData {
  name: string;
  description: string;
  extends: string;
  props: Record<string, IPropData>;
}

export interface IPageData {
  mdx: {
    id: string;
    excerpt: any;
    body: any;
    tableOfContents: IHeading;
    package?: {
      version: string;
      name: string;
      description: string;
    };
    components: [IComponentData];
  };
}

export interface IPageContext {
  frontmatter: {
    title?: string;
    description?: string;
  };
}
