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
import { getColor } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

const StyledPaneContent = styled(Pane.Content)<{ isSecondary?: boolean }>`
  padding: ${p => p.theme.space.base * 6}px;
  height: 240px;
  ${p => p.isSecondary && `background-color: ${getColor('neutralHue', 100, p.theme)}`};
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
        defaultColumnValues={{
          'column-1': 1,
          'column-2': 1
        }}
      >
        {({ getGridTemplateColumns }) => (
          <div
            style={{
              width,
              height: '100%',
              display: 'grid',
              gridTemplateColumns: getGridTemplateColumns()
            }}
          >
            <Pane>
              <StyledPaneContent isSecondary>
                <XL>Pane 1</XL>
                <StyledParagraph>
                  Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi
                  amaranth water spinach avocado.
                </StyledParagraph>
              </StyledPaneContent>
              <Pane.Splitter layoutKey="column-1" min={0.5} max={1.5} aria-label="pane1 splitter" />
            </Pane>
            <Pane>
              <StyledPaneContent>
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
