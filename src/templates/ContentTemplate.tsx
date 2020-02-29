/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { RootLayout } from 'layouts/root';
import { SEO } from 'components/seo';
import { SidebarLayout } from 'layouts/side-bar';
import { TitledLayout } from 'layouts/titled';
import { MaxWidthLayout } from 'layouts/max-width';
import { XXXL, XXL, XL, LG, MD, Code } from '@zendeskgarden/react-typography';
import { TOCLayout } from 'layouts/toc';

const shortcodes = {
  h1: (props: any) => <XXXL tag="h1" {...props} />,
  h2: (props: any) => <XXL tag="h2" {...props} />,
  h3: (props: any) => <XL tag="h3" {...props} />,
  h4: (props: any) => <LG tag="h4" {...props} />,
  h5: (props: any) => <LG tag="h5" {...props} />,
  h6: (props: any) => <LG tag="h6" {...props} />,
  code: (props: any) => <Code {...props} />,
  p: (props: any) => <MD tag="p" {...props} />,
  Link
};

const ContentLayoutTemplate: React.FC<{ data: any }> = ({ data: { mdx, file } }) => {
  const links = file.childrenNavYaml.map((nav: any) => {
    return (
      <div key={nav.title}>
        <h2>{nav.title}</h2>
        <ul>
          {nav.items.map((item: any) => (
            <li key={item.id}>
              <Link to={`/content/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  });

  return (
    <RootLayout>
      <SEO title={mdx.frontmatter.title} description={mdx.frontmatter.description || mdx.excerpt} />
      <SidebarLayout sidebar={links}>
        <MaxWidthLayout>
          <TOCLayout toc={mdx.tableOfContents}>
            <TitledLayout title={mdx.frontmatter.title} description={mdx.frontmatter.description}>
              <MDXProvider components={shortcodes}>
                <MDXRenderer>{mdx.body}</MDXRenderer>
              </MDXProvider>
            </TitledLayout>
          </TOCLayout>
        </MaxWidthLayout>
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
      tableOfContents
      frontmatter {
        title
        description
      }
    }
    file(sourceInstanceName: { eq: "content" }, relativePath: { eq: "nav.yml" }) {
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
