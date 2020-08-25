/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Tiles } from '@zendeskgarden/react-forms';
import { ReactComponent as LeafIcon } from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';
import { ReactComponent as ImageIcon } from '@zendeskgarden/svg-icons/src/16/file-image-stroke.svg';
import { ReactComponent as PresentationIcon } from '@zendeskgarden/svg-icons/src/16/file-presentation-stroke.svg';

const StyledCol = styled(Col)`
  margin: ${p => p.theme.space.xs} 0;
`;

const Example = () => (
  <Tiles name="example" aria-label="Tiles component example">
    <Row>
      <StyledCol xs={6} sm={4}>
        <Tiles.Tile value="leaf">
          <Tiles.Icon>
            <LeafIcon />
          </Tiles.Icon>
          <Tiles.Label>Leaf</Tiles.Label>
        </Tiles.Tile>
      </StyledCol>
      <StyledCol xs={6} sm={4}>
        <Tiles.Tile value="image">
          <Tiles.Icon>
            <ImageIcon />
          </Tiles.Icon>
          <Tiles.Label>Image</Tiles.Label>
        </Tiles.Tile>
      </StyledCol>
      <StyledCol xs={6} sm={4}>
        <Tiles.Tile value="presentation">
          <Tiles.Icon>
            <PresentationIcon />
          </Tiles.Icon>
          <Tiles.Label>Presentation</Tiles.Label>
        </Tiles.Tile>
      </StyledCol>
    </Row>
  </Tiles>
);

export default Example;
