/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import {
  Dropdown,
  Menu,
  Item,
  ItemMeta,
  Trigger,
  Separator,
  HeaderItem,
  HeaderIcon,
  MediaItem,
  MediaFigure,
  MediaBody
} from '@zendeskgarden/react-dropdowns.legacy';
import { Button } from '@zendeskgarden/react-buttons';
import { Grid } from '@zendeskgarden/react-grid';
import { ReactComponent as ChevronIcon } from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';
import { ReactComponent as LeafIcon } from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';

const Example = () => {
  const [rotated, setRotated] = useState<boolean | undefined>();

  return (
    <Grid.Row>
      <Grid.Col textAlign="center">
        <Dropdown
          onSelect={item => alert(`You planted a ${item}`)}
          onStateChange={options => Object.hasOwn(options, 'isOpen') && setRotated(options.isOpen)}
        >
          <Trigger>
            <Button isDanger>
              Uproot
              <Button.EndIcon isRotated={rotated}>
                <ChevronIcon />
              </Button.EndIcon>
            </Button>
          </Trigger>
          <Menu>
            <HeaderItem hasIcon>
              <HeaderIcon>
                <LeafIcon />
              </HeaderIcon>
              Plants
            </HeaderItem>
            <Separator />
            <Item isDanger value="acacia">
              Acacia
            </Item>
            <MediaItem isDanger value="daisy">
              Daisy
              <ItemMeta>15 planted</ItemMeta>
            </MediaItem>
            <Item isDanger value="Honeysuckle">
              Honeysuckle
            </Item>
            <Item isDanger value="candytuft">
              <MediaFigure>
                <LeafIcon />
              </MediaFigure>
              <MediaBody>Candytuft</MediaBody>
            </Item>
          </Menu>
        </Dropdown>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Example;
