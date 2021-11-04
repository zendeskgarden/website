/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { css } from 'styled-components';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { SectionCallout } from './SectionCallout';
import MaxWidthLayout from 'layouts/MaxWidth';
import { HomeLink } from './HomeLink';

export const Patterns: React.FC = () => {
  const { patternsImage } = useStaticQuery(
    graphql`
      {
        patternsImage: figmaAsset(name: { eq: "home-pillars-patterns" }) {
          childFile {
            childImageSharp {
              gatsbyImageData(width: 808)
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
          margin-bottom: ${p => p.theme.space.base * 20}px;
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
              ${p => mediaQuery('down', 'sm', p.theme)} {
                margin-bottom: ${p => p.theme.space.lg};
              }
            `}
          >
            <GatsbyImage
              image={patternsImage.childFile.childImageSharp.gatsbyImageData}
              alt="Garden patterns"
              imgStyle={{ width: 808, maxWidth: '100%', height: 488, maxHeight: '100%' }}
            />
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
              header="Existing design solutions for a more consistent UX"
              description="Opinionated design recipes that combine best practices from content, design, and engineering to create high-quality user interfaces quickly."
              css={css`
                margin-right: auto;
                margin-left: auto;
                max-width: 380px;

                ${p => mediaQuery('down', 'sm', p.theme)} {
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
