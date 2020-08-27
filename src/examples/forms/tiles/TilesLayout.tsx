/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Tiles } from '@zendeskgarden/react-forms';
import { ReactComponent as LeafIcon } from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';

const StyledCol = styled(Col)`
  ${p => mediaQuery('down', 'xs', p.theme)} {
    margin-top: ${p => p.theme.space.sm};
  }
`;

const Example = () => (
  <Row>
    <Col sm={6}>
      <Tiles name="example-centered" aria-label="Tiles component example">
        <Tiles.Tile value="leaf-centered">
          <Tiles.Icon>
            <LeafIcon />
          </Tiles.Icon>
          <Tiles.Label>Centered layout</Tiles.Label>
          <Tiles.Description>
            Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
          </Tiles.Description>
        </Tiles.Tile>
      </Tiles>
    </Col>
    <StyledCol sm={6}>
      <Tiles name="example" aria-label="Tiles component example" isCentered={false}>
        <Tiles.Tile value="leaf">
          <Tiles.Icon>
            <LeafIcon />
          </Tiles.Icon>
          <Tiles.Label>Non-centered layout</Tiles.Label>
          <Tiles.Description>
            Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
          </Tiles.Description>
        </Tiles.Tile>
      </Tiles>
    </StyledCol>
  </Row>
);

export default Example;
