/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef } from 'react';
import { css, createGlobalStyle } from 'styled-components';
import { Link } from 'gatsby';
import { ReactComponent as GardenWordmark } from '../../images/garden-wordmark.svg';
import { ThemeProvider, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';

/**
 * Include global CSS resets
 */
import '@zendeskgarden/css-bedrock/dist/index.css';
import { math } from 'polished';

const GlobalStyling = createGlobalStyle`
  /* stylelint-disable-next-line selector-max-id, selector-max-specificity */
  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  }

  .heading-anchor {
    margin-left: -24px;
    padding-right: 4px;
  }
`;

export const RootLayout: React.FC = ({ children }) => {
  const focusVisibleRef = useRef(null);
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <ThemeProvider
      focusVisibleRef={focusVisibleRef}
      theme={{ ...DEFAULT_THEME, palette: { ...DEFAULT_THEME.palette } }}
    >
      <GlobalStyling />
      <div
        ref={focusVisibleRef}
        css={`
          height: 100%;
          display: flex;
          flex-direction: column;};
        `}
      >
        <header
          css={css`
            display: flex;
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            z-index: 1;
            border-bottom: ${p =>
              `${math(`${p.theme.borderWidths.sm} / 2`)} ${p.theme.borderStyles.solid} ${getColor(
                'neutralHue',
                400,
                p.theme
              )}`};
            background-color: ${p => p.theme.colors.background};
            padding: ${props => props.theme.space.md};
          `}
        >
          <Link
            to="/"
            css={`
              text-decoration: none;
              line-height: 0;
            `}
          >
            <GardenWordmark
              css={`
                width: 100px;
                height: 20px;
              `}
            />
          </Link>
          <div
            css={`
              flex-grow: 1;
            `}
          />
          <Link
            to="/content/overview"
            css={css`
              margin-left: ${p => p.theme.space.md};
              text-decoration: none;
            `}
          >
            Content
          </Link>
          <Link
            to="/"
            css={css`
              margin-left: ${p => p.theme.space.md};
              text-decoration: none;
            `}
          >
            Design
          </Link>
          <Link
            to="/"
            css={css`
              margin-left: ${p => p.theme.space.md};
              text-decoration: none;
            `}
          >
            Components
          </Link>
        </header>
        <div
          css={`
            flex: 1 0 auto;
            margin-top: 60px;
          `}
        >
          {children}
        </div>
        <footer
          css={css`
            border-top: ${p =>
              `${math(`${p.theme.borderWidths.sm} / 2`)} ${p.theme.borderStyles.solid} ${getColor(
                'neutralHue',
                400,
                p.theme
              )}`};
            padding: ${p => p.theme.space.md};
            text-align: center;
          `}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </ThemeProvider>
  );
};
