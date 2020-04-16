/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useCallback, useEffect, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { getColor } from '@zendeskgarden/react-theming';
import { SM } from '@zendeskgarden/react-typography';
import { Anchor } from '@zendeskgarden/react-buttons';
import throttle from 'lodash/throttle';

export interface IHeading {
  url: string;
  title: string;
}

export const TOCBlock: React.FC<{ data: IHeading[] } & HTMLAttributes<HTMLDivElement>> = ({
  data,
  ...props
}) => (
  <div {...props}>
    <SM
      css={css`
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: ${p => getColor('grey', 600, p.theme)};
      `}
    >
      Content
    </SM>
    <ul
      css={css`
        margin-bottom: ${p => p.theme.space.lg};
      `}
    >
      {data.map(heading => (
        <li key={heading.url}>
          <Anchor href={heading.url}>{heading.title}</Anchor>
        </li>
      ))}
    </ul>
  </div>
);

const StyledTocItem = styled.li<{ isCurrent: boolean }>`
  margin-left: -${p => p.theme.borderWidths.sm};
  border-left: ${p => p.theme.borders.sm} ${p => getColor('grey', p.isCurrent ? 800 : 300, p.theme)};
  padding-left: ${p => p.theme.space.md};
`;

export const TOC: React.FC<{ data: IHeading[] }> = ({ data }) => {
  const OFFSET = 500;
  const [activeHeadingUrl, setActiveHeadingUrl] = useState<string>();

  const isValidTocHeading = useCallback(
    (url: string) => {
      return data.some(heading => heading.url === url);
    },
    [data]
  );

  const findActiveHeading = useCallback(
    throttle(() => {
      const headerAnchors = document.getElementsByClassName('anchor') as HTMLCollectionOf<
        HTMLAnchorElement
      >;

      for (const headerAnchor of headerAnchors) {
        const { top } = headerAnchor.getBoundingClientRect();

        if (top >= 0 && top <= OFFSET) {
          if (isValidTocHeading(headerAnchor.hash)) {
            setActiveHeadingUrl(headerAnchor.hash);
          }
          break;
        }
      }
    }, 100),
    [isValidTocHeading]
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

  if (data.length === 0) {
    return null;
  }

  return (
    <ul
      css={css`
        position: sticky;
        top: 32px;
        margin-left: ${p => p.theme.space.lg};
      `}
    >
      <li
        css={css`
          padding-bottom: ${p => p.theme.space.xs};
          padding-left: ${p => p.theme.space.md};
        `}
      >
        <SM
          css={css`
            margin-left: -${p => p.theme.borderWidths.sm};
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: ${p => getColor('grey', 600, p.theme)};
          `}
        >
          Content
        </SM>
      </li>
      {data.map(heading => (
        <StyledTocItem key={heading.url} isCurrent={activeHeadingUrl === heading.url}>
          <Anchor
            href={heading.url}
            css={css`
              padding: ${p => p.theme.space.xxs} 0;
            `}
          >
            {heading.title}
          </Anchor>
        </StyledTocItem>
      ))}
    </ul>
  );
};
