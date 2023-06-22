/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import { SELECTOR_FOCUS_VISIBLE, getColor } from '@zendeskgarden/react-theming';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { XXL } from '@zendeskgarden/react-typography';
import { Anchor } from '@zendeskgarden/react-buttons';
import MaxWidthLayout from 'layouts/MaxWidth';

const StyledNewsAnchor = styled(Anchor)`
  ${SELECTOR_FOCUS_VISIBLE} {
    color: ${p => getColor('primaryHue', 700, p.theme)};
  }

  &:active {
    color: ${p => getColor('primaryHue', 800, p.theme)};
  }
`;

const StyledSectionHeader = styled(XXL).attrs({ tag: 'h2', isBold: true })`
  margin-bottom: ${p => p.theme.space.md};
`;

export const News: React.FC = () => {
  const { allGardenNews } = useStaticQuery(
    graphql`
      query {
        allGardenNews {
          edges {
            node {
              title
              author
              author_url
              url
            }
          }
        }
      }
    `
  );

  return (
    <div
      css={css`
        position: relative;
        background-color: ${p => getColor('grey', 200, p.theme)};
      `}
    >
      <MaxWidthLayout>
        <Grid gutters="lg">
          <Row>
            <Col
              css={css`
                padding-top: ${p => p.theme.space.xxl};
                padding-bottom: ${p => p.theme.space.xxl};
              `}
            >
              <StyledSectionHeader>News and Articles</StyledSectionHeader>
              <Row>
                {allGardenNews.edges.map((edge: any, index: number) => {
                  return (
                    <Col
                      key={`${edge.node.url}-${index}`}
                      sm={4}
                      css={css`
                        margin-bottom: ${p => p.theme.space.lg};
                      `}
                    >
                      <StyledNewsAnchor
                        href={edge.node.url}
                        css={css`
                          color: ${p => p.theme.colors.foreground};
                          font-weight: ${p => p.theme.fontWeights.semibold};
                        `}
                      >
                        {edge.node.title}
                      </StyledNewsAnchor>
                      <p
                        css={css`
                          color: ${p => getColor('grey', 700, p.theme)};
                        `}
                      >
                        Article by{' '}
                        <StyledNewsAnchor href={edge.node.author_url}>
                          {edge.node.author}
                        </StyledNewsAnchor>
                      </p>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </Grid>
      </MaxWidthLayout>
    </div>
  );
};
