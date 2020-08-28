/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Accordion } from '@zendeskgarden/react-accordions';
import { Row, Col } from '@zendeskgarden/react-grid';

const Example = () => {
  const [expandedSections, setExpandedSections] = useState<number[]>([]);

  return (
    <Row justifyContent="center">
      <Col sm={10}>
        <Accordion
          isCompact
          level={4}
          expandedSections={expandedSections}
          onChange={index => {
            if (expandedSections.includes(index)) {
              setExpandedSections(expandedSections.filter(n => n !== index));
            } else {
              setExpandedSections([...expandedSections, index]);
            }
          }}
        >
          <Accordion.Section>
            <Accordion.Header>
              <Accordion.Label>How do you start gardening?</Accordion.Label>
            </Accordion.Header>
            <Accordion.Panel>
              Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi
              amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale.
            </Accordion.Panel>
          </Accordion.Section>
          <Accordion.Section>
            <Accordion.Header>
              <Accordion.Label>What are the basics of gardening?</Accordion.Label>
            </Accordion.Header>
            <Accordion.Panel>
              Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper
              artichoke. Nori grape silver beet broccoli kombu beet greens fava bean potato quandong
              celery.
            </Accordion.Panel>
          </Accordion.Section>
          <Accordion.Section>
            <Accordion.Header>
              <Accordion.Label>What are the best tools?</Accordion.Label>
            </Accordion.Header>
            <Accordion.Panel>
              Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic
              gram celery bitterleaf wattle seed collard greens nori.
            </Accordion.Panel>
          </Accordion.Section>
        </Accordion>
      </Col>
    </Row>
  );
};

export default Example;
