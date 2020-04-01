/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { css } from 'styled-components';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { LG } from '@zendeskgarden/react-typography';
import MaxWidthLayout from 'layouts/MaxWidth';
import { SectionCallout, StyledSectionHeader } from './SectionCallout';
import { HomeLink } from './HomeLink';

const FoundationLink: React.FC<{
  group: string;
  title: string;
  image: any;
  url: string;
}> = ({ group, title, url, image }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      height: 100%;
    `}
  >
    <Img fluid={image.childImageSharp.fluid} alt={`${group} overview image`} />
    <div
      css={css`
        display: flex;
        flex-direction: column;
        flex-grow: 1;
      `}
    >
      <StyledSectionHeader
        css={css`
          margin-top: ${p => p.theme.space.md};
          margin-bottom: ${p => p.theme.space.xs};
        `}
      >
        {group}
      </StyledSectionHeader>
      <LG
        tag="h3"
        css={css`
          margin-bottom: ${p => p.theme.space.xs};
        `}
      >
        {title}
      </LG>
      <HomeLink to={url}>
        Browse{' '}
        <span
          css={`
            text-transform: lowercase;
          `}
        >
          {group}
        </span>
      </HomeLink>
    </div>
  </div>
);

export const Foundation: React.FC = () => {
  const { contentImage, componentsImage, designImage } = useStaticQuery(
    graphql`
      query {
        contentImage: file(relativePath: { eq: "home-content.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600, traceSVG: { background: "#03363D", color: "white" }) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        designImage: file(relativePath: { eq: "home-design.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600, traceSVG: { background: "#03363D", color: "white" }) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        componentsImage: file(relativePath: { eq: "home-components.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600, traceSVG: { background: "#03363D", color: "white" }) {
              ...GatsbyImageSharpFluid_tracedSVG
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
        <Row>
          <Col
            sm={12}
            lg={4}
            css={css`
              margin-bottom: ${p => p.theme.space.xxl};
            `}
          >
            <SectionCallout
              section="Foundation"
              header="The foundations for making products with Garden"
              description="This site is an evolving library of shared knowledge that intentionally blurs the line between design, content strategy, and engineering to reinforce a cohesive user experience throughout Zendesk’s product suite."
              css={css`
                max-width: 380px;

                @media (max-width: ${p => p.theme.breakpoints.lg}) {
                  max-width: 420px;
                }
              `}
            />
          </Col>
          <Col sm={12} lg={8}>
            <Row>
              <Col
                xs={12}
                sm={6}
                lg={4}
                css={css`
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <FoundationLink
                  group="Content"
                  title="The principles of language for writing products"
                  url="/content"
                  image={contentImage}
                />
              </Col>
              <Col
                xs={12}
                sm={6}
                lg={4}
                css={css`
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <FoundationLink
                  group="Design"
                  title="Foundations for creating purposeful UI"
                  url="/design"
                  image={designImage}
                />
              </Col>
              <Col
                xs={12}
                sm={6}
                lg={4}
                css={css`
                  margin-bottom: ${p => p.theme.space.lg};
                `}
              >
                <FoundationLink
                  group="Components"
                  title="Development instructions for building effective user interfaces"
                  url="/components"
                  image={componentsImage}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </MaxWidthLayout>
  );
};
