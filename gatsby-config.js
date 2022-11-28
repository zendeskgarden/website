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
  '722:10518' /* design-icons-16px-do */,
  '722:10550' /* design-icons-12px-do */,
  '722:10997' /* design-icons-32px-do */,
  '722:10580' /* design-icons-32px-dont */,
  '722:11034' /* design-icons-tooltips-do */,
  '1227:32371' /* patterns-buttons-anatomy-button-type */,
  '1228:33886' /* patterns-buttons-interface-button-size-do */,
  '1228:33876' /* patterns-buttons-interface-button-size-dont */,
  '1229:33977' /* patterns-buttons-alignment-do */,
  '1229:33972' /* patterns-buttons-alignment-dont */,
  '1231:33976' /* patterns-buttons-media-do */,
  '1231:33970' /* patterns-buttons-media-dont */,
  '1232:34021' /* patterns-buttons-icon-buttons-do */,
  '1232:34016' /* patterns-buttons-icon-buttons-dont */,
  '1249:34158' /* patterns-buttons-disabled-do */,
  '1249:34166' /* patterns-buttons-disabled-dont */,
  '1232:34117' /* patterns-buttons-button-vs-link */,
  '1232:34213' /* patterns-buttons-content-do */,
  '1232:34208' /* patterns-buttons-content-dont */,
  '1232:34264' /* patterns-buttons-localization-arabic */,
  '1435:38818' /* patterns-error-global-alert-anatomy */,
  '1202:16334' /* patterns-rich-text-editor-intro */,
  '1202:16535' /* patterns-rich-text-editor-anatomy */,
  '1202:25862' /* patterns-rich-text-editor-example */,
  '1203:17178' /* patterns-rich-text-editor-toolbar-sections */,
  '1203:23238' /* patterns-rich-text-editor-toolbar-sections-collapsed-actions */,
  '1203:23878' /* patterns-rich-text-editor-toolbar-sections-keyboard-shortcuts */,
  '1203:34882' /* patterns-rich-text-editor-formatting-toolbar-location-start */,
  '1204:26131' /* patterns-rich-text-editor-formatting-toolbar-location-end */,
  '1204:26433' /* patterns-rich-text-editor-formatting-toolbar-location-floating */,
  '1204:26615' /* patterns-rich-text-editor-formatting-toolbar-location-floating-opened */,
  '1204:26774' /* patterns-rich-text-editor-formatting-toolbar-size */,
  '1204:26904' /* patterns-rich-text-editor-formatting-responsive-behavior */,
  '1204:26905' /* patterns-rich-text-editor-formatting-responsive-behavior-overflow */,
  '1204:26906' /* patterns-rich-text-editor-formatting-resizable-textarea */,
  '1204:26907' /* patterns-rich-text-editor-formatting-resizable-textarea-expanded */,
  '1204:28088' /* patterns-rich-text-editor-formatting-resizable-textarea-scrollbar */,
  '1204:28377' /* patterns-rich-text-editor-states-disabled */,
  '1204:28680' /* patterns-rich-text-editor-flows-insert-link-select */,
  '1204:28838' /* patterns-rich-text-editor-flows-insert-link-save */,
  '1204:32300' /* patterns-rich-text-editor-flows-edit-link-select */,
  '1204:32478' /* patterns-rich-text-editor-flows-edit-link-save */,
  '1204:33072' /* patterns-rich-text-editor-accessibility-managing-focus */,
  '1311:34444' /* patterns-save-anatomy-action-footer */,
  '1311:34883' /* patterns-save-anatomy-success-notification */,
  '1311:35077' /* patterns-save-anatomy-success-notification-do */,
  '1311:35064' /* patterns-save-anatomy-success-notification-dont */,
  '1321:35012' /* patterns-save-errors */,
  '1321:35220' /* patterns-save-validation-alert */,
  '1322:35434' /* patterns-save-unsaved-changes */,
  '1322:35712' /* patterns-save-rtl */,
  '1322:35878' /* patterns-save-action-footer-focus */,
  '1322:36040' /* patterns-save-validation-alert-focus */,
  '1322:36240' /* patterns-save-unsaved-changes-focus */,
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
