/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import { math } from 'polished';
import { getColor } from '@zendeskgarden/react-theming';
import { ReactComponent as GardenIcon } from '@zendeskgarden/svg-icons/src/26/garden.svg';
import MaxWidthLayout from 'layouts/MaxWidth';

const Footer: React.FC = () => (
  <footer
    css={css`
      background-color: ${p => getColor('kale', 700, p.theme)};
      padding: ${p => p.theme.space.md};
      line-height: ${p => p.theme.lineHeights.md};
      color: ${p => p.theme.palette.white};
      font-size: ${p => p.theme.fontSizes.md};
    `}
  >
    <MaxWidthLayout>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          border-top: ${p => p.theme.borders.sm} ${p => getColor('kale', 500, p.theme)};
          padding-top: ${p => p.theme.space.md};

          @media (max-width: ${p => p.theme.breakpoints.md}) {
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

            @media (max-width: ${p => p.theme.breakpoints.md}) {
              margin-bottom: ${p => p.theme.space.md};
            }
          `}
        >
          <GardenIcon
            css={css`
              width: ${p => p.theme.iconSizes.lg};
              height: ${p => p.theme.iconSizes.lg};
              color: ${p => getColor('green', 400, p.theme)};
            `}
          />
        </div>
        <div
          css={css`
            flex-basis: ${p => math(`${p.theme.iconSizes.md} + ${p.theme.space.md}`)};
            flex-grow: 1;
            padding: 0 ${p => p.theme.space.sm};
          `}
        >
          Garden is a design system for Zendesk where we grow beautifully simple and accessible UI
          components.
        </div>
        <div
          css={css`
            @media (max-width: ${p => p.theme.breakpoints.lg}) {
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
