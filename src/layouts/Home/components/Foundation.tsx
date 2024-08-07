/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { SVGAttributes } from 'react';
import { css } from 'styled-components';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { Grid } from '@zendeskgarden/react-grid';
import { LG } from '@zendeskgarden/react-typography';
import MaxWidthLayout from 'layouts/MaxWidth';
import { SectionCallout, StyledSectionHeader } from './SectionCallout';
import { HomeLink } from './HomeLink';
import { ReactComponent as ComponentsIcon } from '../../../icons/components.svg';
import { ReactComponent as ContentIcon } from '../../../icons/content.svg';
import { ReactComponent as DesignIcon } from '../../../icons/design.svg';

const FoundationLink: React.FC<{
  group: string;
  title: string;
  url: string;
  Icon: React.FC<SVGAttributes<SVGElement>>;
}> = ({ group, title, url, Icon }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      height: 100%;
    `}
  >
    <Icon style={{ width: '100%', height: 'auto' }} />
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

export const Foundation: React.FC = () => (
  <MaxWidthLayout>
    <Grid
      gutters="lg"
      css={css`
        margin-bottom: ${p => p.theme.space.base * 20}px;
      `}
    >
      <Grid.Row>
        <Grid.Col
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
        </Grid.Col>
        <Grid.Col sm={12} lg={8}>
          <Grid.Row>
            <Grid.Col
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
                Icon={ContentIcon}
              />
            </Grid.Col>
            <Grid.Col
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
                Icon={DesignIcon}
              />
            </Grid.Col>
            <Grid.Col
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
                Icon={ComponentsIcon}
              />
            </Grid.Col>
          </Grid.Row>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  </MaxWidthLayout>
);
