/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { Grid } from '@zendeskgarden/react-grid';
import { Tiles } from '@zendeskgarden/react-forms';
import { ReactComponent as LeafIcon } from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';
import { ReactComponent as ImageIcon } from '@zendeskgarden/svg-icons/src/16/file-image-stroke.svg';
import { ReactComponent as PresentationIcon } from '@zendeskgarden/svg-icons/src/16/file-presentation-stroke.svg';

const StyledCol = styled(Grid.Col)`
  ${p => mediaQuery('down', 'xs', p.theme)} {
    margin-top: ${p => p.theme.space.sm};
  }
`;

const Example = () => (
  <Tiles name="example" aria-label="Disabled Tiles component example">
    <Grid.Row>
      <Grid.Col sm={4}>
        <Tiles.Tile value="leaf" disabled>
          <Tiles.Icon>
            <LeafIcon />
          </Tiles.Icon>
          <Tiles.Label>Leaf</Tiles.Label>
        </Tiles.Tile>
      </Grid.Col>
      <StyledCol sm={4}>
        <Tiles.Tile value="image" disabled>
          <Tiles.Icon>
            <ImageIcon />
          </Tiles.Icon>
          <Tiles.Label>Image</Tiles.Label>
        </Tiles.Tile>
      </StyledCol>
      <StyledCol sm={4}>
        <Tiles.Tile value="presentation" disabled>
          <Tiles.Icon>
            <PresentationIcon />
          </Tiles.Icon>
          <Tiles.Label>Presentation</Tiles.Label>
        </Tiles.Tile>
      </StyledCol>
    </Grid.Row>
  </Tiles>
);

export default Example;
