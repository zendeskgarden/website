/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import {
  Body,
  Caption,
  Cell,
  Head,
  HeaderCell,
  HeaderRow,
  Row,
  Table
} from '@zendeskgarden/react-tables';
import { LG } from '@zendeskgarden/react-typography';

const StyledContainer = styled.div`
  margin-bottom: ${p => p.theme.space.xl};
`;

const Example = () => (
  <div style={{ minWidth: 500 }}>
    <StyledContainer>
      <Table size="small">
        <Caption>
          <LG>Small</LG>
        </Caption>
        <Head>
          <HeaderRow>
            <HeaderCell>Fruit type</HeaderCell>
            <HeaderCell>Sun exposure</HeaderCell>
            <HeaderCell>Soil type</HeaderCell>
          </HeaderRow>
        </Head>
        <Body>
          <Row>
            <Cell>Raspberries</Cell>
            <Cell>Partial shade</Cell>
            <Cell>Moist and slightly acidic</Cell>
          </Row>
          <Row>
            <Cell>Strawberries</Cell>
            <Cell>Full sun</Cell>
            <Cell>Medium moisture</Cell>
          </Row>
          <Row>
            <Cell>Grapes</Cell>
            <Cell>Full sun</Cell>
            <Cell>Rich and well draining</Cell>
          </Row>
          <Row>
            <Cell>Cherries</Cell>
            <Cell>Partial sun</Cell>
            <Cell>Rich and well draining</Cell>
          </Row>
          <Row>
            <Cell>Tomatoes</Cell>
            <Cell>Partial shade</Cell>
            <Cell>Well draining</Cell>
          </Row>
        </Body>
      </Table>
    </StyledContainer>
    <StyledContainer>
      <Table size="medium">
        <Caption>
          <LG>Medium</LG>
        </Caption>
        <Head>
          <HeaderRow>
            <HeaderCell>Fruit type</HeaderCell>
            <HeaderCell>Sun exposure</HeaderCell>
            <HeaderCell>Soil type</HeaderCell>
          </HeaderRow>
        </Head>
        <Body>
          <Row>
            <Cell>Raspberries</Cell>
            <Cell>Partial shade</Cell>
            <Cell>Moist and slightly acidic</Cell>
          </Row>
          <Row>
            <Cell>Strawberries</Cell>
            <Cell>Full sun</Cell>
            <Cell>Medium moisture</Cell>
          </Row>
          <Row>
            <Cell>Grapes</Cell>
            <Cell>Full sun</Cell>
            <Cell>Rich and well draining</Cell>
          </Row>
          <Row>
            <Cell>Cherries</Cell>
            <Cell>Partial sun</Cell>
            <Cell>Rich and well draining</Cell>
          </Row>
          <Row>
            <Cell>Tomatoes</Cell>
            <Cell>Partial shade</Cell>
            <Cell>Well draining</Cell>
          </Row>
        </Body>
      </Table>
    </StyledContainer>
    <StyledContainer>
      <Table size="large">
        <Caption>
          <LG>Large</LG>
        </Caption>
        <Head>
          <HeaderRow>
            <HeaderCell>Fruit type</HeaderCell>
            <HeaderCell>Sun exposure</HeaderCell>
            <HeaderCell>Soil type</HeaderCell>
          </HeaderRow>
        </Head>
        <Body>
          <Row>
            <Cell>Raspberries</Cell>
            <Cell>Partial shade</Cell>
            <Cell>Moist and slightly acidic</Cell>
          </Row>
          <Row>
            <Cell>Strawberries</Cell>
            <Cell>Full sun</Cell>
            <Cell>Medium moisture</Cell>
          </Row>
          <Row>
            <Cell>Grapes</Cell>
            <Cell>Full sun</Cell>
            <Cell>Rich and well draining</Cell>
          </Row>
          <Row>
            <Cell>Cherries</Cell>
            <Cell>Partial sun</Cell>
            <Cell>Rich and well draining</Cell>
          </Row>
          <Row>
            <Cell>Tomatoes</Cell>
            <Cell>Partial shade</Cell>
            <Cell>Well draining</Cell>
          </Row>
        </Body>
      </Table>
    </StyledContainer>
  </div>
);

export default Example;
