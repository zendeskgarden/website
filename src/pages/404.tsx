/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';

import { RootLayout } from 'layouts/root';
import { SEO } from 'components/seo';

const NotFoundPage: React.FC = () => (
  <RootLayout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </RootLayout>
);

export default NotFoundPage;
