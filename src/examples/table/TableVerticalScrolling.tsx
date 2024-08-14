/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Table } from '@zendeskgarden/react-tables';
import { Paragraph } from '@zendeskgarden/react-typography';
import { getColor } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

const rowData = Array.from(Array(10)).map((row, index) => ({
  index,
  fruit: `Fruit #${index}`,
  sun: 'Full sun',
  soil: 'Well draining'
}));

const StyledContainer = styled.div`
  max-height: 400px;
  overflow-x: auto;
  color-scheme: only ${p => p.theme.colors.base};
`;

const StyledHeaderRow = styled(Table.HeaderRow)`
  border-bottom: none;
`;

const StyledHead = styled(Table.Head)`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => getColor({ variable: 'background.default', theme })};
`;

const StyledParagraph = styled(Paragraph)`
  margin-top: ${props => props.theme.space.lg};
`;

const Example = () => (
  <StyledContainer>
    <Table style={{ minWidth: 500 }}>
      <StyledHead>
        <StyledHeaderRow>
          <Table.HeaderCell>Fruit</Table.HeaderCell>
          <Table.HeaderCell>Sun exposure</Table.HeaderCell>
          <Table.HeaderCell>Soil</Table.HeaderCell>
        </StyledHeaderRow>
      </StyledHead>
      <Table.Body>
        {rowData.map(data => (
          <Table.Row key={data.index} isStriped={data.index % 2 === 0}>
            <Table.Cell>{data.fruit}</Table.Cell>
            <Table.Cell>{data.sun}</Table.Cell>
            <Table.Cell>{data.soil}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
    <StyledParagraph>
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
    </StyledParagraph>
  </StyledContainer>
);

export default Example;
