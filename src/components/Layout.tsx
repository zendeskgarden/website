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
import { SEO } from './SEO';
import { IPageData, IPageContext } from '../templates/types';
import { GlobalStyles } from './GlobalStyles';

// TODO: remove and add to each page.
export const Head = ({ pageContext, ...props }: { pageContext: IPageContext }) => (
  <SEO
    {...props}
    // TODO: change to use group for title suffix
    title={`${pageContext.frontmatter.title} / Components`}
    description={pageContext.frontmatter.description}
  />
);

export const Layout: React.FC<PageProps<IPageData, IPageContext>> = ({
  data,
  pageContext,
  children
}) => {
  if (!pageContext || !pageContext.slug) return children;

  const navigation = (data || {}).mdx ? data.mdx.navigation : [];
  const toc = (data || {}).mdx ? data.mdx.tableOfContents.items : [];
  const frontmatter = pageContext.frontmatter || {};

  return (
    <>
      <GlobalStyles />
      <RootLayout>
        <SidebarLayout sidebar={navigation}>
          <TitledLayout title={frontmatter.title} subtitle={frontmatter.description} toc={toc}>
            {children}
          </TitledLayout>
        </SidebarLayout>
      </RootLayout>
    </>
  );
};
