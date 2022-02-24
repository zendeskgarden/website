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
envalid.cleanEnv(process.env, { FIGMA_TOKEN: envalid.str() });

const figmaNodeIds = [
  '1:22' /* home-hero-logo */,
  '1:37' /* home-pillars-patterns */,
  '2:7' /* components-avatar-shape-square */,
  '2:12' /* components-avatar-shape-circle */,
  '25:403' /* content-voice-tone-map */,
  '103:361' /* general-error-404 */,
  '103:2974' /* components-buttons-iconbutton-tooltip-do */,
  '104:364' /*  components-buttons-toggleiconbutton-tooltip-do*/,
  '105:1647' /* components-dropdowns-autocomplete-selection-do */,
  '554:9806' /* components-dropdowns-combobox-icon-placement-do */,
  '554:9811' /* components-dropdowns-combobox-highlight-do */,
  '554:9877' /* components-dropdowns-combobox-searchable-dont */,
  '108:4872' /* components-forms-checkbox-standalone-do */,
  '108:4897' /* components-forms-checkbox-standalone-option-dont */,
  '111:5353' /* components-timeline-interactive-elements-dont */,
  '111:5361' /* components-timeline-interactive-elements-do */,
  '111:5367' /* components-timeline-correct-hierarchy-do */,
  '111:5374' /* components-timeline-correct-hierarchy-dont */,
  '336:2968' /* components-timeline-nesting-do */,
  '112:5516' /* patterns-buttons-anatomy */,
  '112:5480' /* patterns-buttons-anatomy-button-type */,
  '112:5463' /* patterns-buttons-interface-button-size-do */,
  '112:5446' /* patterns-buttons-interface-button-size-dont */,
  '112:5443' /* patterns-buttons-content-do */,
  '112:5436' /* patterns-buttons-content-dont */,
  '530:3577' /* patterns-tables-basic-formatting-anatomy */,
  '539:5678' /* patterns-tables-basic-formatting-wrap-and-truncation */,
  '539:6323' /* patterns-tables-basic-formatting-row-heights-do */,
  '539:6332' /* patterns-tables-basic-formatting-row-heights-dont */,
  '541:12026' /* patterns-tables-basic-formatting-cell-alignment */,
  '541:12531' /* patterns-tables-basic-formatting-grouping */,
  '762:10926' /* patterns-tables-basic-formatting-pagination-cursor */,
  '566:10441' /* patterns-tables-basic-formatting-pagination-offset */,
  '566:10823' /* patterns-tables-basic-formatting-pagination-selecting-all */,
  '704:10527' /* patterns-tables-basic-formatting-anchors */,
  '566:11850' /* patterns-tables-basic-formatting-date-time */,
  '566:12145' /* patterns-tables-basic-formatting-row-cell-states */,
  '566:12289' /* patterns-tables-basic-formatting-localization-bulgarian */,
  '566:12568' /* patterns-tables-basic-formatting-localization-arabic */
];

module.exports = {
  siteMetadata: {
    title: 'Zendesk Garden',
    siteUrl: 'https://garden.zendesk.com',
    description: `Garden is the design system by Zendesk. It’s where we grow the components, standards, and tools that product designers use every day.`
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
        name: `patterns`,
        path: path.join(__dirname, 'src/pages/patterns')
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
      resolve: 'gatsby-source-figma',
      options: {
        figmaApiToken: process.env.FIGMA_TOKEN,
        fileId: 'HifWgSrdeTlMMXUrcnrAAH',
        nodeIds: figmaNodeIds,
        scale: 2
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-transformer-yaml`,
    `gatsby-transformer-garden-svg`,
    `gatsby-plugin-react-helmet`,
    `gatsby-algolia-docsearch`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['UA-970836-25']
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 90
        }
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
          components: require.resolve('./src/templates/ComponentTemplate.tsx'),
          patterns: require.resolve('./src/templates/PatternTemplate.tsx')
        },
        gatsbyRemarkPlugins: [
          require.resolve('./plugins/gatsby-remark-figma-assets'),
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: false,
              disableBgImageOnAlpha: true,
              quality: 100
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
            {
              name: 'removeViewBox',
              active: false
            },
            {
              name: 'cleanupIDs'
            },
            {
              name: 'addAttributesToSVGElement',
              params: {
                attributes: [{ focusable: false }, { role: 'presentation' }]
              }
            }
          ]
        }
      }
    }
  ]
};
