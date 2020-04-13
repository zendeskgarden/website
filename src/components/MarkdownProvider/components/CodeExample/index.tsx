/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useState, useMemo, useEffect } from 'react';
import styled, { css, DefaultTheme } from 'styled-components';
import { ThemeProvider, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import { Tooltip } from '@zendeskgarden/react-tooltips';
import { IconButton } from '@zendeskgarden/react-buttons';
import { ReactComponent as MarkupStroke } from '@zendeskgarden/svg-icons/src/16/markup-stroke.svg';
import { ReactComponent as CopyStroke } from '@zendeskgarden/svg-icons/src/16/copy-stroke.svg';
import { ReactComponent as LightningBoltStroke } from '@zendeskgarden/svg-icons/src/16/lightning-bolt-stroke.svg';
import { ReactComponent as DirectionLtrStroke } from '@zendeskgarden/svg-icons/src/16/direction-ltr-stroke.svg';
import { ReactComponent as DirectionRtlStroke } from '@zendeskgarden/svg-icons/src/16/direction-rtl-stroke.svg';

import { SyntaxHighlighter } from './components/SyntaxHighlighter';
import { retrieveCodesandboxParameters } from './utils/retrieveCodesandboxParameters';
import { copyToClipboard } from './utils/copyToClipboard';

const StyledExampleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${p => p.theme.space.lg};
  direction: ${p => p.theme.rtl && 'rtl'};
`;

const StyledFooterButton = styled(IconButton).attrs({ isPill: false, focusInset: true })`
  margin-left: ${p => p.theme.space.xxs};
`;

export const CodeExample: React.FC<{ code: string }> = ({ children, code }) => {
  const [isRtl, setIsRtl] = useState(false);
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  const focusVisibleRef = useRef(null);
  const initialTooltipContent = 'Copy to clipboard';
  const [tooltipContent, setTooltipContent] = useState(initialTooltipContent);

  const exampleTheme = useMemo<DefaultTheme>(() => {
    return { ...DEFAULT_THEME, rtl: isRtl };
  }, [isRtl]);

  const parameters = useMemo(() => {
    return retrieveCodesandboxParameters(code);
  }, [code]);

  useEffect(() => {
    let timeout: any;

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
        border: ${p => p.theme.borders.sm} ${p => getColor('grey', 200, p.theme)};
        border-radius: ${p => p.theme.borderRadii.md};
      `}
    >
      <ThemeProvider theme={exampleTheme} focusVisibleRef={focusVisibleRef}>
        <StyledExampleWrapper>{children}</StyledExampleWrapper>
      </ThemeProvider>
      <div
        css={css`
          display: flex;
          justify-content: flex-end;
          background-color: ${p => p.theme.palette.tofu};
          padding: ${p => p.theme.space.xxs} ${p => p.theme.space.xs};
        `}
      >
        <Tooltip content={isRtl ? 'Enable LTR' : 'Enable RTL'}>
          <StyledFooterButton onClick={() => setIsRtl(!isRtl)}>
            {isRtl ? <DirectionRtlStroke /> : <DirectionLtrStroke />}
          </StyledFooterButton>
        </Tooltip>
        <form action="https://codesandbox.io/api/v1/sandboxes/define" method="POST" target="_blank">
          <input type="hidden" name="parameters" value={parameters} />
          <input type="hidden" name="query" value="module=src/Example.tsx" />
          <Tooltip content="Fork in Codesandbox">
            <StyledFooterButton type="submit">
              <LightningBoltStroke />
            </StyledFooterButton>
          </Tooltip>
        </form>
        <Tooltip content={tooltipContent}>
          <StyledFooterButton
            onClick={() => {
              copyToClipboard(code);
              setTooltipContent('Code copied to clipboard...');
            }}
          >
            <CopyStroke />
          </StyledFooterButton>
        </Tooltip>
        <Tooltip content={isCodeVisible ? 'Hide code' : 'Show code'}>
          <StyledFooterButton onClick={() => setIsCodeVisible(!isCodeVisible)}>
            <MarkupStroke />
          </StyledFooterButton>
        </Tooltip>
      </div>
      {isCodeVisible && <SyntaxHighlighter>{code}</SyntaxHighlighter>}
    </div>
  );
};
