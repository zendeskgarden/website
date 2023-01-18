/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { GatsbyConfig } from 'gatsby';
import path from 'path';
import fs from 'fs';
// import envalid from 'envalid';
import dotenv from 'dotenv';

dotenv.config();
// envalid.cleanEnv(process.env, { FIGMA_TOKEN: envalid.str() });

const cwd = process.cwd();

const config: GatsbyConfig = {
  graphqlTypegen: true,
  trailingSlash: 'never',
  siteMetadata: {
    title: 'Zendesk Garden',
    siteUrl: 'https://garden.zendesk.com',
    description: `Garden is the design system by Zendesk. It’s where we grow the components, standards, and tools that product designers use every day.`
  },
  plugins: [
    /* analytics */
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['UA-970836-25']
      }
    },
    /* generators */
    'gatsby-plugin-sitemap',
    /* sources */
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'svg-icons',
        path: `${cwd}/node_modules/@zendeskgarden/svg-icons/src`,
        ignore: ['**/*.!(svg)']
      },
      __key: 'svg-icons'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'icons',
        path: path.join(cwd, 'src', 'icons')
      },
      __key: 'icons'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: path.join(cwd, 'src', 'pages')
      },
      __key: 'pages'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `fragments`,
        path: path.join(cwd, 'src', 'fragments')
      },
      __key: 'fragments'
    },
    /* sources - local/remote data */
    'gatsby-source-garden-content',
    'gatsby-source-garden-docgen',
    /* bundling - file resolution */
    {
      resolve: 'gatsby-plugin-root-import',
      // correlates to tsconfig.json (compilerOptions.paths.*)
      options: {
        components: path.join(cwd, 'src', 'components'),
        icons: path.join(cwd, 'src', 'icons')
      }
    },
    /* bundling - transpilers */
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        mdxOptions: {
          // eslint-disable-next-line node/global-require, @typescript-eslint/no-require-imports
          remarkPlugins: [require('remark-gfm')]
        },
        gatsbyRemarkPlugins: [
          // require.resolve('./plugins/gatsby-remark-figma-assets'),
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
            // see: https://github.com/gatsbyjs/gatsby/issues/37049
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              offsetY: '0',
              icon: fs
                .readFileSync(`${cwd}/node_modules/@zendeskgarden/svg-icons/src/16/link-stroke.svg`)
                .toString('utf-8')
                .trim()
            }
          }
        ]
      }
    },
    /* images */
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-garden-svg',
    'gatsby-transformer-sharp',
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

export default config;
