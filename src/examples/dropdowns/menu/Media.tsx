/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Button } from '@zendeskgarden/react-buttons';
import {
  Dropdown,
  Menu,
  Item,
  Trigger,
  HeaderIcon,
  HeaderItem,
  Separator,
  AddItem,
  ItemMeta,
  MediaItem,
  MediaBody,
  MediaFigure
} from '@zendeskgarden/react-dropdowns';
import { Row, Col } from '@zendeskgarden/react-grid';
import { ReactComponent as LeafIcon } from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';

const Example = () => (
  <Row>
    <Col textAlign="center">
      <Dropdown
        onSelect={item => {
          const message =
            item === 'add-plant' ? 'A plant can be added soon' : `You planted a ${item}`;

          alert(message);
        }}
      >
        <Trigger>
          <Button>Menu</Button>
        </Trigger>
        <Menu>
          <HeaderItem hasIcon>
            <HeaderIcon>
              <LeafIcon />
            </HeaderIcon>
            Plants
          </HeaderItem>
          <Separator />
          <MediaItem value="cactus">
            <MediaFigure>
              <LeafIcon />
            </MediaFigure>
            <MediaBody>
              Cactus
              <ItemMeta>15 available</ItemMeta>
            </MediaBody>
          </MediaItem>
          <Item value="flower">
            <MediaFigure>
              <LeafIcon />
            </MediaFigure>
            <MediaBody>Flower</MediaBody>
          </Item>
          <Item value="succulent">Succulent</Item>
          <Separator />
          <AddItem value="add-plant">Add plant</AddItem>
        </Menu>
      </Dropdown>
    </Col>
  </Row>
);

export default Example;
