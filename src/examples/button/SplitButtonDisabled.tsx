/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Row, Col } from '@zendeskgarden/react-grid';
import { SplitButton, Button, ChevronButton } from '@zendeskgarden/react-buttons';
import { Dropdown, Trigger, Menu, Item } from '@zendeskgarden/react-dropdowns';

const Example = () => {
  const [rotated, setRotated] = useState<boolean>();

  return (
    <Row>
      <Col textAlign="center">
        <SplitButton>
          <Button disabled aria-disabled="true">
            Harvest
          </Button>
          <Dropdown
            onStateChange={options =>
              Object.prototype.hasOwnProperty.call(options, 'isOpen') && setRotated(options.isOpen)
            }
          >
            <Trigger>
              <ChevronButton
                aria-label="other actions"
                isRotated={rotated}
                disabled
                aria-disabled="true"
              />
            </Trigger>
            <Menu placement="bottom-end">
              <Item value="prune">Prune</Item>
              <Item value="water">Water</Item>
              <Item value="fertilize">Fertilize</Item>
            </Menu>
          </Dropdown>
        </SplitButton>
      </Col>
    </Row>
  );
};

export default Example;
