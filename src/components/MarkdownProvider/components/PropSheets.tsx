/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { ComponentDoc } from 'react-docgen-typescript';
import { Paragraph } from '@zendeskgarden/react-typography';
import styled from 'styled-components';
import { Table, Head, Body, HeaderRow, HeaderCell, Row, Cell } from '@zendeskgarden/react-tables';
import { StyledH4 } from './Typography';

const StyledRow = styled(Row)`
  font-family: ${p => p.theme.fonts.mono};
`;

const StyledCopy = styled.div`
  margin: 0 0 ${p => p.theme.space.base * 6}px;
`;

export const PropSheets: React.FC<{ data: ComponentDoc[] }> = ({ data }) => {
  return (
    <>
      {data &&
        data.map((propSheet, index) => (
          <div key={`${propSheet.displayName}-${index}`}>
            <StyledCopy>
              <StyledH4>{propSheet.displayName}</StyledH4>
              <Paragraph>{propSheet.description}</Paragraph>
            </StyledCopy>
            <Table>
              <Head>
                <HeaderRow>
                  <HeaderCell>Property</HeaderCell>
                  <HeaderCell>Description</HeaderCell>
                  <HeaderCell>Type</HeaderCell>
                  <HeaderCell>Default</HeaderCell>
                </HeaderRow>
              </Head>
              <Body>
                {Object.keys(propSheet.props).map(propSheetKey => {
                  const prop = propSheet.props[propSheetKey];

                  return (
                    <StyledRow key={`${propSheet.displayName}-${propSheetKey}`}>
                      <Cell isTruncated>{prop.name}</Cell>
                      <Cell>{prop.description}</Cell>
                      <Cell>{prop.type.name}</Cell>
                      <Cell>{prop.defaultValue ? prop.defaultValue.value : '-'}</Cell>
                    </StyledRow>
                  );
                })}
              </Body>
            </Table>
          </div>
        ))}
    </>
  );
};
