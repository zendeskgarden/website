/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const envalid = require('envalid');
const fs = require('fs');
const path = require('path');

require('dotenv').config();
envalid.cleanEnv(process.env, { ABSTRACT_TOKEN: envalid.str() });

module.exports = {
  siteMetadata: {
    title: 'Zendesk Garden',
    siteUrl: 'https://garden.zendesk.com',
    description: `Garden is a design system for Zendesk where we grow beautifully simple and accessible UI components.`
  },
  plugins: [
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
        path: path.join(__dirname, 'src/pages/content')
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `design`,
        path: path.join(__dirname, 'src/pages/design')
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `components`,
        path: path.join(__dirname, 'src/pages/components')
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `react-components`,
        path: path.join(__dirname, 'react-components/packages'),
        ignore: ['**/*.!(ts|tsx)']
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `svg-icons`,
        path: path.join(__dirname, 'node_modules/@zendeskgarden/svg-icons/src'),
        ignore: ['**/*.!(svg)']
      }
    },
    'gatsby-source-news',
    'gatsby-source-react-packages',
    {
      resolve: 'gatsby-source-abstract',
      options: {
        apiToken: process.env.ABSTRACT_TOKEN,
        projectId: '27ff5784-e1c4-4f8c-a914-c03c380c8ea9',
        branch: 'master'
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    `gatsby-transformer-garden-svg`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['UA-970836-25']
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 90
      }
    },
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          content: require.resolve('./src/templates/ContentTemplate.tsx'),
          design: require.resolve('./src/templates/DesignTemplate.tsx'),
          components: require.resolve('./src/templates/ComponentTemplate.tsx')
        },
        gatsbyRemarkPlugins: [
          require.resolve('./plugins/gatsby-remark-abstract-assets'),
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1000
            }
          },
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              icon: fs
                .readFileSync(
                  path.join(
                    __dirname,
                    'node_modules/@zendeskgarden/svg-icons/src/16/link-stroke.svg'
                  )
                )
                .toString('utf-8')
                .trim()
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
    `gatsby-plugin-sitemap`,
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
    }
  ]
};
