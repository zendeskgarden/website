/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid } from '@zendeskgarden/react-grid';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { SplitButton, Button, ChevronButton } from '@zendeskgarden/react-buttons';
import { Menu, Item } from '@zendeskgarden/react-dropdowns';

const StyledCol = styled(Grid.Col)`
  ${p => mediaQuery('down', 'xs', p.theme)} {
    margin-top: ${p => p.theme.space.sm};
  }
`;

const StyledItem = styled(Item)`
  overflow-wrap: break-word;
`;

const Example = () => {
  const [smallRotated, setSmallRotated] = useState<boolean>();
  const [mediumRotated, setMediumRotated] = useState<boolean>();
  const [largeRotated, setLargeRotated] = useState<boolean>();

  return (
    <Grid.Row alignItems="center">
      <Grid.Col textAlign="center" sm>
        <SplitButton>
          <Button size="small">Harvest</Button>
          <Menu
            button={props => (
              <ChevronButton
                {...props}
                aria-label="other actions"
                size="small"
                isRotated={smallRotated}
              />
            )}
            isCompact
            onChange={changes => {
              changes.isExpanded !== undefined && setSmallRotated(changes.isExpanded);
            }}
            placement="bottom-end"
            zIndex={10000}
          >
            <StyledItem value="prune">Prune</StyledItem>
            <StyledItem value="water">Water</StyledItem>
            <StyledItem value="fertilize">Fertilize</StyledItem>
          </Menu>
        </SplitButton>
      </Grid.Col>
      <StyledCol textAlign="center" sm>
        <SplitButton>
          <Button size="medium">Harvest</Button>
          <Menu
            button={props => (
              <ChevronButton
                {...props}
                aria-label="other actions"
                size="medium"
                isRotated={mediumRotated}
              />
            )}
            onChange={changes => {
              changes.isExpanded !== undefined && setMediumRotated(changes.isExpanded);
            }}
            placement="bottom-end"
            zIndex={10000}
          >
            <StyledItem value="prune">Prune</StyledItem>
            <StyledItem value="water">Water</StyledItem>
            <StyledItem value="fertilize">Fertilize</StyledItem>
          </Menu>
        </SplitButton>
      </StyledCol>
      <StyledCol textAlign="center" sm>
        <SplitButton>
          <Button size="large">Harvest</Button>
          <Menu
            button={props => (
              <ChevronButton
                {...props}
                aria-label="other actions"
                size="large"
                isRotated={largeRotated}
              />
            )}
            onChange={changes => {
              changes.isExpanded !== undefined && setLargeRotated(changes.isExpanded);
            }}
            placement="bottom-end"
            zIndex={10000}
          >
            <StyledItem value="prune">Prune</StyledItem>
            <StyledItem value="water">Water</StyledItem>
            <StyledItem value="fertilize">Fertilize</StyledItem>
          </Menu>
        </SplitButton>
      </StyledCol>
    </Grid.Row>
  );
};

export default Example;
