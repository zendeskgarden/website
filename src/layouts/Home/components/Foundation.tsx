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
import { mediaQuery } from '@zendeskgarden/react-theming';
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
    <Img
      fluid={image.childFile.childImageSharp.fluid}
      alt=""
      imgStyle={{
        width: 350,
        minWidth: '100%',
        height: 266,
        minHeight: '100%',
        maxHeight: '100%',
        zIndex: -1
      }}
    />
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
        contentImage: abstractAsset(layerName: { eq: "home-pillars-content" }) {
          childFile {
            childImageSharp {
              fluid(maxWidth: 350, traceSVG: { background: "#F6F4F4", color: "#228F67" }) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        designImage: abstractAsset(layerName: { eq: "home-pillars-design" }) {
          childFile {
            childImageSharp {
              fluid(maxWidth: 350, traceSVG: { background: "#EDE0CF", color: "#00363D" }) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        componentsImage: abstractAsset(layerName: { eq: "home-pillars-components" }) {
          childFile {
            childImageSharp {
              fluid(maxWidth: 350, traceSVG: { background: "#F6F4F4", color: "#00363D" }) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
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

                ${p => mediaQuery('down', 'md', p.theme)} {
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
