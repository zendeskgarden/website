/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useCallback, useMemo, useState } from 'react';
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

function recursivelyFindHeadings(toc: ITOC) {
  const headings: IHeading[] = [];

  if (toc.title && toc.url) {
    headings.push({ title: toc.title, url: toc.url });
  }

  if (toc.items) {
    toc.items.forEach(item => {
      headings.push(...recursivelyFindHeadings(item));
    });
  }

  return headings;
}

export const TOCLayout: React.FC<ITOCLayoutProps> = ({ children, toc }) => {
  const OFFSET = 10;
  const [activeHeading, setActiveHeading] = useState<IHeading>();

  const headings = useMemo(() => {
    return recursivelyFindHeadings(toc);
  }, [toc]);

  const onScroll = useCallback(
    throttle(() => {
      for (let index = headings.length - 1; index >= 0; index--) {
        const heading = headings[index];

        if (index === 0) {
          setActiveHeading(heading);
        }

        const url = decodeURIComponent(heading.url!.split('#')[1]);
        const headingElement = document.getElementById(url);

        if (headingElement) {
          const rect = headingElement.getBoundingClientRect();

          const isVisible = rect.top > 0 && rect.bottom <= window.innerHeight + OFFSET;

          if (isVisible) {
            setActiveHeading(heading);
            break;
          }
        }
      }
    }, 300),
    [headings]
  );

  useEffect(() => {
    onScroll();
    document.addEventListener('scroll', onScroll);
    document.addEventListener('resize', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
      document.removeEventListener('resize', onScroll);
    };
  }, [onScroll]);

  const renderToc = (tocItems?: ITOC[]) => {
    return (
      tocItems &&
      tocItems.map(item => (
        <li key={item.url}>
          <StyledAnchor href={item.url} isActive={activeHeading && activeHeading.url === item.url}>
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
