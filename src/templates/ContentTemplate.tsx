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
import { HeadlineLayout } from 'layouts/headline';
import { css } from 'styled-components';
import { getColor } from '@zendeskgarden/react-theming';

const shortcodes = {
  h1: (props: any) => (
    <XXXL
      tag="h1"
      css={css`
        margin-top: ${p => p.theme.space.lg};
      `}
      {...props}
    />
  ),
  h2: (props: any) => (
    <XXL
      tag="h2"
      css={css`
        margin-top: ${p => p.theme.space.md};
        margin-bottom: ${p => p.theme.space.sm};
      `}
      {...props}
    />
  ),
  h3: (props: any) => (
    <XL
      tag="h3"
      css={css`
        margin-top: ${p => p.theme.space.sm};
        margin-bottom: ${p => p.theme.space.xs};
      `}
      {...props}
    />
  ),
  h4: (props: any) => <LG tag="h4" {...props} />,
  h5: (props: any) => <LG tag="h5" {...props} />,
  h6: (props: any) => <LG tag="h6" {...props} />,
  code: (props: any) => <Code {...props} />,
  p: (props: any) => (
    <MD
      tag="p"
      css={css`
        margin-bottom: ${p => p.theme.space.xs};
      `}
      {...props}
    />
  ),
  Link
};

const ContentLayoutTemplate: React.FC<{ data: any }> = ({ data: { mdx, file } }) => {
  const links = file.childrenNavYaml.map((nav: any) => {
    return (
      <div
        key={nav.title}
        css={css`
          margin-bottom: ${p => p.theme.space.md};
        `}
      >
        <MD
          css={css`
            color: ${p => getColor('neutralHue', 500, p.theme)};
            font-weight: ${p => p.theme.fontWeights.semibold};
          `}
        >
          {nav.title}
        </MD>
        <ul>
          {nav.items.map((item: any) => (
            <li key={item.id}>
              <Link
                to={`/content/${item.id}`}
                activeStyle={{ color: 'red' }}
                css={css`
                  color: ${p => p.theme.colors.foreground};
                `}
              >
                {item.title}
              </Link>
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
        <HeadlineLayout>
          <div
            css={css`
              padding: ${p => p.theme.space.md};
            `}
          >
            <MaxWidthLayout>
              <TOCLayout toc={mdx.tableOfContents}>
                <TitledLayout
                  title={mdx.frontmatter.title}
                  description={mdx.frontmatter.description}
                  author="Contributing author"
                  modifiedDate={mdx.parent.modifiedTime}
                >
                  <MDXProvider components={shortcodes}>
                    <MDXRenderer>{mdx.body}</MDXRenderer>
                  </MDXProvider>
                </TitledLayout>
              </TOCLayout>
            </MaxWidthLayout>
          </div>
        </HeadlineLayout>
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
      parent {
        ... on File {
          modifiedTime(formatString: "MM/DD/YYYY")
        }
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
