/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Link } from 'gatsby';

import { RootLayout } from 'layouts/root';
import { Image } from 'components/image';
import { SEO } from 'components/seo';

const IndexPage: React.FC = () => (
  <RootLayout>
    <SEO title="Home" />
    <h1>Hello everyone</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </RootLayout>
);

export default IndexPage;
