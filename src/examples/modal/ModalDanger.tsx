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
        <Button onClick={() => setVisible(true)} isDanger>
          Open danger modal
        </Button>
        {!!visible && (
          <Modal onClose={() => setVisible(false)}>
            <Header tag="h2" isDanger>
              Remove plant food from your garden
            </Header>
            <Body>
              Plant food helps gardens grow. Removing plant food negatively affects the plant
              health.
            </Body>
            <Footer>
              <FooterItem>
                <Button onClick={() => setVisible(false)} isBasic>
                  Cancel
                </Button>
              </FooterItem>
              <FooterItem>
                <Button isPrimary isDanger onClick={() => setVisible(false)}>
                  Remove plant food
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
