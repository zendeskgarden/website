/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Button } from '@zendeskgarden/react-buttons';
import { Modal } from '@zendeskgarden/react-modals';
import { Grid } from '@zendeskgarden/react-grid';

const Example = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Grid.Row>
      <Grid.Col textAlign="center">
        <Button
          onClick={() => {
            setVisible(true);
          }}
          isDanger
        >
          Open danger modal
        </Button>
        {!!visible && (
          <Modal
            onClose={() => {
              setVisible(false);
            }}
          >
            <Modal.Header tag="h2" isDanger>
              Remove plant food from your garden
            </Modal.Header>
            <Modal.Body>
              Plant food helps gardens grow. Removing plant food negatively affects the plant
              health.
            </Modal.Body>
            <Modal.Footer>
              <Modal.FooterItem>
                <Button
                  onClick={() => {
                    setVisible(false);
                  }}
                  isBasic
                >
                  Cancel
                </Button>
              </Modal.FooterItem>
              <Modal.FooterItem>
                <Button
                  isPrimary
                  isDanger
                  onClick={() => {
                    setVisible(false);
                  }}
                >
                  Remove plant food
                </Button>
              </Modal.FooterItem>
            </Modal.Footer>
            <Modal.Close aria-label="Close modal" />
          </Modal>
        )}
      </Grid.Col>
    </Grid.Row>
  );
};

export default Example;
