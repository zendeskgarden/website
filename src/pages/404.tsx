/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import SEO from 'components/SEO';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import RootLayout from 'layouts/Root';
import MaxWidthLayout from 'layouts/MaxWidth';
import { getColor } from '@zendeskgarden/react-theming';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { XL, LG } from '@zendeskgarden/react-typography';
import { StyledH1 } from 'components/MarkdownProvider/components/Typography';

const NotFoundPage: React.FC = () => {
  const { notFoundImage } = useStaticQuery(
    graphql`
      query {
        notFoundImage: abstractAsset(layerName: { eq: "content-voice-tone-map" }) {
          childFile {
            childImageSharp {
              fixed(width: 270, height: 270) {
                ...GatsbyImageSharpFixed_noBase64
              }
            }
          }
        }
      }
    `
  );

  return (
    <RootLayout>
      <SEO title="Not found" />
      <MaxWidthLayout>
        <Grid
          css={css`
            margin-top: 180px;
            margin-bottom: 368px;

            @media (max-width: ${p => p.theme.breakpoints.sm}) {
              margin-top: 60px;
              margin-bottom: 200px;
            }
          `}
        >
          <Row justifyContent="center">
            <Col sm="auto">
              <Img
                fixed={notFoundImage.childFile.childImageSharp.fixed}
                alt=""
                css={css`
                  @media (max-width: ${p => p.theme.breakpoints.sm}) {
                    /* stylelint-disable declaration-no-important */
                    width: 112px !important;
                    height: 112px !important;
                  }
                `}
                imgStyle={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            </Col>
            <Col sm={5}>
              <div
                css={css`
                  margin-left: ${p => p.theme.space.base * 12}px;

                  @media (max-width: ${p => p.theme.breakpoints.sm}) {
                    margin-left: 0;
                  }
                `}
              >
                <LG
                  css={css`
                    margin-top: ${p => p.theme.space.md};
                    margin-bottom: ${p => p.theme.space.xs};
                    text-transform: uppercase;
                    color: ${p => getColor('neutralHue', 600, p.theme)};
                    font-size: ${p => p.theme.space.base * 4}px;

                    @media (max-width: ${p => p.theme.breakpoints.sm}) {
                      font-size: ${p => p.theme.fontSizes.sm};
                    }
                  `}
                >
                  404 page not found
                </LG>
                <StyledH1
                  css={css`
                    @media (max-width: ${p => p.theme.breakpoints.sm}) {
                      margin-bottom: ${p => p.theme.space.xs};
                      line-height: ${p => p.theme.lineHeights.xxl};
                      font-size: ${p => p.theme.fontSizes.xxl};
                      font-weight: ${p => p.theme.fontWeights.semibold};
                    }
                  `}
                >
                  Nothing to see here
                </StyledH1>
                <XL
                  css={css`
                    color: ${p => getColor('neutralHue', 600, p.theme)};

                    @media (max-width: ${p => p.theme.breakpoints.sm}) {
                      line-height: ${p => p.theme.lineHeights.md};
                      font-size: ${p => p.theme.fontSizes.md};
                    }
                  `}
                >
                  You won’t find anything growing on this page. Head back to the homepage to see
                  more of Garden.
                </XL>
              </div>
            </Col>
          </Row>
        </Grid>
      </MaxWidthLayout>
    </RootLayout>
  );
};

export default NotFoundPage;
