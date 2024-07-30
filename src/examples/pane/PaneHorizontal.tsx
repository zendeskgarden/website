/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { PaneProvider, Pane } from '@zendeskgarden/react-grid';
import useResizeObserver from 'use-resize-observer';
import { XL, Paragraph } from '@zendeskgarden/react-typography';
import { getColorV8 } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

const StyledPaneContent = styled(Pane.Content)<{ isSecondary?: boolean }>`
  padding: ${p => p.theme.space.base * 6}px ${p => p.theme.space.base * 6}px
    ${p => p.theme.space.base * 4}px;
  ${p => p.isSecondary && `background-color: ${getColorV8('neutralHue', 100, p.theme)}`};
`;

const StyledParagraph = styled(Paragraph)`
  margin-top: ${p => p.theme.space.xs};
`;

const Example = () => {
  const { ref, width = 1, height = 1 } = useResizeObserver();

  return (
    <div ref={ref}>
      <PaneProvider
        totalPanesHeight={height}
        totalPanesWidth={width}
        defaultRowValues={{
          'row-1': 1,
          'row-2': 1
        }}
      >
        {({ getGridTemplateRows }) => (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'grid',
              gridTemplateRows: getGridTemplateRows()
            }}
          >
            <Pane>
              <StyledPaneContent>
                <XL>Pane 1</XL>
                <StyledParagraph>
                  Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi
                  amaranth water spinach avocado.
                </StyledParagraph>
              </StyledPaneContent>
              <Pane.Splitter
                layoutKey="row-1"
                orientation="bottom"
                min={0.5}
                max={1.5}
                aria-label="pane1 splitter"
              />
            </Pane>
            <Pane>
              <StyledPaneContent isSecondary>
                <XL>Pane 2</XL>
                <StyledParagraph>
                  Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi
                  amaranth water spinach avocado.
                </StyledParagraph>
              </StyledPaneContent>
            </Pane>
          </div>
        )}
      </PaneProvider>
    </div>
  );
};

export default Example;
