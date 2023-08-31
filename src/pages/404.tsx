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
import { GatsbyImage } from 'gatsby-plugin-image';
import RootLayout from 'layouts/Root';
import MaxWidthLayout from 'layouts/MaxWidth';
import { getColor, mediaQuery } from '@zendeskgarden/react-theming';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { XL, LG } from '@zendeskgarden/react-typography';
import { StyledH1 } from 'components/MarkdownProvider/components/Typography';

const NotFoundPage: React.FC = () => {
  const { notFoundImage } = useStaticQuery(graphql`
    {
      notFoundImage: figmaAsset(name: { eq: "general-error-404" }) {
        childFile {
          childImageSharp {
            gatsbyImageData(width: 270, height: 270, layout: FIXED)
          }
        }
      }
    }
  `);

  return (
    <RootLayout>
      <SEO title="Not found" />
      <MaxWidthLayout>
        <Grid
          css={css`
            margin-top: 180px;
            margin-bottom: 368px;

            ${p => mediaQuery('down', 'xs', p.theme)} {
              margin-top: 60px;
              margin-bottom: 200px;
            }
          `}
        >
          <Row justifyContent="center">
            <Col sm="auto">
              <GatsbyImage
                image={notFoundImage.childFile.childImageSharp.gatsbyImageData}
                alt=""
                css={css`
                  ${p => mediaQuery('down', 'xs', p.theme)} {
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

                  ${p => mediaQuery('down', 'xs', p.theme)} {
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

                    ${p => mediaQuery('down', 'xs', p.theme)} {
                      font-size: ${p => p.theme.fontSizes.sm};
                    }
                  `}
                >
                  404 page not found
                </LG>
                <StyledH1
                  css={css`
                    ${p => mediaQuery('down', 'xs', p.theme)} {
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

                    ${p => mediaQuery('down', 'xs', p.theme)} {
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
