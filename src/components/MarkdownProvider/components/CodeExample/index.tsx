/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useMemo, PropsWithChildren } from 'react';
import { math, rgba } from 'polished';
import styled, { css, DefaultTheme, useTheme } from 'styled-components';
import { ThemeProvider, DEFAULT_THEME, getColor, PALETTE } from '@zendeskgarden/react-theming';
import { Notification, useToast } from '@zendeskgarden/react-notifications';
import { Tooltip } from '@zendeskgarden/react-tooltips';
import { CodeBlock } from '@zendeskgarden/react-typography';
import { ColorPickerDialog, IColor } from '@zendeskgarden/react-colorpickers';
import { IconButton, ToggleIconButton } from '@zendeskgarden/react-buttons';
import { ReactComponent as MarkupStroke } from '@zendeskgarden/svg-icons/src/16/markup-stroke.svg';
import { ReactComponent as MarkupFill } from '@zendeskgarden/svg-icons/src/16/markup-fill.svg';
import { ReactComponent as CopyStroke } from '@zendeskgarden/svg-icons/src/16/copy-stroke.svg';
import { ReactComponent as PaletteStroke } from '@zendeskgarden/svg-icons/src/16/palette-stroke.svg';
import { ReactComponent as PaletteFill } from '@zendeskgarden/svg-icons/src/16/palette-fill.svg';
import { ReactComponent as DirectionRtlStroke } from '@zendeskgarden/svg-icons/src/16/direction-rtl-stroke.svg';
import { ReactComponent as DirectionRtlFill } from '@zendeskgarden/svg-icons/src/16/direction-rtl-fill.svg';
// TODO replace with sun/moon icons when available
import { ReactComponent as LightStroke } from '@zendeskgarden/svg-icons/src/16/circle-stroke.svg';
import { ReactComponent as LightFill } from '@zendeskgarden/svg-icons/src/16/circle-fill.svg';
import { ReactComponent as DarkStroke } from '@zendeskgarden/svg-icons/src/16/circle-full-stroke.svg';
import { ReactComponent as DarkFill } from '@zendeskgarden/svg-icons/src/16/circle-full-fill.svg';
import { ReactComponent as CodeSandboxIcon } from './assets/codesandbox-icon.svg';
import { retrieveCodesandboxParameters } from './utils/retrieveCodesandboxParameters';
import { copyToClipboard } from './utils/copyToClipboard';

const ModeIcon = ({
  parentTheme,
  exampleTheme
}: {
  parentTheme: DefaultTheme;
  exampleTheme: DefaultTheme;
}) => {
  if (parentTheme.colors.base === 'dark') {
    return exampleTheme.colors.base === 'light' ? <LightFill /> : <LightStroke />;
  }

  return exampleTheme.colors.base === 'dark' ? <DarkFill /> : <DarkStroke />;
};

const StyledCodeBlock = styled(CodeBlock)`
  border-bottom-left-radius: ${props => math(`${props.theme.borderRadii.md} - 1px`)};
  border-bottom-right-radius: ${props => math(`${props.theme.borderRadii.md} - 1px`)};
`;

const PaletteIconButton = React.forwardRef(
  (props: React.ComponentPropsWithoutRef<'button'>, ref: React.Ref<HTMLButtonElement>) => (
    <Tooltip content="Set primary hue">
      <IconButton isPill={false} focusInset ref={ref} {...props} />
    </Tooltip>
  )
);

interface ICodeExampleProps extends PropsWithChildren {
  code: string;
}

export const CodeExample: React.FC<ICodeExampleProps> = ({ children, code }) => {
  const parentTheme = useTheme();
  const [isModeToggled, setIsModeToggled] = useState(false);
  const [isRtl, setIsRtl] = useState(false);
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  const [color, setColor] = useState<string | IColor>(PALETTE.blue[700]);
  const { addToast } = useToast();
  const COPYRIGHT_REGEXP = /\/\*\*\n\s\*\sCopyright[\s\S]*\*\/\n\n/gmu;

  const exampleTheme = useMemo<any>(() => {
    let primaryHue;

    if (
      typeof color === 'string' ||
      (color.hex.toLowerCase() === PALETTE.blue[700] && color.alpha === 100)
    ) {
      primaryHue = DEFAULT_THEME.colors.primaryHue;
    } else {
      primaryHue = rgba(color.red, color.green, color.blue, color.alpha / 100);
    }

    let base;

    if (parentTheme.colors.base === 'dark') {
      base = isModeToggled ? 'light' : 'dark';
    } else {
      base = isModeToggled ? 'dark' : 'light';
    }

    return {
      ...DEFAULT_THEME,
      colors: { ...DEFAULT_THEME.colors, base, primaryHue },
      rtl: isRtl
    };
  }, [isModeToggled, isRtl, color, parentTheme.colors.base]);

  const parameters = useMemo(() => {
    return retrieveCodesandboxParameters(code);
  }, [code]);

  const handleCopy = () => {
    copyToClipboard(code);
    addToast(({ close }) => (
      <Notification type="success">
        <Notification.Title>Code copied</Notification.Title>
        <Notification.Close aria-label="Close" onClick={close} />
      </Notification>
    ));
  };

  return (
    <div
      css={css`
        margin-bottom: ${p => p.theme.space.xl};
        border: ${p => p.theme.borders.sm}
          ${p => getColor({ theme: p.theme, variable: 'border.default' })};
        border-radius: ${p => p.theme.borderRadii.md};
      `}
    >
      <ThemeProvider theme={exampleTheme}>
        <div
          css={css`
            transition: background-color 0.25s ease-in-out;
            border-top-left-radius: ${props => math(`${props.theme.borderRadii.md} - 1px`)};
            border-top-right-radius: ${props => math(`${props.theme.borderRadii.md} - 1px`)};
            background-color: ${p => getColor({ theme: p.theme, variable: 'background.default' })};
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
          border-top: ${p => p.theme.borders.sm}
            ${p => getColor({ theme: p.theme, variable: 'border.default' })};
          border-bottom-left-radius: ${p => p.theme.borderRadii.md};
          border-bottom-right-radius: ${p => p.theme.borderRadii.md};
          background-color: ${p => getColor({ theme: p.theme, variable: 'background.subtle' })};
          padding: ${p => p.theme.space.xxs} ${p => p.theme.space.sm};
        `}
      >
        <Tooltip content={`Toggle ${parentTheme.colors.base === 'light' ? 'dark' : 'light'} mode`}>
          <ToggleIconButton
            onClick={() => {
              setIsModeToggled(!isModeToggled);
            }}
            isPressed={isModeToggled}
            isPill={false}
            focusInset
          >
            <ModeIcon parentTheme={parentTheme} exampleTheme={exampleTheme} />
          </ToggleIconButton>
        </Tooltip>
        <ColorPickerDialog color={color} onChange={setColor} placement="bottom-end">
          <PaletteIconButton>
            {exampleTheme.colors.primaryHue === DEFAULT_THEME.colors.primaryHue ? (
              <PaletteStroke />
            ) : (
              <PaletteFill style={{ color: exampleTheme.colors.primaryHue }} />
            )}
          </PaletteIconButton>
        </ColorPickerDialog>
        <Tooltip content="Toggle RTL">
          <ToggleIconButton
            onClick={() => {
              setIsRtl(!isRtl);
            }}
            isPressed={isRtl}
            isPill={false}
            focusInset
          >
            {isRtl ? <DirectionRtlFill /> : <DirectionRtlStroke />}
          </ToggleIconButton>
        </Tooltip>
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
            onClick={handleCopy}
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
            onClick={() => {
              setIsCodeVisible(!isCodeVisible);
            }}
            isPressed={isCodeVisible}
            isPill={false}
            focusInset
            css={css`
              margin-left: ${p => p.theme.space.sm};
            `}
          >
            {isCodeVisible ? <MarkupFill /> : <MarkupStroke />}
          </ToggleIconButton>
        </Tooltip>
      </div>
      {!!isCodeVisible && <StyledCodeBlock>{code.replace(COPYRIGHT_REGEXP, '')}</StyledCodeBlock>}
    </div>
  );
};
