/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { graphql } from 'gatsby';
import RootLayout from 'layouts/Root';
import { SidebarLayout } from 'layouts/Sidebar';
import TitledLayout from 'layouts/Titled';
import SEO from 'components/SEO';
import { MarkdownProvider } from 'components/MarkdownProvider';

const ContentLayoutTemplate: React.FC<{ data: any }> = ({ data: { mdx, navigation } }) => {
  return (
    <RootLayout>
      <SEO
        title={`${mdx.frontmatter.title} / Content`}
        description={mdx.frontmatter.description || mdx.excerpt}
      />
      <SidebarLayout sidebar={navigation.childrenNavYaml}>
        <TitledLayout
          title={mdx.frontmatter.title}
          subTitle={mdx.frontmatter.description}
          toc={mdx.tableOfContents.items}
        >
          <MarkdownProvider>{mdx.body}</MarkdownProvider>
        </TitledLayout>
      </SidebarLayout>
    </RootLayout>
  );
};

export default ContentLayoutTemplate;

export const pageQuery = graphql`
  query ContentPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      excerpt
      tableOfContents(maxDepth: 2)
      frontmatter {
        title
        description
      }
    }
    navigation: file(sourceInstanceName: { eq: "content" }, relativePath: { eq: "nav.yml" }) {
      childrenNavYaml {
        title
        items {
          id
          title
        }
      }
    }
  }
`;
