/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Button } from '@zendeskgarden/react-buttons';
import { Modal, Header, Body, Footer, FooterItem, Close } from '@zendeskgarden/react-modals';
import { Paragraph } from '@zendeskgarden/react-typography';
import { Row, Col } from '@zendeskgarden/react-grid';

const Example = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Row>
      <Col textAlign="center">
        <Button
          onClick={() => {
            setVisible(true);
          }}
        >
          Open large modal
        </Button>
        {!!visible && (
          <Modal
            isLarge
            onClose={() => {
              setVisible(false);
            }}
          >
            <Header tag="h2">Do you need plant food?</Header>
            <Body>
              <Paragraph>
                Plant nutrition is the study of the chemical elements and compounds necessary for
                plant growth, plant metabolism and their external supply. In its absence the plant
                is unable to complete a normal life cycle, or that the element is part of some
                essential plant constituent or metabolite. This is in accordance with Justus von
                Liebig&apos;s law of the minimum. The total essential plant nutrients include
                seventeen different elements: carbon, oxygen and hydrogen which are absorbed from
                the air, whereas other nutrients including nitrogen are typically obtained from the
                soil.
              </Paragraph>
              <Paragraph>
                The macronutrients are consumed in larger quantities; hydrogen, oxygen, nitrogen and
                carbon contribute to over 95% of a plant&apos;s entire biomass on a dry matter
                weight basis. Micronutrients are present in plant tissue in quantities measured in
                parts per million, ranging from 0.1 to 200 ppm, or less than 0.02% dry weight.
              </Paragraph>
              <Paragraph>
                Most soil conditions across the world can provide plants adapted to that climate and
                soil with sufficient nutrition for a complete life cycle, without the addition of
                nutrients as fertilizer. However, if the soil is cropped it is necessary to
                artificially modify soil fertility through the addition of fertilizer to promote
                vigorous growth and increase or sustain yield. This is done because, even with
                adequate water and light, nutrient deficiency can limit growth and crop yield.
              </Paragraph>
            </Body>
            <Footer>
              <FooterItem>
                <Button
                  onClick={() => {
                    setVisible(false);
                  }}
                  isBasic
                >
                  Cancel
                </Button>
              </FooterItem>
              <FooterItem>
                <Button
                  isPrimary
                  onClick={() => {
                    setVisible(false);
                  }}
                >
                  Add plant food
                </Button>
              </FooterItem>
            </Footer>
            <Close aria-label="Close modal" />
          </Modal>
        )}
      </Col>
    </Row>
  );
};

export default Example;
