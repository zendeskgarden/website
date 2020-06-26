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
  const [defaultRotated, setDefaultRotated] = useState<boolean | undefined>();
  const [primaryRotated, setPrimaryRotated] = useState<boolean | undefined>();

  return (
    <Row>
      <Col textAlign="center">
        <SplitButton>
          <Button>Harvest</Button>
          <Dropdown
            onStateChange={options =>
              Object.prototype.hasOwnProperty.call(options, 'isOpen') &&
              setDefaultRotated(options.isOpen)
            }
          >
            <Trigger>
              <ChevronButton aria-label="other actions" isRotated={defaultRotated} />
            </Trigger>
            <Menu placement="bottom-end">
              <Item value="prune">Prune</Item>
              <Item value="water">Water</Item>
              <Item value="fertilize">Fertilize</Item>
            </Menu>
          </Dropdown>
        </SplitButton>
      </Col>
      <Col textAlign="center">
        <SplitButton>
          <Button isPrimary>Harvest</Button>
          <Dropdown
            onStateChange={options =>
              Object.prototype.hasOwnProperty.call(options, 'isOpen') &&
              setPrimaryRotated(options.isOpen)
            }
          >
            <Trigger>
              <ChevronButton aria-label="other actions" isPrimary isRotated={primaryRotated} />
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
