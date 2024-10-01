/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid } from '@zendeskgarden/react-grid';
import { SplitButton, Button, ChevronButton } from '@zendeskgarden/react-buttons';
import { Menu, Item } from '@zendeskgarden/react-dropdowns';

const StyledItem = styled(Item)`
  overflow-wrap: break-word;
`;

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
            onChange={changes => {
              changes.isExpanded !== undefined && setDefaultRotated(changes.isExpanded);
            }}
            placement="bottom-end"
          >
            <StyledItem value="prune">Prune</StyledItem>
            <StyledItem value="water">Water</StyledItem>
            <StyledItem value="fertilize">Fertilize</StyledItem>
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
            onChange={changes => {
              changes.isExpanded !== undefined && setPrimaryRotated(changes.isExpanded);
            }}
            placement="bottom-end"
          >
            <StyledItem value="prune">Prune</StyledItem>
            <StyledItem value="water">Water</StyledItem>
            <StyledItem value="fertilize">Fertilize</StyledItem>
          </Menu>
        </SplitButton>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Example;
