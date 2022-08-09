/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { PaneProvider, Pane } from '@zendeskgarden/react-grid';
import useResizeObserver from 'use-resize-observer';
import { XL, XXL, Paragraph } from '@zendeskgarden/react-typography';
import styled from 'styled-components';
import { getColor } from '@zendeskgarden/react-theming';

const StyledDiv = styled.div`
  padding: ${p => p.theme.space.base * 6}px;
`;

const StyledXXL = styled(XXL)`
  margin-bottom: ${p => p.theme.space.base * 6}px;
  text-transform: capitalize;
`;

const StyledParagraph = styled(Paragraph)`
  margin-top: ${p => p.theme.space.xs};
`;

const StyledPaneContent = styled(Pane.Content)`
  height: 180px;
`;

const StyledPanesContainer = styled.div`
  & > :first-child {
    background-color: ${p => getColor('neutralHue', 100, p.theme)};
  }

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space.base * 6}px;
  }
`;

const Example = () => {
  const { ref, width = 1, height = 1 } = useResizeObserver();

  type possibleIconPositions = 'start' | 'center' | 'end';
  const iconPositions: possibleIconPositions[] = ['start', 'center', 'end'];

  return (
    <div ref={ref}>
      {iconPositions.map(position => (
        <>
          <StyledXXL isBold>{position}</StyledXXL>
          <PaneProvider
            totalPanesHeight={height}
            totalPanesWidth={width}
            defaultColumnValues={{
              'column-1': 10,
              'column-2': 10
            }}
            key={`${position}-provider`}
          >
            {({ getGridTemplateColumns }) => (
              <StyledPanesContainer
                style={{
                  width,
                  height: '100%',
                  display: 'grid',
                  gridTemplateColumns: getGridTemplateColumns()
                }}
              >
                <Pane>
                  <StyledDiv>
                    <StyledPaneContent>
                      <XL>Pane 1</XL>
                      <StyledParagraph>
                        Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
                        kohlrabi amaranth water spinach avocado.
                      </StyledParagraph>
                    </StyledPaneContent>
                  </StyledDiv>
                  <Pane.Splitter layoutKey="column-1" min={5} max={10} aria-label="pane1 splitter">
                    <Pane.SplitterButton label="Toggle column-1" placement={position} />
                  </Pane.Splitter>
                </Pane>
                <Pane>
                  <StyledDiv>
                    <StyledPaneContent>
                      <XL>Pane 2</XL>
                      <StyledParagraph>
                        Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
                        kohlrabi amaranth water spinach avocado.
                      </StyledParagraph>
                    </StyledPaneContent>
                  </StyledDiv>
                </Pane>
              </StyledPanesContainer>
            )}
          </PaneProvider>
        </>
      ))}
    </div>
  );
};

export default Example;
