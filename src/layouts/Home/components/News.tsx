/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import { getColor } from '@zendeskgarden/react-theming';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { XXL } from '@zendeskgarden/react-typography';
import { Anchor } from '@zendeskgarden/react-buttons';
import MaxWidthLayout from 'layouts/MaxWidth';

const StyledSectionHeader = styled(XXL).attrs({ tag: 'h2' })`
  margin-bottom: ${p => p.theme.space.md};
  font-weight: ${p => p.theme.fontWeights.semibold};
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
      css={`
        position: relative;
      `}
    >
      <div
        css={css`
          position: absolute;
          top: 0;
          right: 50%;
          bottom: 0;
          left: 0;
          background-color: ${p => p.theme.palette.green[200]};

          @media (max-width: ${p => p.theme.breakpoints.lg}) {
            display: none;
          }
        `}
      />
      <div
        css={css`
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 50%;
          background-color: ${p => getColor('grey', 200, p.theme)};

          @media (max-width: ${p => p.theme.breakpoints.lg}) {
            display: none;
          }
        `}
      />
      <MaxWidthLayout>
        <Grid gutters="lg">
          <Row>
            <Col
              sm={12}
              md={6}
              lg={4}
              css={css`
                background-color: ${p => getColor('green', 200, p.theme)};
                padding-top: ${p => p.theme.space.xxl};
                padding-right: ${p => p.theme.space.xxl};
                padding-bottom: ${p => p.theme.space.xxl};

                @media (max-width: ${p => p.theme.breakpoints.md}) {
                  padding: ${p => p.theme.space.xxl};
                }
              `}
            >
              <StyledSectionHeader>Site Updates</StyledSectionHeader>
              <p>TODO</p>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={8}
              css={css`
                background-color: ${p => getColor('grey', 200, p.theme)};

                padding: ${p => p.theme.space.xxl};
              `}
            >
              <StyledSectionHeader>News and Articles</StyledSectionHeader>
              <Row>
                {allGardenNews.edges.map((edge: any, index: number) => {
                  return (
                    <Col
                      key={`${edge.node.url}-${index}`}
                      sm={6}
                      css={css`
                        margin-bottom: ${p => p.theme.space.lg};
                      `}
                    >
                      <Anchor
                        href={edge.node.url}
                        css={css`
                          color: ${p => p.theme.colors.foreground};
                          font-weight: ${p => p.theme.fontWeights.semibold};
                        `}
                      >
                        {edge.node.title}
                      </Anchor>
                      <p
                        css={css`
                          color: ${p => getColor('grey', 700, p.theme)};
                        `}
                      >
                        Article by <Anchor href={edge.node.author_url}>{edge.node.author}</Anchor>
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
