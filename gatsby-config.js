/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

const envalid = require('envalid');
const path = require('path');

require('dotenv').config();
envalid.cleanEnv(process.env, { ABSTRACT_TOKEN: envalid.str() });

module.exports = {
  siteMetadata: {
    title: 'Zendesk Garden',
    siteUrl: 'https://zendeskgarden.netlify.app',
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
    `gatsby-plugin-sharp`,
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
              className: 'anchor',
              icon:
                '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" focusable="false" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" d="M3.4 8.4L1.6 6.6C.3 5.2.3 3 1.6 1.6 3 .2 5.2.2 6.5 1.6l3.2 3.2c1.4 1.4 1.4 3.6 0 4.9-.4.4-.8.7-1.3.8m4.2-2.8l1.8 1.8c1.4 1.4 1.4 3.6 0 4.9-1.4 1.4-3.6 1.4-4.9 0l-3.2-3.2c-1.4-1.4-1.4-3.6 0-4.9.4-.4.8-.7 1.3-.8"/></svg>'
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
    }
  ]
};
