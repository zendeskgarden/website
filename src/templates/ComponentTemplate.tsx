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
import { MDXRenderer } from 'gatsby-plugin-mdx';

const ComponentLayoutTemplate: React.FC<{ data: any }> = ({ data: { mdx, navigation } }) => {
  return (
    <RootLayout>
      <SEO
        title={`${mdx.frontmatter.title} / Components`}
        description={mdx.frontmatter.description || mdx.excerpt}
      />
      <SidebarLayout sidebar={navigation.childrenNavYaml}>
        <TitledLayout
          title={mdx.frontmatter.title}
          subTitle={mdx.frontmatter.description}
          toc={mdx.tableOfContents.items}
        >
          <MarkdownProvider>
            <MDXRenderer package={mdx.reactPackage} propSheets={mdx.reactPropSheets}>
              {mdx.body}
            </MDXRenderer>
          </MarkdownProvider>
        </TitledLayout>
      </SidebarLayout>
    </RootLayout>
  );
};

export default ComponentLayoutTemplate;

export const pageQuery = graphql`
  query ComponentPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      excerpt
      tableOfContents(maxDepth: 2)
      frontmatter {
        title
        description
      }
      reactPackage {
        version
        name
        description
      }
      reactPropSheets {
        displayName
        description
        methods
        props
      }
    }
    navigation: file(sourceInstanceName: { eq: "components" }, relativePath: { eq: "nav.yml" }) {
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
