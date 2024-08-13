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
import styled from 'styled-components';
import { getColor } from '@zendeskgarden/react-theming';

const StyledParagraph = styled(Paragraph)`
  margin-top: ${p => p.theme.space.xs};
`;

const StyledPaneContent = styled(Pane.Content)`
  padding: ${p => p.theme.space.base * 6}px ${p => p.theme.space.base * 6}px
    ${p => p.theme.space.base * 4}px;
  color: ${p => getColor({ variable: 'foreground.default', theme: p.theme })};
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
              height: '550px',
              display: 'grid',
              gridTemplateColumns: getGridTemplateColumns()
            }}
          >
            <Pane>
              <Pane.Content>
                <PaneProvider
                  totalPanesHeight={500}
                  totalPanesWidth={width}
                  defaultRowValues={{
                    'pane-1': 4,
                    'pane-3': 6
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
                            Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
                            kohlrabi amaranth water spinach avocado.
                          </StyledParagraph>
                        </StyledPaneContent>
                        <Pane.Splitter
                          layoutKey="pane-1"
                          orientation="bottom"
                          min={3}
                          max={6}
                          aria-label="pane1 splitter"
                        />
                      </Pane>
                      <Pane>
                        <StyledPaneContent>
                          <XL>Pane 3</XL>
                          <StyledParagraph>
                            Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
                            kohlrabi amaranth water spinach avocado.
                          </StyledParagraph>
                        </StyledPaneContent>
                      </Pane>
                    </div>
                  )}
                </PaneProvider>
              </Pane.Content>
              <Pane.Splitter layoutKey="column-1" min={5} max={15} aria-label="column1 splitter" />
            </Pane>
            <Pane>
              <Pane.Content>
                <PaneProvider
                  totalPanesHeight={height}
                  totalPanesWidth={width}
                  defaultRowValues={{
                    'pane-2': 6,
                    'pane-4': 4
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
                          <XL>Pane 2</XL>
                          <StyledParagraph>
                            Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
                            kohlrabi amaranth water spinach avocado.
                          </StyledParagraph>
                        </StyledPaneContent>
                        <Pane.Splitter
                          layoutKey="pane-2"
                          orientation="bottom"
                          min={3}
                          max={6}
                          aria-label="pane2 splitter"
                        />
                      </Pane>
                      <Pane>
                        <StyledPaneContent>
                          <XL>Pane 4</XL>
                          <StyledParagraph>
                            Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
                            kohlrabi amaranth water spinach avocado.
                          </StyledParagraph>
                        </StyledPaneContent>
                      </Pane>
                    </div>
                  )}
                </PaneProvider>
              </Pane.Content>
            </Pane>
          </div>
        )}
      </PaneProvider>
    </div>
  );
};

export default Example;
