/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ReactNode } from 'react';
import { graphql, useStaticQuery, HeadProps } from 'gatsby';
import { PALETTE } from '@zendeskgarden/react-theming';
import { IPageContext, IPageData } from './types';

interface ISEOProps {
  title?: string;
  description?: string;
  children?: ReactNode;
}

export const SEO = ({
  title,
  description,
  pageContext,
  children
}: HeadProps<IPageData, IPageContext> & ISEOProps): React.JSX.Element => {
  const { frontmatter = {} } = pageContext;

  const { site } = useStaticQuery(graphql`
    query PageMetadata {
      site {
        siteMetadata {
          title
          siteUrl
          description
        }
      }
    }
  `);

  const getTitle = () => {
    let retVal = title;

    if (!retVal && frontmatter.title) {
      if (pageContext.group) {
        const pillar = pageContext.group.charAt(0).toUpperCase() + pageContext.group.slice(1);

        retVal = `${frontmatter.title} / ${pillar} / ${site.siteMetadata.title}`;
      } else {
        retVal = `${frontmatter.title} / ${site.siteMetadata.title}`;
      }
    } else {
      retVal = site.siteMetadata.title;
    }

    return retVal;
  };

  return (
    <>
      <title>{getTitle()}</title>
      {[
        {
          name: 'application-name',
          content: site.siteMetadata.title
        },
        {
          name: 'description',
          content: description || frontmatter.description || site.siteMetadata.description
        },
        {
          name: 'msapplication-config',
          content: '/browserconfig.xml'
        },
        {
          property: 'og:title',
          content: site.siteMetadata.title
        },
        {
          property: 'og:description',
          content: site.siteMetadata.description
        },
        {
          property: 'og:image',
          content: `${site.siteMetadata.siteUrl}/og-image.png`
        },
        {
          property: 'og:image:alt',
          content: site.siteMetadata.title
        },
        {
          property: 'og:image:width',
          content: '1280'
        },
        {
          property: 'og:image:height',
          content: '640'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        }
      ].map((props, index) => (
        <meta key={`head-meta-${index}`} {...props} />
      ))}

      {[
        { rel: 'mask-icon', href: '/mask-icon.svg', color: PALETTE.kale[700] },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'shortcut icon', href: '/favicon.ico' }
      ].map((props, index) => (
        <link key={`head-link-${index}`} {...props} />
      ))}

      {children}
    </>
  );
};
