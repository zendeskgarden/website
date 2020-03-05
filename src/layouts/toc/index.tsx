/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useCallback, useState } from 'react';
import styled, { css } from 'styled-components';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import throttle from 'lodash/throttle';
import { getColor } from '@zendeskgarden/react-theming';

const StyledAnchor = styled.a<{ isActive?: boolean }>`
  color: ${p => p.isActive && getColor('dangerHue', 600, p.theme)};
`;

interface IHeading {
  url?: string;
  title?: string;
}

interface ITOC extends IHeading {
  items?: ITOC[];
}

interface ITOCLayoutProps {
  toc: ITOC;
}

export const TOCLayout: React.FC<ITOCLayoutProps> = ({ children, toc }) => {
  const OFFSET = 500;
  const [activeHeadingUrl, setActiveHeadingUrl] = useState<string>();

  const findActiveHeading = useCallback(
    throttle(() => {
      const headerAnchors = document.getElementsByClassName('heading-anchor') as HTMLCollectionOf<
        HTMLAnchorElement
      >;

      for (const headerAnchor of headerAnchors) {
        const { top } = headerAnchor.getBoundingClientRect();

        if (top >= 0 && top <= OFFSET) {
          setActiveHeadingUrl(headerAnchor.hash);
          break;
        }
      }
    }, 100),
    []
  );

  useEffect(() => {
    document.addEventListener('scroll', findActiveHeading);
    document.addEventListener('resize', findActiveHeading);

    findActiveHeading();

    return () => {
      document.removeEventListener('scroll', findActiveHeading);
      document.removeEventListener('resize', findActiveHeading);
    };
  }, [findActiveHeading]);

  const renderToc = (tocItems?: ITOC[]) => {
    return (
      tocItems &&
      tocItems.map(item => (
        <li key={item.url}>
          <StyledAnchor href={item.url} isActive={activeHeadingUrl === item.url}>
            {item.title}
          </StyledAnchor>
          <ul
            css={css`
              padding-left: ${p => p.theme.space.md};
            `}
          >
            {renderToc(item.items)}
          </ul>
        </li>
      ))
    );
  };

  return (
    <Grid>
      <Row>
        <Col>{children}</Col>
        <Col md={3}>
          <ul
            css={css`
              position: sticky;
              top: 80px;
            `}
          >
            {renderToc(toc.items)}
          </ul>
        </Col>
      </Row>
    </Grid>
  );
};
