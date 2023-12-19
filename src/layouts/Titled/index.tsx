/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { PropsWithChildren } from 'react';
import { css } from 'styled-components';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { Subtitle } from './components/Subtitle';
import { TOCBlock, TOC, IHeading } from './components/TOC';
import { StyledH1, StyledHr } from 'components/MarkdownProvider/components/Typography';

interface ITitledLayoutProps extends PropsWithChildren {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  toc?: IHeading[];
}

const TitledLayout: React.FC<ITitledLayoutProps> = ({ children, title, subtitle, toc }) => (
  <Grid>
    <Row>
      <Col
        lg={12}
        xl={3}
        order={2}
        css={css`
          ${p => mediaQuery('down', 'lg', p.theme)} {
            display: none;
          }
        `}
      >
        {toc && <TOC data={toc} />}
      </Col>
      <Col lg={12} xl={9} order={1}>
        <StyledH1>{title}</StyledH1>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        <StyledHr />
        {toc && (
          <TOCBlock
            data={toc}
            css={css`
              ${p => mediaQuery('up', 'xl', p.theme)} {
                display: none;
              }
            `}
          />
        )}
        {children}
      </Col>
    </Row>
  </Grid>
);

export default TitledLayout;
