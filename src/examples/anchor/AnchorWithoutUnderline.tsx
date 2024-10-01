/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Anchor } from '@zendeskgarden/react-buttons';
import { UnorderedList } from '@zendeskgarden/react-typography';
import { Grid } from '@zendeskgarden/react-grid';

const StyledListItem = styled(UnorderedList.Item)`
  list-style: none;
`;

const Example = () => (
  <Grid.Row justifyContent="center">
    <Grid.Col size="auto">
      <UnorderedList>
        <StyledListItem>
          <Anchor isUnderlined={false} href="#asparagus">
            Asparagus
          </Anchor>
        </StyledListItem>
        <StyledListItem>
          <Anchor isUnderlined={false} href="#kale">
            Kale
          </Anchor>
        </StyledListItem>
        <StyledListItem>
          <Anchor isUnderlined={false} href="#lettuce">
            Lettuce
          </Anchor>
        </StyledListItem>
      </UnorderedList>
    </Grid.Col>
  </Grid.Row>
);

export default Example;
