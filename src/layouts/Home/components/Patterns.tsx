/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled, { css } from 'styled-components';
import { getColor, mediaQuery } from '@zendeskgarden/react-theming';
import { Grid } from '@zendeskgarden/react-grid';
import { SectionCallout } from './SectionCallout';
import MaxWidthLayout from 'layouts/MaxWidth';
import { HomeLink } from './HomeLink';

const StyledBackground = styled.div`
  position: relative;
  margin-right: ${p => p.theme.space.base * 6}px;
  margin-bottom: ${p => p.theme.space.base * 6}px;
  background-color: ${p =>
    getColor({
      theme: p.theme,
      dark: { hue: 'neutralHue', shade: 900 },
      light: { hue: 'chromeHue', shade: 200 }
    })};

  & > div {
    top: ${p => p.theme.space.base * 6}px;
    left: ${p => p.theme.space.base * 6}px;
  }
`;

export const Patterns: React.FC = () => {
  const { patternsImage } = useStaticQuery(graphql`
    {
      patternsImage: gardenFigmaAsset(name: { eq: "home-pillars-patterns" }) {
        childFile {
          childImageSharp {
            gatsbyImageData(width: 808)
          }
        }
      }
    }
  `);

  return (
    <MaxWidthLayout>
      <Grid
        gutters="lg"
        css={css`
          margin-bottom: ${p => p.theme.space.base * 20}px;
        `}
      >
        <Grid.Row alignItems="center" justifyContent="center">
          <Grid.Col
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
            <StyledBackground>
              <GatsbyImage
                image={patternsImage.childFile.childImageSharp.gatsbyImageData}
                alt="Garden patterns"
                imgStyle={{ width: 808, maxWidth: '100%', height: 488, maxHeight: '100%' }}
              />
            </StyledBackground>
          </Grid.Col>
          <Grid.Col
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
              header="Additional context for how to use components."
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
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </MaxWidthLayout>
  );
};
