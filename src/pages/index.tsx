/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import svg4everybody from 'svg4everybody';
import SEO from 'components/SEO';
import RootLayout from 'layouts/Root';
import HomeLayout from 'layouts/Home';

const IndexPage: React.FC = () => {
  useEffect(() => svg4everybody({ polyfill: true }));

  return (
    <RootLayout hasSkipNav={false} path="/">
      <SEO />
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
    mdx(fileAbsolutePath: { eq: $fileAbsolutePath }) {
      id
      excerpt
      body
      tableOfContents(maxDepth: 3)
      package: reactPackage {
        version
        name
        description
        packageName
      }
      components: reactComponents {
        name
        description
        extends
        props
      }
    }
  }
`;
