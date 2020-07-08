/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Dropdown, Menu, Item, Trigger, GARDEN_PLACEMENT } from '@zendeskgarden/react-dropdowns';
import { Button } from '@zendeskgarden/react-buttons';
import { Row, Col } from '@zendeskgarden/react-grid';
import { ReactComponent as ChevronIcon } from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';

const PLACEMENTS: Record<string, GARDEN_PLACEMENT> = {
  auto: 'auto',
  top: 'top',
  topStart: 'top-start',
  topEnd: 'top-end',
  end: 'end',
  endTop: 'end-top',
  endBottom: 'end-bottom',
  bottom: 'bottom',
  bottomStart: 'bottom-start',
  bottomEnd: 'bottom-end',
  start: 'start',
  startTop: 'start-top',
  startBottom: 'start-bottom'
};

const Example = () => {
  const [rotated, setRotated] = useState<boolean | undefined>();

  return (
    <Row style={{ margin: 140 }}>
      <Col textAlign="center">
        <Dropdown
          onSelect={item => alert(`You planted a ${item}`)}
          onStateChange={options =>
            Object.prototype.hasOwnProperty.call(options, 'isOpen') && setRotated(options.isOpen)
          }
        >
          <Trigger>
            <Button>
              Flowers
              <Button.EndIcon isRotated={rotated}>
                <ChevronIcon />
              </Button.EndIcon>
            </Button>
          </Trigger>
          <Menu placement={PLACEMENTS.topStart}>
            <Item value="acacia">Acacia</Item>
            <Item value="daisy">Daisy</Item>
            <Item value="honeysuckle">Honeysuckle</Item>
          </Menu>
        </Dropdown>
      </Col>
    </Row>
  );
};

export default Example;
