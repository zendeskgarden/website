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
  '1459:39467' /* components-notification-global-alert-clearly-actionable */,
  '1414:38729' /* components-notification-global-alert-dismissable */,
  '1414:38800' /* components-notification-global-alert-persistent */,
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
  '1403:38096' /* patterns-copy-anatomy */,
  '1403:38112' /* patterns-copy-layouts-default */,
  '1403:38250' /* patterns-copy-layouts-default-notification */,
  '1403:38125' /* patterns-copy-layouts-minimal */,
  '1403:38145' /* patterns-copy-layouts-minimal-tooltip */,
  '1403:38188' /* patterns-copy-content */,
  '1403:38278' /* patterns-copy-accessibility-input-do */,
  '1403:38264' /* patterns-copy-accessibility-input-dont */,
  '1403:38167' /* patterns-copy-accessibility-minimal-focused */,
  '1403:38222' /* patterns-copy-accessibility-aria-labels */,
  '1435:38818' /* patterns-error-global-alert-anatomy */,
  '1442:39335' /* patterns-error-global-alert-layout */,
  '1440:39192' /* patterns-error-global-alert-disconnect */,
  '1502:39525' /* patterns-error-alert-anatomy */,
  '1502:39565' /* patterns-error-alert-layout */,
  '1502:39604' /* patterns-error-alert-layout-multiple */,
  '1502:39530' /* patterns-error-notification-anatomy */,
  '1502:39578' /* patterns-error-notification-layout */,
  '1502:39591' /* patterns-error-notification-failed-upload */,
  '1502:39535' /* patterns-error-forms-anatomy */,
  '1502:39618' /* patterns-error-forms-layout-multiple */,
  '1502:39630' /* patterns-error-forms-validate-do */,
  '1502:39635' /* patterns-error-forms-validate-dont */,
  '1502:39633' /* patterns-error-forms-keep-data-do */,
  '1502:39638' /* patterns-error-forms-keep-data-dont */,
  '1515:41072' /* patterns-loaders-intro */,
  '1515:41445' /* patterns-loaders-skeleton */,
  '1528:41198' /* patterns-loaders-skeleton-do */,
  '1528:41361' /* patterns-loaders-skeleton-dont */,
  '1515:41790' /* patterns-loaders-spinner */,
  '1515:41891' /* patterns-loaders-completing-action */,
  '1515:41905' /* patterns-loaders-search-inputs */,
  '1515:41922' /* patterns-loaders-menu */,
  '1515:41932' /* patterns-loaders-progress */,
  '1515:41914' /* patterns-loaders-typing */,
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
  '566:12568' /* patterns-tables-basic-formatting-localization-arabic */,
  '1833:46885' /* patterns-tables-basic-formatting-tags-truncation */,
  '1833:46828' /* patterns-tables-basic-formatting-tags-overflow */,
  '1833:46943' /* patterns-tables-basic-formatting-tags-overflow-expanded */,
  '1833:47060' /* patterns-tables-basic-formatting-view-actions */,
  '1833:47025' /* patterns-tables-basic-formatting-overflow-actions */,
  '1833:47001' /* patterns-tables-basic-formatting-overflow-tooltip */,
  '1868:53136' /* patterns-tables-basic-formatting-default-avatars-large-table */,
  '1868:53248' /* patterns-tables-basic-formatting-small-avatars-default-table */,
  '1745:45691' /* patterns-tables-basic-formatting-action-icons */,
  '1747:45874' /* patterns-tables-basic-formatting-tags-anatomy */,
  '1840:49529' /* patterns-dnd-intro */,
  '1840:50595' /* patterns-dnd-anatomy */,
  '1840:50608' /* patterns-dnd-anatomy-flow-1 */,
  '1840:50619' /* patterns-dnd-anatomy-flow-2 */,
  '1840:50632' /* patterns-dnd-anatomy-flow-3 */,
  '1840:50644' /* patterns-dnd-anatomy-flow-4 */,
  '1840:51870' /* patterns-dnd-formatting-draggable */,
  '1840:51886' /* patterns-dnd-formatting-draggable-preview-do */,
  '1840:51918' /* patterns-dnd-formatting-draggable-preview-dont */,
  '1840:52252' /* patterns-dnd-formatting-placeholder-empty */,
  '1840:52261' /* patterns-dnd-formatting-placeholder-solid */,
  '1840:52270' /* patterns-dnd-formatting-target-indicator */,
  '1840:52279' /* patterns-dnd-formatting-placeholders-and-disabled */,
  '1840:52310' /* patterns-dnd-formatting-indicator-orientation */,
  '1840:52729' /* patterns-dnd-formatting-dropzone-states */,
  '1840:52747' /* patterns-dnd-formatting-dropzone-examples */,
  '1840:52759' /* patterns-dnd-formatting-dropzone-empty-populated */,
  '1840:52773' /* patterns-dnd-formatting-dropzone-replace */,
  '1840:53047' /* patterns-dnd-flows-reorder-1 */,
  '1840:53086' /* patterns-dnd-flows-reorder-2 */,
  '1840:53135' /* patterns-dnd-flows-reorder-3 */,
  '1840:53184' /* patterns-dnd-flows-reorder-4 */,
  '1840:53223' /* patterns-dnd-flows-multiple-lists-1 */,
  '1840:53246' /* patterns-dnd-flows-multiple-lists-2 */,
  '1840:53272' /* patterns-dnd-flows-multiple-lists-3 */,
  '1840:53298' /* patterns-dnd-flows-multiple-lists-4 */,
  '1840:53328' /* patterns-dnd-flows-moving-nesting-1 */,
  '1840:53350' /* patterns-dnd-flows-moving-nesting-2 */,
  '1840:53374' /* patterns-dnd-flows-moving-nesting-3 */,
  '1840:53398' /* patterns-dnd-flows-moving-nesting-4 */,
  '1840:53425' /* patterns-dnd-flows-moving-nesting-5 */,
  '1840:53451' /* patterns-dnd-flows-moving-nesting-6 */,
  '1840:53475' /* patterns-dnd-flows-collision-algorithm-1 */,
  '1840:53495' /* patterns-dnd-flows-collision-algorithm-2 */,
  '1840:53527' /* patterns-dnd-flows-collision-algorithm-3 */,
  '1840:54835' /* patterns-dnd-accessibility-alternative-1 */
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
        ignore: ['**/*.!(next|ts|tsx)']
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
