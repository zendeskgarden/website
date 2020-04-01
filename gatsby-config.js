/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const path = require('path');
const { PALETTE } = require('@zendeskgarden/react-theming');

module.exports = {
  siteMetadata: {
    title: 'Zendesk Garden',
    description: `Garden is a design system for Zendesk where we grow beautifully simple and accessible UI components.`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, 'src/images')
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `news`,
        path: path.join(__dirname, 'content/news')
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: path.join(__dirname, 'content/uxcs')
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: PALETTE.blue[600],
        theme_color: PALETTE.blue[600],
        display: `minimal-ui`,
        icon: `src/images/garden-icon.svg`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              className: 'anchor',
              icon:
                '<svg class="octicon-link" xmlns="http://www.w3.org/2000/svg" width="16" height="16" focusable="false" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" d="M3.4 8.4L1.6 6.6C.3 5.2.3 3 1.6 1.6 3 .2 5.2.2 6.5 1.6l3.2 3.2c1.4 1.4 1.4 3.6 0 4.9-.4.4-.8.7-1.3.8m4.2-2.8l1.8 1.8c1.4 1.4 1.4 3.6 0 4.9-1.4 1.4-3.6 1.4-4.9 0l-3.2-3.2c-1.4-1.4-1.4-3.6 0-4.9.4-.4.8-.7 1.3-.8"/></svg>'
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: path.join(__dirname, 'src/components'),
        layouts: path.join(__dirname, 'src/layouts')
      }
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        svgo: true,
        svgoConfig: {
          plugins: [
            { removeViewBox: false },
            { cleanupIDs: true },
            {
              addAttributesToSVGElement: {
                attributes: [{ focusable: false }, { role: 'presentation' }]
              }
            }
          ]
        }
      }
    },
    'gatsby-source-news'
  ]
};
