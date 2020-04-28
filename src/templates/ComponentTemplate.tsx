/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { PageProps } from 'gatsby';
import RootLayout from 'layouts/Root';
import { SidebarLayout } from 'layouts/Sidebar';
import TitledLayout from 'layouts/Titled';
import SEO from 'components/SEO';
import { MarkdownProvider } from 'components/MarkdownProvider';
import navigation from '../nav/components.yml';
import { IPageData, IPageContext } from './types';

const ComponentLayoutTemplate: React.FC<PageProps<IPageData, IPageContext>> = ({
  data,
  pageContext,
  children
}) => {
  const { mdx } = data;

  return (
    <RootLayout>
      <SEO
        title={`${pageContext.frontmatter.title} / Components`}
        description={pageContext.frontmatter.description || mdx.excerpt}
      />
      <SidebarLayout sidebar={navigation}>
        <TitledLayout
          title={pageContext.frontmatter.title}
          subTitle={pageContext.frontmatter.description}
          toc={mdx.tableOfContents.items}
        >
          <MarkdownProvider>{children}</MarkdownProvider>
        </TitledLayout>
      </SidebarLayout>
    </RootLayout>
  );
};

export default ComponentLayoutTemplate;
