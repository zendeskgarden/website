/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { graphql, HeadProps } from 'gatsby';
import { SEO } from 'components/SEO';
import RootLayout from 'layouts/Root';
import HomeLayout from 'layouts/Home';

export const Head = (props: HeadProps) => <SEO {...props} />;

const IndexPage: React.FC = () => {
  return (
    <RootLayout hasSkipNav={false} path="/">
      <HomeLayout />
    </RootLayout>
  );
};

export default IndexPage;

/**
 * Global GraphQL Fragments
 */
export const SidebarPageFragment = graphql`
  fragment SidebarPageFragment on Query {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      tableOfContents(maxDepth: 3)
      navigation {
        id: url
        title
        items {
          id: url
          title
          items {
            id: url
            title
          }
        }
      }
      package: reactPackage {
        version
        name
        description
      }
      components: reactComponents {
        name
        description
        extends
        props
      }
      subcomponents: reactSubcomponents {
        name
        description
        extends
        props
      }
    }
  }
`;
