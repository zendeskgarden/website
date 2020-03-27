/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Link } from 'gatsby';

import SEO from 'components/SEO';
import RootLayout from 'layouts/Root';
import MaxWidthLayout from 'layouts/MaxWidth';

const Components: React.FC = () => (
  <RootLayout>
    <SEO title="Components" />
    <MaxWidthLayout>
      <h1>Components</h1>
      <p>Todo</p>
      <Link to="/">Go back to the homepage</Link>
    </MaxWidthLayout>
  </RootLayout>
);

export default Components;
