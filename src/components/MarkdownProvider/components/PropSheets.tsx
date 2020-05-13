/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { ComponentDoc } from 'react-docgen-typescript';
import { Paragraph, Code } from '@zendeskgarden/react-typography';
import {
  Table,
  Head,
  Body,
  HeaderRow,
  HeaderCell,
  Row as GRow,
  Cell
} from '@zendeskgarden/react-tables';
import { StyledH4 as Title } from './Typography';

const API = styled.div`
  margin: ${p => p.theme.space.base * 6}px 0;
`;

const Row = styled(GRow)`
  font-family: ${p => p.theme.fonts.mono};
`;

const HeaderContainer = styled.div`
  margin: 0 0 ${p => p.theme.space.base * 6}px;
`;

export const PropSheets: React.FC<{ data: ComponentDoc[] }> = ({ data }) => {
  return (
    <API>
      {data &&
        data.map((propSheet, index) => (
          <div key={`${propSheet.displayName}-${index}`}>
            <HeaderContainer>
              <Title>{propSheet.displayName}</Title>
              <Paragraph>{propSheet.description}</Paragraph>
            </HeaderContainer>
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
                    <Row key={`${propSheet.displayName}-${propSheetKey}`}>
                      <Cell>
                        <Code>{prop.name}</Code>
                      </Cell>
                      <Cell>{prop.description}</Cell>
                      <Cell>{prop.type.name}</Cell>
                      <Cell>{prop.defaultValue ? prop.defaultValue.value : '-'}</Cell>
                    </Row>
                  );
                })}
              </Body>
            </Table>
          </div>
        ))}
    </API>
  );
};
