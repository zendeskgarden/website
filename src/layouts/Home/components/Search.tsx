/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { css, ThemeProps } from 'styled-components';
import { getColor, getLineHeight, mediaQuery } from '@zendeskgarden/react-theming';
import { Grid } from '@zendeskgarden/react-grid';
import { LG, XXXL } from '@zendeskgarden/react-typography';
import MaxWidthLayout from 'layouts/MaxWidth';
import { SearchInput } from 'layouts/Root/components/SearchInput';

const headerStyling = (p: ThemeProps<any>) => {
  const fontSize = `${p.theme.space.base * 12}px`;

  return css`
    margin-bottom: ${p.theme.space.md};
    line-height: ${getLineHeight(`${p.theme.space.base * 14}px`, fontSize)};
    font-size: ${fontSize};
    font-weight: ${p.theme.fontWeights.bold};

    ${mediaQuery('down', 'md', p.theme)} {
      line-height: ${p.theme.lineHeights.xxxl};
      font-size: ${p.theme.fontSizes.xxxl};
    }
  `;
};

export const Search: React.FC = () => {
  const { bannerImage } = useStaticQuery(graphql`
    {
      bannerImage: gardenFigmaAsset(name: { eq: "home-hero-logo" }) {
        childFile {
          childImageSharp {
            gatsbyImageData(placeholder: NONE, layout: FULL_WIDTH)
          }
        }
      }
    }
  `);

  return (
    <div
      css={css`
        margin-bottom: ${p => p.theme.space.base * 20}px;
        background-color: ${p =>
          getColor({
            theme: p.theme,
            dark: { hue: 'neutralHue', shade: 1200 },
            light: { hue: 'chromeHue', shade: 200 }
          })};
      `}
    >
      <MaxWidthLayout>
        <Grid gutters="lg">
          <Grid.Row alignItems="center">
            <Grid.Col
              md={6}
              order={1}
              orderMd={0}
              css={css`
                ${p => mediaQuery('down', 'md', p.theme)} {
                  padding: 0 ${p => p.theme.space.lg};
                }
              `}
            >
              <GatsbyImage
                image={bannerImage.childFile.childImageSharp.gatsbyImageData}
                alt=""
                css={css`
                  margin-top: ${p => p.theme.space.xxl};
                  margin-right: auto;
                  margin-left: auto;
                  width: 100%;
                  max-width: 540px;
                `}
                imgStyle={{
                  width: 540,
                  maxWidth: '100%',
                  height: 540,
                  maxHeight: '100%'
                }}
              />
            </Grid.Col>
            <Grid.Col
              md={6}
              css={css`
                ${p => mediaQuery('down', 'md', p.theme)} {
                  padding-top: ${p => p.theme.space.lg};
                  padding-bottom: 0;
                }
              `}
            >
              <div>
                <XXXL
                  tag="h1"
                  css={css`
                    ${headerStyling}
                  `}
                >
                  Welcome to Garden
                </XXXL>
                <LG
                  tag="p"
                  css={css`
                    margin-bottom: ${p => p.theme.space.md};
                    max-width: 340px;
                  `}
                >
                  The source of truth for tools, standards, and best practices when building
                  products at Zendesk.
                </LG>
                <div
                  css={css`
                    width: 340px;

                    ${p => mediaQuery('down', 'xs', p.theme)} {
                      width: 100%;
                    }
                  `}
                >
                  <SearchInput id="algolia-docsearch-home" placeholder="how to use the combobox" />
                </div>
              </div>
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </MaxWidthLayout>
    </div>
  );
};
