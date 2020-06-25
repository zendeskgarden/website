/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
const { PALETTE } = require('@zendeskgarden/react-theming');

const SEO: React.FC<{
  description?: string;
  lang?: string;
  meta?: HTMLMetaElement[];
  title?: string;
}> = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title || site.siteMetadata.title}
      titleTemplate={title ? `%s / ${site.siteMetadata.title}` : undefined}
      meta={[
        {
          name: 'application-name',
          content: site.siteMetadata.title
        },
        {
          name: 'description',
          content: metaDescription
        },
        {
          name: 'og:image',
          content: 'og-image.png'
        },
        {
          name: 'og:image:alt',
          content: 'Zendesk Garden'
        },
        {
          name: 'og:image:width',
          content: '1280'
        },
        {
          name: 'og:image:height',
          content: '640'
        },
        {
          name: 'msapplication-config',
          content: 'browserconfig.xml'
        }
      ].concat(meta!)}
      link={[
        { rel: 'mask-icon', href: 'mask-icon.svg', color: PALETTE.kale[700] },
        { rel: 'apple-touch-icon', href: 'apple-touch-icon.png' },
        { rel: 'shortcut icon', href: 'favicon.ico' }
      ]}
    />
  );
};

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: ''
};

export default SEO;
