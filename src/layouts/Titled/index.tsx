/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled, { css } from 'styled-components';
import { getColor } from '@zendeskgarden/react-theming';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { LG, XXXL } from '@zendeskgarden/react-typography';
import { TOCBlock, TOC, IHeading } from './components/TOC';

const TitleContainer = styled.div`
  margin-bottom: ${p => p.theme.space.lg};
  border-bottom: solid 1px ${p => getColor('grey', 300, p.theme)};
  padding-bottom: ${p => p.theme.space.md};
`;

const PageTitle = styled(XXXL)`
  margin-bottom: ${p => p.theme.space.sm};
  line-height: 1;
  font-size: ${p => p.theme.space.base * 12}px;
  font-weight: ${p => p.theme.fontWeights.semibold};
`;

const SubTitle = styled(LG)`
  max-width: 550px;
  color: ${p => p.theme.palette.grey[600]};
`;

const TitledLayout: React.FC<{
  title: React.ReactNode;
  subTitle?: React.ReactNode;
  toc?: IHeading[];
}> = ({ children, title, subTitle, toc }) => (
  <Grid gutters="lg">
    <Row>
      <Col lg={12} xl={9}>
        <TitleContainer>
          <PageTitle tag="h1">{title}</PageTitle>
          {subTitle && <SubTitle>{subTitle}</SubTitle>}
        </TitleContainer>
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
