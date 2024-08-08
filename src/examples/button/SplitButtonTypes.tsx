/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Grid } from '@zendeskgarden/react-grid';
import { SplitButton, Button, ChevronButton } from '@zendeskgarden/react-buttons';
import { Menu, Item } from '@zendeskgarden/react-dropdowns';

const Example = () => {
  const [defaultRotated, setDefaultRotated] = useState<boolean>();
  const [primaryRotated, setPrimaryRotated] = useState<boolean>();

  return (
    <Grid.Row>
      <Grid.Col textAlign="center">
        <SplitButton>
          <Button>Harvest</Button>
          <Menu
            button={props => (
              <ChevronButton {...props} aria-label="other actions" isRotated={defaultRotated} />
            )}
            onChange={changes =>
              changes.isExpanded !== undefined && setDefaultRotated(changes.isExpanded)
            }
            placement="bottom-end"
          >
            <Item value="prune">Prune</Item>
            <Item value="water">Water</Item>
            <Item value="fertilize">Fertilize</Item>
          </Menu>
        </SplitButton>
      </Grid.Col>
      <Grid.Col textAlign="center">
        <SplitButton>
          <Button isPrimary>Harvest</Button>
          <Menu
            button={props => (
              <ChevronButton
                {...props}
                aria-label="other actions"
                isPrimary
                isRotated={primaryRotated}
              />
            )}
            onChange={changes =>
              changes.isExpanded !== undefined && setPrimaryRotated(changes.isExpanded)
            }
            placement="bottom-end"
          >
            <Item value="prune">Prune</Item>
            <Item value="water">Water</Item>
            <Item value="fertilize">Fertilize</Item>
          </Menu>
        </SplitButton>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Example;
