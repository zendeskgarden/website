/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Table } from '@zendeskgarden/react-tables';
import { SM, Span } from '@zendeskgarden/react-typography';
import { PALETTE } from '@zendeskgarden/react-theming';

const contrastRatios = [
  { value: '100', ratio: '1.02:1' },
  { value: '200', ratio: '1.2:1' },
  { value: '300', ratio: '1.35:1' },
  { value: '400', ratio: '1.99:1' },
  { value: '500', ratio: '2.79:1' },
  { value: '600', ratio: '3.25:1' },
  { value: '700', ratio: '4.99:1' },
  { value: '800', ratio: '9.99:1' },
  { value: '900', ratio: '12.5:1' },
  { value: '1000', ratio: '16.01:1' },
  { value: '1100', ratio: '17.52:1' },
  { value: '1200', ratio: '19.5:1' }
];

const StyledContainer = styled.div`
  overflow-x: auto;
  color-scheme: only ${p => p.theme.colors.base};
`;

const StyledTable = styled(Table)`
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0 ${p => p.theme.space.sm};
`;

const StyledHeaderCell = styled(Table.HeaderCell)`
  padding-right: 0;
  padding-left: 0;
  min-width: 50px;
`;

const VisuallyHidden = styled.span`
  position: fixed;
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0;
  width: 1px;
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
`;

type Hues = Exclude<keyof typeof PALETTE, 'black' | 'white' | 'product'>;

export const ColorShades: React.FC<{ hues: Hues[] }> = ({ hues }) => {
  return (
    <StyledContainer>
      <StyledTable isReadOnly>
        <Table.Head>
          <Table.HeaderRow>
            <StyledHeaderCell style={{ minWidth: 60 }}>Color</StyledHeaderCell>
            {contrastRatios.map(contrast => (
              <StyledHeaderCell key={contrast.value}>
                {contrast.value}
                <SM>
                  <Span hue="foreground.subtle">{contrast.ratio}</Span>
                </SM>
              </StyledHeaderCell>
            ))}
          </Table.HeaderRow>
        </Table.Head>
        <Table.Body>
          {hues.map((hue: Hues) => {
            const colors = PALETTE[hue];

            return (
              <Table.Row key={hue}>
                <Table.Cell>{hue.charAt(0).toUpperCase() + hue.slice(1)}</Table.Cell>
                {Object.keys(colors).map(shade => {
                  const color = (colors as any)[shade];

                  return (
                    <Table.Cell key={shade} style={{ background: color }}>
                      <VisuallyHidden>{color}</VisuallyHidden>
                    </Table.Cell>
                  );
                })}
              </Table.Row>
            );
          })}
        </Table.Body>
      </StyledTable>
    </StyledContainer>
  );
};
