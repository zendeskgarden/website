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
import { Fieldset, Field, Radio, Label } from '@zendeskgarden/react-forms';

const [col4, col6, px380, px480] = ['4', '6', '380px', '480px'];

const Example = () => {
  const [size, setSheetSize] = useState(px380);

  return (
    <Grid gutters={false} style={{ outline: '1px dotted gray' }}>
      <Row justifyContent="between">
        <Col size="auto">
          <Fieldset style={{ margin: '25px' }}>
            <Fieldset.Legend>Sheet size</Fieldset.Legend>
            {[col4, col6, px380, px480].map((sampleSize: string) => (
              <Field key={`sizes-${sampleSize}`}>
                <Radio
                  name="default example"
                  value={sampleSize}
                  checked={size === sampleSize}
                  onChange={() => setSheetSize(sampleSize)}
                >
                  <Label>
                    {sampleSize} {sampleSize.endsWith('px') ? '' : 'columns'}
                  </Label>
                </Radio>
              </Field>
            ))}
          </Fieldset>
        </Col>

        <Col size={size.endsWith('px') ? 9 : Number.parseInt(size, 10)}>
          <div
            style={{ width: '100%', height: '500px', display: 'flex', justifyContent: 'flex-end' }}
          >
            <Sheet isOpen size={size.endsWith('px') ? size : '100%'}>
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
                <Sheet.FooterItem style={{ marginLeft: 0 }}>
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
