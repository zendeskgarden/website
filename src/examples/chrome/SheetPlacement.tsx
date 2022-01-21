/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Sheet } from '@zendeskgarden/react-chrome';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';
import { Field, Toggle, Label } from '@zendeskgarden/react-forms';

const Example = () => {
  const [placement, setSheetPlacement] = useState<'start' | 'end' | undefined>('start');
  const toggleSheetPlacement = () => {
    if (placement === 'end') setSheetPlacement('start');
    if (placement === 'start') setSheetPlacement('end');
  };

  return (
    <Grid gutters={false}>
      <Row style={{ marginBottom: '20px' }}>
        <Col>
          <Field>
            <Toggle checked={placement === 'start'} onChange={toggleSheetPlacement}>
              <Label>Place at start of container</Label>
            </Toggle>
          </Field>
        </Col>
      </Row>

      <Row style={{ outline: '1px dotted gray' }}>
        <Col size={12}>
          <div
            style={{
              width: '100%',
              height: '415px',
              display: 'flex',
              justifyContent: placement === 'end' ? 'flex-end' : 'flex-start'
            }}
          >
            <Sheet isOpen placement={placement}>
              <Sheet.Header>
                <Sheet.Title>Garden</Sheet.Title>
                <Sheet.Description>Vegetables in the Garden</Sheet.Description>
              </Sheet.Header>

              <Sheet.Body>
                Shaved almonds soy milk black bean chili dip second course salad edamame apple
                vinaigrette cremini mushrooms tofu mint with fiery fruit coconut sugar roasted
                peanuts Thai dark and stormy banana crunchy seaweed sparkling pomegranate punch
                summer blackberries strawberry spinach salad crispy Thai curry mediterranean
                vegetables crumbled lentils. Apricot shiitake mushrooms seasonal rich coconut cream
                ginger carrot spiced juice guacamole hot sandwiches burritos jalapeño four-layer
                green tea overflowing berries pomegranate avocado basil pesto Thai super chili.
                Blueberries casserole cumin picnic salad cherries heat miso turmeric glazed
                aubergine vine tomatoes cool fig arugula cashew salad chia seeds homemade balsamic
                sesame soba noodles. Corn amaranth salsify bunya nuts nori azuki bean chickweed
                potato bell pepper artichoke. Nori grape silver beet broccoli kombu beet greens fava
                bean potato
              </Sheet.Body>

              <Sheet.Footer>
                <Sheet.FooterItem>
                  <Button>Basic</Button>
                </Sheet.FooterItem>
                <Sheet.FooterItem>
                  <Button isPrimary>Primary</Button>
                </Sheet.FooterItem>
              </Sheet.Footer>
            </Sheet>
          </div>
        </Col>
      </Row>
    </Grid>
  );
};

export default Example;
