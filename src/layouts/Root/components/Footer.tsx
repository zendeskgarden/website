/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled, { css } from 'styled-components';
import { SELECTOR_FOCUS_VISIBLE, getColor, mediaQuery } from '@zendeskgarden/react-theming';
import { Link } from './StyledNavigationLink';
import MaxWidthLayout from 'layouts/MaxWidth';
import { StyledGardenIcon } from './Header';

const StyledFooterItem = styled(Link)`
  margin-right: ${p => p.theme.space.lg};
  color: ${({ theme }) => getColor({ hue: 'white', theme })};

  &:hover {
    text-decoration: underline;
  }

  &:hover,
  &:focus {
    color: inherit;
  }

  ${SELECTOR_FOCUS_VISIBLE} {
    /*
      updates the default outline-color from
      css-bedrock for the darker footer background
    */
    outline-color: currentcolor;
  }

  ${p => mediaQuery('down', 'sm', p.theme)} {
    margin-right: 0;
  }
`;

interface IFooterProps {
  path?: string;
}

const Footer: React.FC<IFooterProps> = ({ path }) => (
  <footer
    css={css`
      background-color: ${p => getColor({ theme: p.theme, hue: 'chromeHue', shade: 900 })};
      padding: ${p => p.theme.space.md};
      line-height: ${p => p.theme.lineHeights.md};
      color: ${({ theme }) => getColor({ hue: 'white', theme })};
      font-size: ${p => p.theme.fontSizes.md};
    `}
  >
    <MaxWidthLayout>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          padding-bottom: ${p => p.theme.space.md};

          ${p => mediaQuery('down', 'sm', p.theme)} {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;

            ${p => mediaQuery('down', 'sm', p.theme)} {
              margin-bottom: ${p => p.theme.space.xs};
            }
          `}
        >
          <StyledGardenIcon />
        </div>
        <div
          css={css`
            padding: 0 ${p => p.theme.space.sm};
          `}
        >
          Garden is the design system by Zendesk.
        </div>
      </div>
      <div
        css={css`
          display: flex;
          border-top: ${p => p.theme.borders.sm}
            ${p => getColor({ theme: p.theme, hue: 'chromeHue', shade: 700 })};
          padding-top: ${p => p.theme.space.md};
          padding-bottom: ${p => p.theme.space.lg};

          ${p => mediaQuery('down', 'sm', p.theme)} {
            flex-direction: column;
            text-align: center;
          }
        `}
      >
        <StyledFooterItem to="https://design.zendesk.com">Blog</StyledFooterItem>
        <StyledFooterItem to="https://www.github.com/zendeskgarden">GitHub</StyledFooterItem>
        <StyledFooterItem to="/components/versions">Versions</StyledFooterItem>
        {path === '/' ? (
          <StyledFooterItem to="https://www.netlify.com/">
            This site is powered by Netlify
          </StyledFooterItem>
        ) : null}
        <div
          css={css`
            flex-grow: 1;
            text-align: right;

            ${p => mediaQuery('down', 'sm', p.theme)} {
              margin-top: ${p => p.theme.space.md};
              width: 100%;
              text-align: center;
            }
          `}
        >
          © Zendesk {new Date().getFullYear()}
        </div>
      </div>
    </MaxWidthLayout>
  </footer>
);

export default Footer;
