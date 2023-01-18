/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ReactNode } from 'react';
import { graphql, useStaticQuery, HeadProps } from 'gatsby';
import { PALETTE } from '@zendeskgarden/react-theming';

import { IPageContext, IPageData } from '../templates/types';

interface ISEOProps {
  title?: string;
  description?: string;
  children?: ReactNode;
}

export const SEO = ({
  title,
  description,
  data,
  pageContext,
  children
}: HeadProps<IPageData, IPageContext> & ISEOProps): JSX.Element => {
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

  const info = {
    title: title || frontmatter.title || site.siteMetadata.title,
    description: description || frontmatter.description || site.siteMetadata.description
  };

  return (
    <>
      <title>{info.title}</title>
      {[
        {
          name: 'application-name',
          content: site.siteMetadata.title
        },
        {
          name: 'description',
          content: info.description
        },
        {
          name: 'msapplication-config',
          content: '/browserconfig.xml'
        },
        {
          property: 'og:title',
          content: info.title
        },
        {
          property: 'og:description',
          content: info.description
        },
        {
          property: 'og:image',
          content: `${site.siteMetadata.siteUrl}/og-image.png`
        },
        {
          property: 'og:image:alt',
          content: 'Zendesk Garden'
        },
        {
          property: 'og:image:width',
          content: '1280'
        },
        {
          property: 'og:image:height',
          content: '640'
        },
        // see: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary-card-with-large-image
        {
          name: 'twitter:site',
          content: site.siteMetadata.siteUrl
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        }
      ]
        .concat(
          data.mdx
            ? [
                // see: https://community.hubspot.com/t5/Share-Your-Work/Make-your-Slack-previews-better-Add-Reading-Time-Publish-Date/m-p/182219
                {
                  name: 'twitter:label1',
                  content: 'Time to read'
                },
                {
                  name: 'twitter:data1',
                  content: `${data.mdx.fields.timeToRead.minutes} minutes`
                }
              ]
            : []
        )
        .map((props, index) => (
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
