/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Button } from '@zendeskgarden/react-buttons';
import { Modal, Header, Body, Footer, FooterItem, Close } from '@zendeskgarden/react-modals';
import { Row, Col } from '@zendeskgarden/react-grid';

const Example = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Row>
      <Col textAlign="center">
        <Button onClick={() => setVisible(true)}>Open modal</Button>
        {visible && (
          <Modal isLarge onClose={() => setVisible(false)}>
            <Header>Do you need plant food?</Header>
            <Body>
              To boost your plant&apos;s chances of success, use a combination of top-quality soil
              and the right plant food. Try growing in containers filled with plant food, which can
              help protect plants from over-watering.
            </Body>
            <Footer>
              <FooterItem>
                <Button onClick={() => setVisible(false)} isBasic>
                  Cancel
                </Button>
              </FooterItem>
              <FooterItem>
                <Button isPrimary onClick={() => setVisible(false)}>
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
