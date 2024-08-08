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
import { Fieldset, Field, Radio, Label } from '@zendeskgarden/react-forms';
import { getColorV8 } from '@zendeskgarden/react-theming';

const StyledFieldset = styled(Fieldset)`
  margin: ${props => props.theme.space.md};
`;

const StyledRow = styled(Row)`
  border: ${props => props.theme.borderWidths.sm} dashed;
  border-color: ${props => getColorV8('neutralHue', 400, props.theme)};
  overflow: auto;
`;

const StyledSheetFooterItem = styled(Sheet.FooterItem)`
  &:first-child {
    margin-left: 0;
  }
`;

const [col4, col6, px380, px480] = [
  { label: '4 columns', sheet: '100%', cols: 4 },
  { label: '6 columns', sheet: '100%', cols: 6 },
  { label: '380 pixels', sheet: '380px', cols: 'auto' },
  { label: '480 pixels', sheet: '480px', cols: 'auto' }
];

const Example = () => {
  const [size, setSize] = useState<{ label: string; sheet: string; cols: string | number }>(px380);

  return (
    <Grid gutters={false}>
      <Row>
        <Col>
          <StyledFieldset>
            <StyledFieldset.Legend>Sheet size</StyledFieldset.Legend>
            {[col4, col6, px380, px480].map(sampleSize => (
              <Field key={`sizes-${sampleSize.label.replace(' ', '-')}`}>
                <Radio
                  checked={size === sampleSize}
                  onChange={() => {
                    setSize(sampleSize);
                  }}
                >
                  <Label>{sampleSize.label}</Label>
                </Radio>
              </Field>
            ))}
          </StyledFieldset>
        </Col>
      </Row>

      <StyledRow justifyContent="end">
        <Col size={size.cols}>
          <Sheet isOpen isAnimated={false} size={size.sheet}>
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
              spiced juice guacamole hot sandwiches burritos jalapeño four-layer green tea
              overflowing berries pomegranate avocado basil pesto Thai super chili. Blueberries
              casserole cumin picnic salad cherries heat miso turmeric glazed aubergine vine
              tomatoes cool fig arugula cashew salad chia seeds homemade balsamic sesame soba
              noodles. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper
              artichoke. Nori grape silver beet broccoli kombu beet greens fava bean potato
            </Sheet.Body>

            <Sheet.Footer>
              <StyledSheetFooterItem>
                <Button>Basic</Button>
              </StyledSheetFooterItem>
              <StyledSheetFooterItem>
                <Button isPrimary>Primary</Button>
              </StyledSheetFooterItem>
            </Sheet.Footer>
          </Sheet>
        </Col>
      </StyledRow>
    </Grid>
  );
};

export default Example;
