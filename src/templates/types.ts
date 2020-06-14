/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ComponentDoc } from 'react-docgen-typescript';
import { IHeading } from 'layouts/Titled/components/TOC';

interface IPropData {
  description: string;
  default: string;
  required: boolean;
  type: string;
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
    propSheets: [ComponentDoc];
    components: [
      {
        name: string;
        description: string;
        props: Record<string, IPropData>;
      }
    ];
  };
}

export interface IPageContext {
  frontmatter: {
    title?: string;
    description?: string;
  };
}
