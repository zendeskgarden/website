/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { css } from 'styled-components';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { LG } from '@zendeskgarden/react-typography';
import MaxWidthLayout from 'layouts/MaxWidth';
import { SectionCallout, StyledSectionHeader } from './SectionCallout';
import { HomeLink } from './HomeLink';

const imgStyles = {
  width: 350,
  minWidth: '100%',
  maxWidth: '100%',
  height: 266,
  minHeight: '100%',
  maxHeight: '100%',
  zIndex: -1
};

const FoundationLink: React.FC<{
  group: string;
  title: string;
  url: string;
}> = ({ group, title, url, children }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      height: 100%;
    `}
  >
    {children}
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
                >
                  <StaticImage
                    alt=""
                    placeholder="tracedSVG"
                    src="../../../images/home-pillars-content.svg"
                    tracedSVGOptions={{ color: '#478d6b', background: '#F6F4F4' }}
                    imgStyle={imgStyles}
                  />
                </FoundationLink>
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
                >
                  <StaticImage
                    alt=""
                    placeholder="tracedSVG"
                    src="../../../images/home-pillars-design.svg"
                    tracedSVGOptions={{ color: '#478d6b', background: '#EDE0CF' }}
                    imgStyle={imgStyles}
                  />
                </FoundationLink>
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
                >
                  <StaticImage
                    alt=""
                    placeholder="tracedSVG"
                    src="../../../images/home-pillars-components.svg"
                    tracedSVGOptions={{ color: '#478d6b', background: '#F6F4F4' }}
                    imgStyle={imgStyles}
                  />
                </FoundationLink>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </MaxWidthLayout>
  );
};
