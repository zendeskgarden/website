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
import { Grid } from '@zendeskgarden/react-grid';
import { LG, Span, XXL } from '@zendeskgarden/react-typography';
import { Anchor } from '@zendeskgarden/react-buttons';
import MaxWidthLayout from 'layouts/MaxWidth';

const StyledSectionHeader = styled(XXL).attrs({ tag: 'h2', isBold: true })`
  margin-bottom: ${p => p.theme.space.md};
`;

export const News: React.FC = () => {
  const { allGardenNews } = useStaticQuery(graphql`
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
  `);

  return (
    <div
      css={css`
        position: relative;
        background-color: ${p => getColor({ theme: p.theme, variable: 'background.subtle' })};
      `}
    >
      <MaxWidthLayout>
        <Grid gutters="lg">
          <Grid.Row>
            <Grid.Col
              css={css`
                padding-top: ${p => p.theme.space.xxl};
                padding-bottom: ${p => p.theme.space.xxl};
              `}
            >
              <StyledSectionHeader>News and Articles</StyledSectionHeader>
              <Grid.Row>
                {allGardenNews.edges.map((edge: any, index: number) => {
                  return (
                    <Grid.Col
                      key={`${edge.node.url}-${index}`}
                      sm={4}
                      css={css`
                        margin-bottom: ${p => p.theme.space.lg};
                      `}
                    >
                      <LG>
                        <Anchor href={edge.node.url} isUnderlined={false}>
                          {edge.node.title}
                        </Anchor>
                        <p>
                          <Span hue="foreground.subtle">
                            Article by{' '}
                            <Anchor href={edge.node.author_url} isUnderlined={false}>
                              {edge.node.author}
                            </Anchor>
                          </Span>
                        </p>
                      </LG>
                    </Grid.Col>
                  );
                })}
              </Grid.Row>
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </MaxWidthLayout>
    </div>
  );
};
