/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Grid } from '@zendeskgarden/react-grid';
import { SplitButton, Button, ChevronButton } from '@zendeskgarden/react-buttons';
import { Menu, Item, IMenuProps } from '@zendeskgarden/react-dropdowns';

const StyledItem = styled(Item)`
  overflow-wrap: break-word;
`;

const Example = () => {
  const [rotated, setRotated] = useState<boolean>();

  const handleChange = useCallback<NonNullable<IMenuProps['onChange']>>(changes => {
    changes.isExpanded !== undefined && setRotated(changes.isExpanded);
  }, []);

  return (
    <Grid.Row>
      <Grid.Col textAlign="center">
        <SplitButton>
          <Button disabled>Harvest</Button>
          <Menu
            button={props => (
              <ChevronButton {...props} aria-label="other actions" isRotated={rotated} disabled />
            )}
            onChange={handleChange}
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
