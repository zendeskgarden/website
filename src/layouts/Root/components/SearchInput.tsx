/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, useEffect } from 'react';
import { css, DefaultTheme, ThemeProps } from 'styled-components';
import { math } from 'polished';
import { getColor, mediaQuery, menuStyles } from '@zendeskgarden/react-theming';
import { MediaInput } from '@zendeskgarden/react-forms';
import { ReactComponent as SearchStroke } from '@zendeskgarden/svg-icons/src/16/search-stroke.svg';

const searchStyles = (props: ThemeProps<DefaultTheme>) => {
  const theme = props.theme;
  const positionTop = math(`${theme.space.base * 3.5} + ${theme.borderWidths.sm}`);
  const positionLeft = math(`${theme.space.base * -9} - ${theme.borderWidths.sm}`);
  const positionRight = math(`${theme.space.base * -3} - ${theme.borderWidths.sm}`);
  const highlightBackgroundColor = getColor('primaryHue', 800, theme, 0.08);
  const hoverBackgroundColor = getColor('primaryHue', 600, theme, 0.08);
  const hoverSeparatorColor = getColor('neutralHue', 250, theme);
  const metaColor = getColor('neutralHue', 600, theme);
  const separatorColor = getColor('neutralHue', 200, theme);

  return css`
    ${p =>
      menuStyles('bottom', {
        animationModifier: '.algolia-autocomplete',
        childSelector: ' .ds-dropdown-menu',
        theme: p.theme
      })}

    width: 100%;

    /* stylelint-disable
        declaration-no-important,
        max-nesting-depth,
        selector-max-specificity,
        selector-max-compound-selectors */

    & .ds-dropdown-menu {
      top: calc(100% + ${positionTop}) !important;
      right: ${positionRight} !important;
      line-height: ${theme.lineHeights.md};

      &::before {
        display: none;
      }

      & [class^='ds-dataset-'] {
        border: none;
        padding: 0;

        & .ds-suggestions {
          margin-top: ${theme.space.xxs};
        }

        & .algolia-docsearch-suggestion {
          padding: 0;
          color: inherit;

          & .algolia-docsearch-suggestion--highlight {
            background-color: ${highlightBackgroundColor};
            padding: 0;
            color: inherit;
          }

          & .algolia-docsearch-suggestion--category-header {
            margin: 0;
            margin-bottom: ${theme.space.xxs};
            border-color: ${separatorColor};
            padding: ${theme.space.xs} ${theme.space.sm} ${theme.space.sm};
            color: inherit;
            font-weight: ${theme.fontWeights.semibold};

            & .algolia-docsearch-suggestion--highlight {
              box-shadow: none;
              background-color: transparent;
            }
          }

          & .algolia-docsearch-suggestion--subcategory-column {
            padding: 0;
            padding-right: ${theme.space.sm};
            color: ${metaColor};
            font-size: inherit;
            font-weight: ${theme.fontWeights.regular};

            ${p => mediaQuery('down', 'sm', p.theme)} {
              padding-right: 0;
            }

            & .algolia-docsearch-suggestion--highlight {
              background-color: transparent;
            }
          }

          & .algolia-docsearch-suggestion--content {
            padding: 0;
            padding-left: ${theme.space.sm};

            ${p => mediaQuery('down', 'sm', p.theme)} {
              padding-left: ${theme.space.xxs};
            }
          }

          & .algolia-docsearch-suggestion--text {
            line-height: ${theme.lineHeights.sm};
            color: ${metaColor};
            font-size: ${theme.fontSizes.sm};

            & .algolia-docsearch-suggestion--highlight {
              box-shadow: none;
              background-color: transparent;
              text-decoration: underline;
            }
          }

          & .algolia-docsearch-suggestion--title {
            margin: 0;
            font-size: inherit;
            font-weight: ${theme.fontWeights.regular};
          }

          & .algolia-docsearch-suggestion--wrapper {
            padding: ${theme.space.xs} ${theme.space.base * 9}px;

            & > *::before {
              background-color: ${separatorColor};
            }
          }
        }

        & .ds-cursor {
          & .algolia-docsearch-suggestion--wrapper {
            background-color: ${hoverBackgroundColor};

            & > *::before {
              background-color: ${hoverSeparatorColor};
            }

            & .algolia-docsearch-suggestion--content {
              background-color: transparent;
            }
          }
        }

        & .algolia-docsearch-footer {
          margin: ${theme.space.xs} ${theme.space.sm};
          width: 120px;
        }
      }

      ${p => mediaQuery('down', 'sm', p.theme)} {
        left: ${positionLeft} !important;
        min-width: 260px;
        max-width: 343px;
      }
    }
  `;
};

declare global {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  interface Window {
    docsearch: any;
  }
}

export const SearchInput = React.forwardRef<HTMLInputElement, HTMLAttributes<HTMLInputElement>>(
  ({ id, ...props }, ref) => {
    useEffect(() => {
      if (typeof window !== 'undefined' /* not SSR */ && window.docsearch) {
        window.docsearch({
          apiKey: 'c1ab842b2bfd6f3f7104a8e903c615bf',
          indexName: 'garden_zendesk',
          inputSelector: `#${id}`,
          debug: process.env.NODE_ENV === 'development'
        });
      }
    }, [id]);

    return (
      <div
        css={css`
          & .algolia-autocomplete {
            ${p => searchStyles(p)}
          }
        `}
      >
        <MediaInput
          start={<SearchStroke />}
          aria-label="Search"
          id={id}
          ref={ref}
          wrapperProps={{ style: { overflow: 'visible' } }}
          {...props}
        />
      </div>
    );
  }
);
