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
import { PALETTE } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

const StyledDiv = styled.div`
  padding: ${p => p.theme.space.base * 6}px;
`;

const StyledParagraph = styled(Paragraph)`
  margin-top: ${p => p.theme.space.xs};
`;

const StyledPaneContent = styled(Pane.Content)`
  height: 180px;
`;

const Example = () => {
  const { ref, width = 1, height = 1 } = useResizeObserver();

  return (
    <div ref={ref}>
      <PaneProvider
        totalPanesHeight={height}
        totalPanesWidth={width}
        defaultColumnValues={{
          'column-1': 10,
          'column-2': 10
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
            <Pane
              style={{
                backgroundColor: PALETTE.grey[100]
              }}
            >
              <StyledDiv>
                <StyledPaneContent>
                  <XL>Pane 1</XL>
                  <StyledParagraph>
                    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi
                    amaranth water spinach avocado.
                  </StyledParagraph>
                </StyledPaneContent>
              </StyledDiv>
              <Pane.Splitter layoutKey="column-1" min={1} max={10} aria-label="pane1 splitter">
                <Pane.SplitterButton label="Toggle column-1" placement="start" />
              </Pane.Splitter>
            </Pane>
            <Pane>
              <StyledDiv>
                <StyledPaneContent>
                  <XL>Pane 2</XL>
                  <StyledParagraph>
                    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi
                    amaranth water spinach avocado.
                  </StyledParagraph>
                </StyledPaneContent>
              </StyledDiv>
            </Pane>
          </div>
        )}
      </PaneProvider>
    </div>
  );
};

export default Example;
