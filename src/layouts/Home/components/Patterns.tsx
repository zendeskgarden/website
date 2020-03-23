/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css } from 'styled-components';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

import { SectionCallout } from './SectionCallout';
import MaxWidthLayout from 'layouts/MaxWidth';
import { HomeLink } from './HomeLink';

export const Patterns: React.FC = () => {
  const { patternsImage } = useStaticQuery(
    graphql`
      query {
        patternsImage: file(relativePath: { eq: "home-patterns.png" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  return (
    <MaxWidthLayout>
      <Grid
        gutters="lg"
        css={css`
          margin-bottom: ${p => p.theme.space.xxl};
        `}
      >
        <Row alignItems="center" justifyContent="center">
          <Col
            sm={12}
            md={6}
            lg={7}
            order={1}
            orderMd={0}
            css={css`
              @media (max-width: ${p => p.theme.breakpoints.md}) {
                margin-bottom: ${p => p.theme.space.lg};
              }
            `}
          >
            <Img fluid={patternsImage.childImageSharp.fluid} alt="Garden patterns " />
          </Col>
          <Col
            sm={12}
            md={6}
            lg={5}
            order={0}
            orderMd={1}
            css={css`
              margin-bottom: ${p => p.theme.space.lg};
            `}
          >
            <SectionCallout
              section="Patterns"
              header=" UI Patterns for building Zendesk products efficiently"
              description="Opinionated design recipes that combine best practices from content, design, and engineering to create high-quality user interfaces quickly."
              css={css`
                margin-right: auto;
                margin-left: auto;
                max-width: 300px;

                @media (max-width: ${p => p.theme.breakpoints.md}) {
                  margin-right: 0;
                  margin-left: 0;
                  max-width: 420px;
                }
              `}
            >
              <div
                css={css`
                  margin-top: ${p => p.theme.space.xs};
                `}
              >
                <HomeLink to="/patterns">Browse the UI patterns</HomeLink>
              </div>
            </SectionCallout>
          </Col>
        </Row>
      </Grid>
    </MaxWidthLayout>
  );
};
