/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { GatsbyLinkProps } from 'gatsby';
import { Link } from '../../../layouts/Root/components/StyledNavigationLink';
import { css } from 'styled-components';

export const HomeLink: React.FC<Omit<GatsbyLinkProps<any>, 'ref'>> = ({ children, ...props }) => (
  <Link
    {...props}
    css={css`
      &:hover {
        text-decoration: underline;
      }
    `}
  >
    {children} →
  </Link>
);
