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

const StyledDiv = styled.div`
  padding: ${p => p.theme.space.base * 6}px ${p => p.theme.space.base * 6}px
    ${p => p.theme.space.base * 4}px;
  height: 100%;
`;

const StyledParagraph = styled(Paragraph)`
  margin-top: ${p => p.theme.space.xs};
`;

const StyledPane = styled(Pane)<{ isSecondary?: boolean }>`
  background-color: ${p =>
    p.isSecondary && getColor({ variable: 'background.subtle', theme: p.theme })};
  color: ${p => getColor({ variable: 'foreground.default', theme: p.theme })};
`;

const Example = () => {
  const { ref, width = 1, height = 1 } = useResizeObserver();

  return (
    <div ref={ref}>
      <PaneProvider
        totalPanesHeight={height}
        totalPanesWidth={width}
        defaultRowValues={{
          'row-1': 4,
          'row-2': 4
        }}
      >
        {({ getGridTemplateRows }) => (
          <div
            style={{
              width: '100%',
              height: '250px',
              display: 'grid',
              gridTemplateRows: getGridTemplateRows()
            }}
          >
            <StyledPane>
              <StyledDiv>
                <Pane.Content>
                  <XL>Pane 1</XL>
                  <StyledParagraph>
                    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi
                    amaranth water spinach avocado.
                  </StyledParagraph>
                </Pane.Content>
              </StyledDiv>
            </StyledPane>
            <StyledPane isSecondary>
              <StyledDiv>
                <Pane.Content>
                  <XL>Pane 2</XL>
                  <StyledParagraph>
                    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi
                    amaranth water spinach avocado.
                  </StyledParagraph>
                </Pane.Content>
              </StyledDiv>
              <Pane.Splitter
                layoutKey="row-2"
                orientation="top"
                min={1}
                max={4}
                aria-label="pane2 splitter"
              >
                <Pane.SplitterButton label="Toggle row-2" placement="center" />
              </Pane.Splitter>
            </StyledPane>
          </div>
        )}
      </PaneProvider>
    </div>
  );
};

export default Example;
