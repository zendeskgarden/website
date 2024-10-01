/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Button } from '@zendeskgarden/react-buttons';
import { Grid } from '@zendeskgarden/react-grid';
import { Paragraph } from '@zendeskgarden/react-typography';
import { Drawer } from '@zendeskgarden/react-modals';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };

  return (
    <Grid.Row>
      <Grid.Col textAlign="center">
        <Button onClick={open}>Open Drawer</Button>
        <Drawer isOpen={isOpen} onClose={close}>
          <Drawer.Header tag="h2">Tending a garden</Drawer.Header>
          <Drawer.Body>
            <Paragraph>
              Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi
              amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale.
              Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water
              spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion
              chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard
              wakame kohlrabi beetroot carrot watercress.
            </Paragraph>
            <Paragraph>
              Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper
              artichoke. Nori grape silver beet broccoli kombu beet greens fava bean potato quandong
              celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
              Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut
              pea sierra leone bologi leek soko chicory celtuce parsley jícama.
            </Paragraph>
            <Paragraph>
              Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic
              gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu
              beetroot horseradish carrot squash brussels sprout chard. Pea horseradish azuki bean
              lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard
              tigernut jícama green bean celtuce collard greens avocado quandong fennel gumbo
              black-eyed pea.
            </Paragraph>
            <Paragraph>
              Soko radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus root sea
              lettuce brussels sprout cabbage. Catsear cauliflower garbanzo yarrow salsify chicory
              garlic bell pepper napa cabbage lettuce tomato kale arugula melon sierra leone bologi
              rutabaga tigernut. Sea lettuce gumbo grape kale kombu cauliflower salsify kohlrabi
              okra sea lettuce broccoli celery lotus root carrot winter purslane turnip greens
              garlic. Jícama garlic courgette coriander radicchio plantain scallion cauliflower fava
              bean desert raisin spring onion chicory bunya nuts. Sea lettuce water spinach gram
              fava bean leek dandelion silver beet eggplant bush.
            </Paragraph>
          </Drawer.Body>
          <Drawer.Footer>
            <Drawer.FooterItem>
              <Button isBasic onClick={close}>
                Cancel
              </Button>
            </Drawer.FooterItem>
            <Drawer.FooterItem>
              <Button isPrimary onClick={close}>
                Confirm
              </Button>
            </Drawer.FooterItem>
          </Drawer.Footer>
          <Drawer.Close />
        </Drawer>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Example;
