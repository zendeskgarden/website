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
  const [sheetId] = useState('sheet-example');
  const [isSheetOpen, setSheetOpen] = useState(true);

  return (
    <Grid gutters={false} style={{ outline: '1px dotted gray' }}>
      <Row style={{ height: '100%' }} justifyContent="between">
        <Col size={4}>
          <Field style={{ marginLeft: '20px', marginTop: '20px' }}>
            <Toggle
              checked={isSheetOpen}
              onChange={() => setSheetOpen(!isSheetOpen)}
              aria-expanded={isSheetOpen}
              aria-controls={sheetId}
            >
              <Label>Show Sheet</Label>
            </Toggle>
          </Field>
        </Col>

        <Col size={8}>
          <div style={{ width: '100%', height: '500px', display: 'flex' }}>
            {/* the div below represents main content sharing space with the Sheet in a container */}
            <div style={{ flexGrow: 1 }} />

            <Sheet id={sheetId} isOpen={isSheetOpen}>
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
          </div>
        </Col>
      </Row>
    </Grid>
  );
};

export default Example;
