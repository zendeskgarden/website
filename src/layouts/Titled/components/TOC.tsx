/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useCallback, useEffect, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import throttle from 'lodash/throttle';
import { math } from 'polished';
import { getColor } from '@zendeskgarden/react-theming';
import { Anchor } from '@zendeskgarden/react-buttons';
import { StyledSectionHeader } from 'layouts/Home/components/SectionCallout';
import { StyledHr } from 'components/MarkdownProvider/components/Typography';

export interface IHeading {
  url: string;
  title: string;
  items?: IHeading[];
}

export const TOCBlock: React.FC<{ data: IHeading[] } & HTMLAttributes<HTMLDivElement>> = ({
  data,
  ...props
}) => (
  <div {...props}>
    <StyledSectionHeader>Table of Contents</StyledSectionHeader>
    <ul>
      {data.map(heading => (
        <li key={heading.url}>
          <Anchor isUnderlined={false} href={heading.url}>
            {heading.title}
          </Anchor>
          {!!heading.items && (
            <ul
              css={css`
                margin-left: ${p => p.theme.space.md};
              `}
            >
              {heading.items.map(subHeading => (
                <li key={subHeading.url}>
                  <Anchor isUnderlined={false} href={subHeading.url}>
                    {subHeading.title}
                  </Anchor>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
    <StyledHr />
  </div>
);

const StyledAnchor = styled(Anchor)<{ isCurrent: boolean }>`
  display: block;
  position: relative;
  transition: none;
  margin: ${p => `${p.theme.space.xxs} 0 ${p.theme.space.xxs} 0`};
  text-align: left;

  &::before {
    position: absolute;
    left: 0;
    border-left: ${p =>
      p.isCurrent &&
      `${p.theme.borders.sm} ${getColor({ theme: p.theme, variable: 'border.emphasis' })}`};
    height: 100%;
    content: '';
  }
`;

export const TOC: React.FC<{ data: IHeading[] }> = ({ data }) => {
  const OFFSET = 500;
  const [activeHeadingUrl, setActiveHeadingUrl] = useState<string>();

  const isValidTocHeading = useCallback(
    (url: string) => {
      return data.some(heading => {
        if (heading.url === url) {
          return true;
        }

        if (heading.items) {
          return heading.items.some(subHeading => subHeading.url === url);
        }

        return false;
      });
    },
    [data]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const findActiveHeading = useCallback(
    throttle(() => {
      const headerAnchors = document.getElementsByClassName(
        'anchor'
      ) as HTMLCollectionOf<HTMLAnchorElement>;

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
    <div
      css={css`
        position: sticky;
        top: ${p => p.theme.space.lg};
        margin-left: ${p => p.theme.space.base * 15}px;
        padding-right: ${p => p.theme.space.sm};
        max-height: calc(100vh - ${p => math(`${p.theme.space.lg} * 2`)});
        overflow-y: auto;
      `}
    >
      <StyledSectionHeader
        css={css`
          margin-bottom: ${p => p.theme.space.xs};
          margin-left: ${p => p.theme.space.md};
        `}
      >
        Table of Contents
      </StyledSectionHeader>
      <ul
        css={css`
          border-left: ${p => p.theme.borders.sm}
            ${p => getColor({ theme: p.theme, variable: 'border.subtle' })};
        `}
      >
        {data.map(heading => (
          <li
            key={heading.url}
            css={css`
              margin-left: -${p => p.theme.borderWidths.sm};
            `}
          >
            <StyledAnchor
              isUnderlined={false}
              href={heading.url}
              isCurrent={activeHeadingUrl === heading.url}
              css={css`
                padding-left: ${p => p.theme.space.base * 6}px;
              `}
            >
              {heading.title}
            </StyledAnchor>
            {!!heading.items && (
              <ul>
                {heading.items.map(subHeading => (
                  <li key={subHeading.url}>
                    <StyledAnchor
                      isUnderlined={false}
                      href={subHeading.url}
                      isCurrent={activeHeadingUrl === subHeading.url}
                      css={css`
                        padding-left: ${p => p.theme.space.base * 9}px;
                      `}
                    >
                      {subHeading.title}
                    </StyledAnchor>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
