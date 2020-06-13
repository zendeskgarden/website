/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { css } from 'styled-components';
import { ComponentDoc } from 'react-docgen-typescript';
import { getColor } from '@zendeskgarden/react-theming';
import { MD, Ellipsis } from '@zendeskgarden/react-typography';
import { Table, Head, Body, HeaderRow, HeaderCell, Row, Cell } from '@zendeskgarden/react-tables';
import { StyledH3, StyledParagraph } from './Typography';

export const PropSheets: React.FC<{ propSheets: ComponentDoc[] }> = ({ propSheets }) => (
  <>
    {propSheets &&
      propSheets.map((propSheet, index) => (
        <div key={`${propSheet.displayName}-${index}`}>
          <StyledH3>{propSheet.displayName}</StyledH3>
          {propSheet.description && <StyledParagraph>{propSheet.description}</StyledParagraph>}
          {Object.keys(propSheet.props).length > 0 && (
            <div
              css={css`
                margin-bottom: ${p => p.theme.space.xl};
                overflow: auto;
              `}
            >
              <Table
                css={`
                  min-width: 700px;
                `}
              >
                <Head>
                  <HeaderRow>
                    <HeaderCell>Prop name</HeaderCell>
                    <HeaderCell>Type</HeaderCell>
                    <HeaderCell>Default</HeaderCell>
                    <HeaderCell>Description</HeaderCell>
                  </HeaderRow>
                </Head>
                <Body>
                  {Object.keys(propSheet.props).map(propSheetKey => {
                    const prop = propSheet.props[propSheetKey];

                    return (
                      <Row key={`${propSheet.displayName}-${propSheetKey}`}>
                        <Cell>
                          <MD
                            tag="span"
                            isMonospace
                            css={css`
                              color: ${p => getColor('neutralHue', 700, p.theme)};
                            `}
                          >
                            <Ellipsis>{prop.name}</Ellipsis>
                          </MD>
                        </Cell>
                        <Cell>
                          <MD
                            tag="span"
                            isMonospace
                            css={css`
                              word-break: break-word;
                              color: ${p => getColor('red', 700, p.theme)};
                            `}
                          >
                            {prop.type.name}
                          </MD>
                        </Cell>
                        <Cell>
                          <MD tag="span" isMonospace>
                            {prop.defaultValue ? prop.defaultValue.value : '–'}
                          </MD>
                        </Cell>
                        <Cell>
                          <MD
                            tag="span"
                            css={`
                              word-break: break-word;
                            `}
                          >
                            {prop.description}
                          </MD>
                        </Cell>
                      </Row>
                    );
                  })}
                </Body>
              </Table>
            </div>
          )}
        </div>
      ))}
  </>
);
