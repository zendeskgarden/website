/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Link } from 'gatsby';

import { RootLayout } from 'layouts/root';
import { Image } from 'components/image';
import { SEO } from 'components/seo';
import { css } from 'styled-components';
import { getColor } from '@zendeskgarden/react-theming';
import { XXXL, XL } from '@zendeskgarden/react-typography';
import { MediaInput } from '@zendeskgarden/react-forms';
import { ReactComponent as SearchStrokeIcon } from '@zendeskgarden/svg-icons/src/16/search-stroke.svg';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

const IndexPage: React.FC = () => (
  <RootLayout>
    <SEO title="Home" />
    <div
      css={css`
        border-bottom: ${p => p.theme.borders.sm} ${p => getColor('neutralHue', 400, p.theme)};
        background-color: ${p => getColor('green', 100, p.theme)};
        padding: ${p => p.theme.space.lg} 0;
        text-align: center;
      `}
    >
      <div
        css={`
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        `}
      >
        <XXXL
          tag="h1"
          css={css`
            font-weight: ${p => p.theme.fontWeights.bold};
          `}
        >
          Search the Garden Website
        </XXXL>
        <XL
          css={css`
            margin: ${p => p.theme.space.md} 0;
            color: ${p => getColor('neutralHue', 600, p.theme)};
          `}
        >
          The source of truth for tools, standards, and best practices when building products at
          Zendesk.
        </XL>
        <div
          css={css`
            margin: ${p => p.theme.space.lg} auto;
            max-width: 400px;
          `}
        >
          <MediaInput start={<SearchStrokeIcon />} placeholder="kale-600 usage?" />
        </div>
      </div>
    </div>
    <div
      css={`
        max-width: 1280px;
        margin: 0 auto;
      `}
    >
      <Grid>
        <Row>
          <Col sm={4} md={6} lg={8} orderSm={2} orderMd={1}>
            <Row>
              <Col md={6} xl={4}>
                test
              </Col>
              <Col md={6} xl={4}>
                test
              </Col>
              <Col md={6} xl={4}>
                test
              </Col>
            </Row>
          </Col>
          <Col sm={8} md={6} lg={4} orderSm={1} orderMd={2}>
            <div>Foundations</div>
            <div>The foundations for making products with Garden</div>
            <div>
              This site is an evolving library of shared knowledge that intentionally blurs the line
              between design, content strategy, and engineering to reinforce a cohesive user
              experience throughout Zendesks product line.
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
    <h1>Hello everyone</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </RootLayout>
);

export default IndexPage;
