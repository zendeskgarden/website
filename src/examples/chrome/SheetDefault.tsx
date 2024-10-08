/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Sheet } from '@zendeskgarden/react-chrome';
import { Grid } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';
import { Field, Toggle } from '@zendeskgarden/react-forms';
import { getColor, mediaQuery } from '@zendeskgarden/react-theming';

const StyledField = styled(Field)`
  margin: ${props => props.theme.space.md};
`;

const StyledRow = styled(Grid.Row)`
  border: ${props => props.theme.borderWidths.sm} dashed;
  border-color: ${({ theme }) => getColor({ theme, variable: 'border.default' })};
`;

const StyledSheet = styled(Sheet)`
  ${props => mediaQuery('down', 'sm', props.theme)} {
    width: 100%;

    /* sheet inner wrapper */
    & > div {
      min-width: 100%;
    }
  }
`;

const Example = () => {
  const sheetId = 'sheet-example';
  const [isSheetOpen, setIsSheetOpen] = useState(true);

  return (
    <Grid gutters={false}>
      <Grid.Row>
        <Grid.Col>
          <StyledField>
            <Toggle
              checked={isSheetOpen}
              onChange={() => {
                setIsSheetOpen(!isSheetOpen);
              }}
              aria-controls={sheetId}
            >
              <Field.Label>Show Sheet</Field.Label>
            </Toggle>
          </StyledField>
        </Grid.Col>
      </Grid.Row>
      <StyledRow justifyContent="end">
        <StyledSheet
          id={sheetId}
          isOpen={isSheetOpen}
          focusOnMount
          restoreFocus
          aria-expanded={isSheetOpen}
        >
          <Sheet.Header>
            <Sheet.Title>Garden</Sheet.Title>
            <Sheet.Description>Vegetables in the Garden</Sheet.Description>
          </Sheet.Header>

          <Sheet.Body>
            Shaved almonds soy milk black bean chili dip second course salad edamame apple
            vinaigrette cremini mushrooms tofu mint with fiery fruit coconut sugar roasted peanuts
            Thai dark and stormy banana crunchy seaweed sparkling pomegranate punch summer
            blackberries strawberry spinach salad crispy Thai curry mediterranean vegetables
            crumbled lentils. Apricot shiitake mushrooms seasonal rich coconut cream ginger carrot
            spiced juice guacamole hot sandwiches burritos jalapeño four-layer green tea overflowing
            berries pomegranate avocado basil pesto Thai super chili. Blueberries casserole cumin
            picnic salad cherries heat miso turmeric glazed aubergine vine tomatoes cool fig arugula
            cashew salad chia seeds homemade balsamic sesame soba noodles. Corn amaranth salsify
            bunya nuts nori azuki bean chickweed potato bell pepper artichoke. Nori grape silver
            beet broccoli kombu beet greens fava bean potato
          </Sheet.Body>

          <Sheet.Footer>
            <Sheet.FooterItem>
              <Button>Action</Button>
            </Sheet.FooterItem>
            <Sheet.FooterItem>
              <Button
                isPrimary
                onClick={() => {
                  setIsSheetOpen(false);
                }}
              >
                Close
              </Button>
            </Sheet.FooterItem>
          </Sheet.Footer>

          <Sheet.Close
            onClick={() => {
              setIsSheetOpen(false);
            }}
          />
        </StyledSheet>
      </StyledRow>
    </Grid>
  );
};

export default Example;
