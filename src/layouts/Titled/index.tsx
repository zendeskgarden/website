/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import { getColor } from '@zendeskgarden/react-theming';
import { LG } from '@zendeskgarden/react-typography';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { TOCBlock, TOC, IHeading } from './components/TOC';
import { StyledH1 } from 'components/MarkdownProvider/components/Typography';

const TitledLayout: React.FC<{
  title: React.ReactNode;
  subTitle?: React.ReactNode;
  toc?: IHeading[];
}> = ({ children, title, subTitle, toc }) => (
  <Grid>
    <Row>
      <Col lg={12} xl={9}>
        <StyledH1>{title}</StyledH1>
        {subTitle && (
          <LG
            tag="p"
            css={css`
              margin-bottom: ${p => p.theme.space.lg};
              max-width: 450px;
            `}
          >
            {subTitle}
          </LG>
        )}
        <hr
          css={css`
            margin-bottom: ${p => p.theme.space.lg};
            border-color: ${p => getColor('grey', 300, p.theme)};
          `}
        />
        {toc && (
          <TOCBlock
            data={toc}
            css={css`
              @media (min-width: ${p => p.theme.breakpoints.xl}) {
                display: none;
              }
            `}
          />
        )}
        {children}
      </Col>
      <Col
        lg={12}
        xl={3}
        css={css`
          @media (max-width: ${p => p.theme.breakpoints.xl}) {
            display: none;
          }
        `}
      >
        {toc && <TOC data={toc} />}
      </Col>
    </Row>
  </Grid>
);

export default TitledLayout;
