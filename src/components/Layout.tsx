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
import { IPageData, IPageContext } from './types';
import { GlobalStyles } from './GlobalStyles';
import { IHeading } from 'layouts/Titled/components/TOC';

export const Layout: React.FC<PageProps<IPageData, IPageContext>> = ({
  data,
  pageContext,
  children
}) => {
  if (!pageContext?.slug) return children;

  let navigation = [];
  let toc: IHeading[] = [];

  if (data?.mdx) {
    navigation = data.mdx.navigation || [];
    toc = data.mdx.tableOfContents.items || [];
  }

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
