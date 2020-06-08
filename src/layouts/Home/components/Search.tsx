/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import Img from 'gatsby-image';
import { css, ThemeProps, DefaultTheme } from 'styled-components';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { MediaInput } from '@zendeskgarden/react-forms';
import { LG } from '@zendeskgarden/react-typography';
import { ReactComponent as SearchStroke } from '@zendeskgarden/svg-icons/src/16/search-stroke.svg';

import MaxWidthLayout from 'layouts/MaxWidth';
import { useStaticQuery, graphql } from 'gatsby';
import { getLineHeight } from '@zendeskgarden/react-theming';

const headerStyling = (p: ThemeProps<DefaultTheme>) => {
  const fontSize = `${p.theme.space.base * 12}px`;

  return css`
    margin-bottom: ${p.theme.space.md};
    line-height: ${getLineHeight(`${p.theme.space.base * 14}px`, fontSize)};
    font-size: ${fontSize};
    font-weight: ${p.theme.fontWeights.bold};

    @media (max-width: ${p.theme.breakpoints.lg}) {
      line-height: ${p.theme.lineHeights.xxxl};
      font-size: ${p.theme.fontSizes.xxxl};
    }
  `;
};

export const Search: React.FC = () => {
  const { bannerImage } = useStaticQuery(
    graphql`
      query {
        bannerImage: abstractAsset(layerName: { eq: "home-hero-logo" }) {
          childFile {
            childImageSharp {
              fluid(maxWidth: 540) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      }
    `
  );

  return (
    <div
      css={css`
        margin-bottom: ${p => p.theme.space.base * 20}px;
        background-color: ${p => p.theme.palette.oatMilk};
      `}
    >
      <MaxWidthLayout>
        <Grid>
          <Row alignItems="center">
            <Col
              md={6}
              order={1}
              orderMd={0}
              css={css`
                @media (max-width: ${p => p.theme.breakpoints.lg}) {
                  padding: 0 ${p => p.theme.space.lg};
                }
              `}
            >
              <Img
                fluid={bannerImage.childFile.childImageSharp.fluid}
                alt="Garden search banner image"
                css={css`
                  margin-top: ${p => p.theme.space.xxl};
                  margin-right: auto;
                  margin-left: auto;
                  width: 100%;
                  max-width: 540px;
                `}
                imgStyle={{ width: 540, maxWidth: '100%', height: 540, maxHeight: '100%' }}
              />
            </Col>
            <Col
              md={6}
              css={css`
                padding: ${p => p.theme.space.xxl};

                @media (max-width: ${p => p.theme.breakpoints.lg}) {
                  padding: ${p => p.theme.space.lg};
                  padding-bottom: 0;
                }
              `}
            >
              <div>
                <h1
                  css={css`
                    ${headerStyling}
                  `}
                >
                  Search the Garden
                </h1>
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

                    @media (max-width: ${p => p.theme.breakpoints.sm}) {
                      width: 100%;
                    }
                  `}
                >
                  <MediaInput
                    placeholder="What is kale-600?"
                    aria-label="Garden search"
                    start={<SearchStroke />}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </MaxWidthLayout>
    </div>
  );
};
