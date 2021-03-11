/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useState, useMemo } from 'react';
import { math, rgba } from 'polished';
import styled, { css, DefaultTheme } from 'styled-components';
import { ThemeProvider, DEFAULT_THEME, getColor, PALETTE } from '@zendeskgarden/react-theming';
import { Tooltip } from '@zendeskgarden/react-tooltips';
import { CodeBlock } from '@zendeskgarden/react-typography';
import { ColorpickerDialog, IColor } from '@zendeskgarden/react-colorpickers';
import { IconButton, ToggleIconButton } from '@zendeskgarden/react-buttons';
import { ReactComponent as MarkupStroke } from '@zendeskgarden/svg-icons/src/16/markup-stroke.svg';
import { ReactComponent as CopyStroke } from '@zendeskgarden/svg-icons/src/16/copy-stroke.svg';
import { ReactComponent as PaletteStroke } from '@zendeskgarden/svg-icons/src/16/palette-stroke.svg';
import { ReactComponent as PaletteFill } from '@zendeskgarden/svg-icons/src/16/palette-fill.svg';
import { ReactComponent as DirectionRtlStroke } from '@zendeskgarden/svg-icons/src/16/direction-rtl-stroke.svg';
import { ReactComponent as CodeSandboxIcon } from './assets/codesandbox-icon.svg';
import { retrieveCodesandboxParameters } from './utils/retrieveCodesandboxParameters';
import { copyToClipboard } from './utils/copyToClipboard';

const StyledCodeBlock = styled(CodeBlock)`
  border-bottom-left-radius: ${props => math(`${props.theme.borderRadii.md} - 1px`)};
  border-bottom-right-radius: ${props => math(`${props.theme.borderRadii.md} - 1px`)};
`;

export const CodeExample: React.FC<{ code: string }> = ({ children, code }) => {
  const [isRtl, setIsRtl] = useState(false);
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  const [primaryHue, setPrimaryHue] = useState<string | IColor>(DEFAULT_THEME.colors.primaryHue);
  const [color, setColor] = useState<string>(PALETTE.blue[600]);
  const focusVisibleRef = useRef(null);
  const COPYRIGHT_REGEXP = /\/\*\*\n\s\*\sCopyright[\s\S]*\*\/\n\n/gmu;

  const exampleTheme = useMemo<DefaultTheme>(() => {
    let hue;

    if (typeof primaryHue === 'string') {
      hue = primaryHue;
    } else {
      hue = rgba(primaryHue.red, primaryHue.green, primaryHue.blue, primaryHue.alpha);
      setColor(hue);
    }

    return {
      ...DEFAULT_THEME,
      colors: { ...DEFAULT_THEME.colors, primaryHue: hue },
      rtl: isRtl
    };
  }, [isRtl, primaryHue]);

  const parameters = useMemo(() => {
    return retrieveCodesandboxParameters(code);
  }, [code]);

  return (
    <div
      css={css`
        margin-bottom: ${p => p.theme.space.xl};
        border: ${p => p.theme.borders.sm} ${p => getColor('grey', 300, p.theme)};
        border-radius: ${p => p.theme.borderRadii.md};
      `}
    >
      <ThemeProvider theme={exampleTheme} focusVisibleRef={focusVisibleRef}>
        <div
          css={css`
            padding: ${p => p.theme.space.md};
            direction: ${p => p.theme.rtl && 'rtl'};
          `}
        >
          {typeof window === 'undefined' /* isSSR */ ? undefined : children}
        </div>
      </ThemeProvider>
      <div
        css={css`
          display: flex;
          justify-content: flex-end;
          border-top: ${p => p.theme.borders.sm} ${p => getColor('grey', 300, p.theme)};
          border-bottom-left-radius: ${p => p.theme.borderRadii.md};
          border-bottom-right-radius: ${p => p.theme.borderRadii.md};
          background-color: ${p => getColor('grey', 100, p.theme)};
          padding: ${p => p.theme.space.xxs} ${p => p.theme.space.sm};
        `}
      >
        <Tooltip content="Toggle RTL">
          <ToggleIconButton
            onClick={() => setIsRtl(!isRtl)}
            isPressed={isRtl}
            isPill={false}
            focusInset
          >
            <DirectionRtlStroke />
          </ToggleIconButton>
        </Tooltip>
        <ColorpickerDialog color={color} onChange={setPrimaryHue}>
          <IconButton isPill={false} focusInset>
            {typeof primaryHue === 'string' ? <PaletteStroke /> : <PaletteFill style={{ color }} />}
          </IconButton>
        </ColorpickerDialog>
        <form action="https://codesandbox.io/api/v1/sandboxes/define" method="POST" target="_blank">
          <input type="hidden" name="parameters" value={parameters} />
          <input type="hidden" name="query" value="module=src/Example.tsx" />
          <Tooltip content="Open in CodeSandbox">
            <IconButton
              isPill={false}
              focusInset
              type="submit"
              css={css`
                margin-left: ${p => p.theme.space.sm};
              `}
            >
              <CodeSandboxIcon />
            </IconButton>
          </Tooltip>
        </form>
        <Tooltip content="Copy code">
          <IconButton
            onClick={() => copyToClipboard(code)}
            isPill={false}
            focusInset
            css={css`
              margin-left: ${p => p.theme.space.sm};
            `}
          >
            <CopyStroke />
          </IconButton>
        </Tooltip>
        <Tooltip content="View code">
          <ToggleIconButton
            onClick={() => setIsCodeVisible(!isCodeVisible)}
            isPressed={isCodeVisible}
            isPill={false}
            focusInset
            css={css`
              margin-left: ${p => p.theme.space.sm};
            `}
          >
            <MarkupStroke />
          </ToggleIconButton>
        </Tooltip>
      </div>
      {isCodeVisible && <StyledCodeBlock>{code.replace(COPYRIGHT_REGEXP, '')}</StyledCodeBlock>}
    </div>
  );
};
