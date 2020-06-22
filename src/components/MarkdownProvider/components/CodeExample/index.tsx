/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useState, useMemo, useEffect } from 'react';
import { css, DefaultTheme } from 'styled-components';
import { ThemeProvider, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import { Tooltip } from '@zendeskgarden/react-tooltips';
import { IconButton, ToggleIconButton } from '@zendeskgarden/react-buttons';
import { ReactComponent as MarkupStroke } from '@zendeskgarden/svg-icons/src/16/markup-stroke.svg';
import { ReactComponent as CopyStroke } from '@zendeskgarden/svg-icons/src/16/copy-stroke.svg';
import { ReactComponent as LightningBoltStroke } from '@zendeskgarden/svg-icons/src/16/lightning-bolt-stroke.svg';
import { ReactComponent as DirectionRtlStroke } from '@zendeskgarden/svg-icons/src/16/direction-rtl-stroke.svg';
import { SyntaxHighlighter } from './components/SyntaxHighlighter';
import { retrieveCodesandboxParameters } from './utils/retrieveCodesandboxParameters';
import { copyToClipboard } from './utils/copyToClipboard';

export const CodeExample: React.FC<{ code: string }> = ({ children, code }) => {
  const [isRtl, setIsRtl] = useState(false);
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  const focusVisibleRef = useRef(null);
  const initialTooltipContent = 'Copy to clipboard';
  const [tooltipContent, setTooltipContent] = useState(initialTooltipContent);
  const COPYRIGHT_REGEXP = /\/\*\*\n\s\*\sCopyright[\s\S]*\*\/\n\n/gmu;

  const exampleTheme = useMemo<DefaultTheme>(() => {
    return { ...DEFAULT_THEME, rtl: isRtl };
  }, [isRtl]);

  const parameters = useMemo(() => {
    return retrieveCodesandboxParameters(code);
  }, [code]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (tooltipContent !== initialTooltipContent) {
      timeout = setTimeout(() => {
        setTooltipContent(initialTooltipContent);
      }, 3000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [tooltipContent]);

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
          {children}
        </div>
      </ThemeProvider>
      <div
        css={css`
          display: flex;
          justify-content: flex-end;
          border-top: ${p => p.theme.borders.sm} ${p => getColor('grey', 300, p.theme)};
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
        <form action="https://codesandbox.io/api/v1/sandboxes/define" method="POST" target="_blank">
          <input type="hidden" name="parameters" value={parameters} />
          <input type="hidden" name="query" value="module=src/Example.tsx" />
          <Tooltip content="Fork in Codesandbox">
            <IconButton
              isPill={false}
              focusInset
              type="submit"
              css={css`
                margin-left: ${p => p.theme.space.sm};
              `}
            >
              <LightningBoltStroke />
            </IconButton>
          </Tooltip>
        </form>
        <Tooltip content={tooltipContent}>
          <IconButton
            onClick={() => {
              copyToClipboard(code);
              setTooltipContent('Code copied to clipboard...');
            }}
            isPill={false}
            focusInset
            css={css`
              margin-left: ${p => p.theme.space.sm};
            `}
          >
            <CopyStroke />
          </IconButton>
        </Tooltip>
        <Tooltip content={isCodeVisible ? 'Hide code' : 'Show code'}>
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
      {isCodeVisible && <SyntaxHighlighter>{code.replace(COPYRIGHT_REGEXP, '')}</SyntaxHighlighter>}
    </div>
  );
};
