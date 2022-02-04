/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Sheet } from '@zendeskgarden/react-chrome';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';
import { Field, Toggle, Label } from '@zendeskgarden/react-forms';
import { getColor, mediaQuery } from '@zendeskgarden/react-theming';

const StyledField = styled(Field)`
  margin: ${props => props.theme.space.md};
`;

const StyledRow = styled(Row)`
  border: ${props => props.theme.borderWidths.sm} dashed;
  border-color: ${props => getColor('neutralHue', 400, props.theme)};

  ${props => mediaQuery('down', 'sm', props.theme)} {
    & > aside {
      box-sizing: content-box;
      width: 100%;
    }

    /* stylelint-disable */
    & > aside > div {
      min-width: 100%;
    }
    /* stylelint-enable */
  }
`;

const Example = () => {
  const [sheetId] = useState('sheet-example');
  const [isSheetOpen, setSheetOpen] = useState(true);

  return (
    <Grid gutters={false}>
      <Row>
        <Col>
          <StyledField>
            <Toggle
              checked={isSheetOpen}
              onChange={() => setSheetOpen(!isSheetOpen)}
              aria-expanded={isSheetOpen}
              aria-controls={sheetId}
            >
              <Label>Show Sheet</Label>
            </Toggle>
          </StyledField>
        </Col>
      </Row>

      <StyledRow justifyContent="end">
        <Sheet id={sheetId} isOpen={isSheetOpen} focusOnMount restoreFocus>
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
              <Button isPrimary onClick={() => setSheetOpen(false)}>
                Close
              </Button>
            </Sheet.FooterItem>
          </Sheet.Footer>

          <Sheet.Close onClick={() => setSheetOpen(false)} />
        </Sheet>
      </StyledRow>
    </Grid>
  );
};

export default Example;
