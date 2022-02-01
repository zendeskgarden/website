/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Body, Cell, Head, HeaderCell, HeaderRow, Row, Table } from '@zendeskgarden/react-tables';
import { Paragraph } from '@zendeskgarden/react-typography';
import { getColor } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

const rowData = Array.from(Array(10)).map((row, index) => ({
  index,
  fruit: `Fruit #${index}`,
  sun: 'Full sun',
  soil: 'Well draining'
}));

const StyledHeaderCell = styled(HeaderCell)`
  box-shadow: inset 0 -1px 0 ${props => getColor('neutralHue', 300, props.theme)};
`;

const StyledHeaderRow = styled(HeaderRow)`
  border-bottom: none;
`;

const StyledHead = styled(Head)`
  position: sticky;
  top: 0;
  background: ${props => props.theme.colors.background};
`;

const Example = () => (
  <div style={{ overflowX: 'auto', maxHeight: '400px' }}>
    <Table style={{ minWidth: 500 }}>
      <StyledHead>
        <StyledHeaderRow>
          <StyledHeaderCell>Fruit</StyledHeaderCell>
          <StyledHeaderCell>Sun exposure</StyledHeaderCell>
          <StyledHeaderCell>Soil</StyledHeaderCell>
        </StyledHeaderRow>
      </StyledHead>
      <Body>
        {rowData.map(data => (
          <Row key={data.index} isStriped={data.index % 2 === 0}>
            <Cell>{data.fruit}</Cell>
            <Cell>{data.sun}</Cell>
            <Cell>{data.soil}</Cell>
          </Row>
        ))}
      </Body>
    </Table>
    <br />
    <Paragraph>
      Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water
      spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion
      desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize
      bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels
      sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress.
      Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke. Nori
      grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts
      black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water
      chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko
      chicory celtuce parsley jícama.
    </Paragraph>
  </div>
);

export default Example;
