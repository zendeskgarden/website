/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Table } from '@zendeskgarden/react-tables';
import { LG } from '@zendeskgarden/react-typography';

const StyledContainer = styled.div`
  margin-bottom: ${p => p.theme.space.xl};
  min-width: 500px;
`;

const Example = () => (
  <div style={{ overflowX: 'auto' }}>
    <StyledContainer>
      <Table size="small">
        <Table.Caption>
          <LG>Small</LG>
        </Table.Caption>
        <Table.Head>
          <Table.HeaderRow>
            <Table.HeaderCell>Fruit</Table.HeaderCell>
            <Table.HeaderCell>Sun exposure</Table.HeaderCell>
            <Table.HeaderCell>Soil type</Table.HeaderCell>
          </Table.HeaderRow>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Raspberries</Table.Cell>
            <Table.Cell>Partial shade</Table.Cell>
            <Table.Cell>Moist and slightly acidic</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Strawberries</Table.Cell>
            <Table.Cell>Full sun</Table.Cell>
            <Table.Cell>Medium moisture</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Grapes</Table.Cell>
            <Table.Cell>Full sun</Table.Cell>
            <Table.Cell>Rich and well draining</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Cherries</Table.Cell>
            <Table.Cell>Partial sun</Table.Cell>
            <Table.Cell>Rich and well draining</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Tomatoes</Table.Cell>
            <Table.Cell>Partial shade</Table.Cell>
            <Table.Cell>Well draining</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </StyledContainer>
    <StyledContainer>
      <Table size="medium">
        <Table.Caption>
          <LG>Medium</LG>
        </Table.Caption>
        <Table.Head>
          <Table.HeaderRow>
            <Table.HeaderCell>Fruit</Table.HeaderCell>
            <Table.HeaderCell>Sun exposure</Table.HeaderCell>
            <Table.HeaderCell>Soil type</Table.HeaderCell>
          </Table.HeaderRow>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Raspberries</Table.Cell>
            <Table.Cell>Partial shade</Table.Cell>
            <Table.Cell>Moist and slightly acidic</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Strawberries</Table.Cell>
            <Table.Cell>Full sun</Table.Cell>
            <Table.Cell>Medium moisture</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Grapes</Table.Cell>
            <Table.Cell>Full sun</Table.Cell>
            <Table.Cell>Rich and well draining</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Cherries</Table.Cell>
            <Table.Cell>Partial sun</Table.Cell>
            <Table.Cell>Rich and well draining</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Tomatoes</Table.Cell>
            <Table.Cell>Partial shade</Table.Cell>
            <Table.Cell>Well draining</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </StyledContainer>
    <StyledContainer>
      <Table size="large">
        <Table.Caption>
          <LG>Large</LG>
        </Table.Caption>
        <Table.Head>
          <Table.HeaderRow>
            <Table.HeaderCell>Fruit</Table.HeaderCell>
            <Table.HeaderCell>Sun exposure</Table.HeaderCell>
            <Table.HeaderCell>Soil type</Table.HeaderCell>
          </Table.HeaderRow>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Raspberries</Table.Cell>
            <Table.Cell>Partial shade</Table.Cell>
            <Table.Cell>Moist and slightly acidic</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Strawberries</Table.Cell>
            <Table.Cell>Full sun</Table.Cell>
            <Table.Cell>Medium moisture</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Grapes</Table.Cell>
            <Table.Cell>Full sun</Table.Cell>
            <Table.Cell>Rich and well draining</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Cherries</Table.Cell>
            <Table.Cell>Partial sun</Table.Cell>
            <Table.Cell>Rich and well draining</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Tomatoes</Table.Cell>
            <Table.Cell>Partial shade</Table.Cell>
            <Table.Cell>Well draining</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </StyledContainer>
  </div>
);

export default Example;
