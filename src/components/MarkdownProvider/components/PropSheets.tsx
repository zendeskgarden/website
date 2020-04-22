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
import { MD } from '@zendeskgarden/react-typography';
import { Table, Head, Body, HeaderRow, HeaderCell, Row, Cell } from '@zendeskgarden/react-tables';

import { IPackage } from './PackageDescription';
import { StyledH3, StyledP } from './Typography';

export const PropSheets: React.FC<{ data: ComponentDoc[]; reactPackage: IPackage }> = ({
  data,
  reactPackage
}) => {
  return (
    <>
      {data &&
        data.map((propSheet, index) => (
          <div key={`${propSheet.displayName}-${index}`}>
            <StyledH3>{propSheet.displayName}</StyledH3>
            <MD isMonospace>
              import {`{${propSheet.displayName}}`} from &quot;{reactPackage.name}&quot;;
            </MD>
            <StyledP>{propSheet.description}</StyledP>
            <Table>
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
                      <Cell
                        css={css`
                          color: ${p => getColor('kale', 400, p.theme)};
                          font-family: ${p => p.theme.fonts.mono};
                        `}
                      >
                        {prop.name}
                      </Cell>
                      <Cell
                        css={css`
                          color: ${p => getColor('red', 600, p.theme)};
                          font-family: ${p => p.theme.fonts.mono};
                        `}
                      >
                        {prop.type.name}
                      </Cell>
                      <Cell
                        css={css`
                          font-family: ${p => p.theme.fonts.mono};
                        `}
                      >
                        {prop.defaultValue ? prop.defaultValue.value : '-'}
                      </Cell>
                      <Cell>{prop.description}</Cell>
                    </Row>
                  );
                })}
              </Body>
            </Table>
          </div>
        ))}
    </>
  );
};
