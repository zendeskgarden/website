/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Dropdown, Menu, Item, Trigger } from '@zendeskgarden/react-dropdowns';
import { Button } from '@zendeskgarden/react-buttons';
import { Row, Col } from '@zendeskgarden/react-grid';
import { ReactComponent as ChevronIcon } from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';

const Example = () => {
  const [defaultRotated, setDefaultRotated] = useState<boolean | undefined>();
  const [compactRotated, setCompactRotated] = useState<boolean | undefined>();

  return (
    <Row alignItems="center">
      <Col textAlign="center">
        <Dropdown
          onSelect={item => alert(`You planted a ${item}`)}
          onStateChange={options =>
            Object.prototype.hasOwnProperty.call(options, 'isOpen') &&
            setDefaultRotated(options.isOpen)
          }
        >
          <Trigger>
            <Button>
              Default
              <Button.EndIcon isRotated={defaultRotated}>
                <ChevronIcon />
              </Button.EndIcon>
            </Button>
          </Trigger>
          <Menu>
            <Item value="cactus">Cactus</Item>
            <Item value="flower">Flower</Item>
            <Item value="succulent">Succulent</Item>
          </Menu>
        </Dropdown>
      </Col>
      <Col textAlign="center">
        <Dropdown
          onSelect={item => alert(`You planted a ${item}`)}
          onStateChange={options =>
            Object.prototype.hasOwnProperty.call(options, 'isOpen') &&
            setCompactRotated(options.isOpen)
          }
        >
          <Trigger>
            <Button size="small">
              Compact
              <Button.EndIcon isRotated={compactRotated}>
                <ChevronIcon />
              </Button.EndIcon>
            </Button>
          </Trigger>
          <Menu isCompact>
            <Item value="cactus">Cactus</Item>
            <Item value="flower">Flower</Item>
            <Item value="succulent">Succulent</Item>
          </Menu>
        </Dropdown>
      </Col>
    </Row>
  );
};

export default Example;
