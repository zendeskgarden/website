/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Table } from '@zendeskgarden/react-tables';
import { Code } from '@zendeskgarden/react-typography';
import { getColor } from '@zendeskgarden/react-theming';
import { Markdown } from 'components/MarkdownProvider/components/Markdown';

const StyledContainer = styled.div`
  overflow-x: auto;
  color-scheme: only ${p => p.theme.colors.base};
`;

const StyledColor = styled.span`
  display: inline-block;
  border-radius: 50%;
  background-color: ${p => p.color};
  width: ${p => p.theme.space.base * 5}px;
  height: ${p => p.theme.space.base * 5}px;
`;

const Example = () => {
  const theme = useTheme();

  return (
    <StyledContainer>
      <Table isReadOnly style={{ minWidth: 500 }}>
        <Table.Head>
          <Table.HeaderRow>
            <Table.HeaderCell isMinimum hidden>
              Swatch
            </Table.HeaderCell>
            <Table.HeaderCell width={80}>Color</Table.HeaderCell>
            <Table.HeaderCell>Usage</Table.HeaderCell>
          </Table.HeaderRow>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <StyledColor aria-label="primaryHue" color={getColor({ theme, hue: 'primaryHue' })} />
            </Table.Cell>
            <Table.Cell>
              <Code>blue</Code>
            </Table.Cell>
            <Table.Cell>
              Primary (accent) color, used for interactive elements, active elements, focus
              outlines, and more
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <StyledColor aria-label="neutralHue" color={getColor({ theme, hue: 'neutralHue' })} />
            </Table.Cell>
            <Table.Cell>
              <Code>grey</Code>
            </Table.Cell>
            <Table.Cell>Neutral color, used for layout and resting elements</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <StyledColor aria-label="successHue" color={getColor({ theme, hue: 'successHue' })} />
            </Table.Cell>
            <Table.Cell>
              <Code>green</Code>
            </Table.Cell>
            <Table.Cell>
              Success color, used for validation and notifications about a successful operation
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <StyledColor aria-label="warningHue" color={getColor({ theme, hue: 'warningHue' })} />
            </Table.Cell>
            <Table.Cell>
              <Code>yellow</Code>
            </Table.Cell>
            <Table.Cell>
              Warning color, used for validation and notifications about an incomplete operation
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <StyledColor aria-label="dangerHue" color={getColor({ theme, hue: 'dangerHue' })} />
            </Table.Cell>
            <Table.Cell>
              <Code>red</Code>
            </Table.Cell>
            <Table.Cell>
              Danger color, used for validation and notifications about a destructive or blocking
              operation
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <StyledColor aria-label="chromeHue" color={getColor({ theme, hue: 'chromeHue' })} />
            </Table.Cell>
            <Table.Cell>
              <Code>kale</Code>
            </Table.Cell>
            <Table.Cell>
              <Markdown>Zendesk brand color, used in [Chrome](/components/chrome)</Markdown>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </StyledContainer>
  );
};

export default Example;
