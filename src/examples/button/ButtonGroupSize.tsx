/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Row, Col } from '@zendeskgarden/react-grid';
import { ButtonGroup, Button } from '@zendeskgarden/react-buttons';

const SmallButtonGroup = () => {
  const [selectedItem, setSelectedItem] = useState('daisy');

  return (
    <ButtonGroup selectedItem={selectedItem} onSelect={newItem => setSelectedItem(newItem)}>
      <Button size="small" value="daisy">
        Daisy
      </Button>
      <Button size="small" value="orchid">
        Orchid
      </Button>
    </ButtonGroup>
  );
};

const DefaultButtonGroup = () => {
  const [selectedItem, setSelectedItem] = useState('azalea');

  return (
    <ButtonGroup selectedItem={selectedItem} onSelect={newItem => setSelectedItem(newItem)}>
      <Button size="medium" value="azalea">
        Azalea
      </Button>
      <Button size="medium" value="violet">
        Violet
      </Button>
    </ButtonGroup>
  );
};

const LargeButtonGroup = () => {
  const [selectedItem, setSelectedItem] = useState('jasmine');

  return (
    <ButtonGroup selectedItem={selectedItem} onSelect={newItem => setSelectedItem(newItem)}>
      <Button size="large" value="jasmine">
        Jasmine
      </Button>
      <Button size="large" value="marigold">
        Marigold
      </Button>
    </ButtonGroup>
  );
};

const StyledCol = styled(Col)`
  @media (max-width: ${p => p.theme.breakpoints.sm}) {
    margin-top: ${p => p.theme.space.sm};
  }
`;

const Example = () => (
  <Row alignItems="center">
    <Col textAlign="center" sm>
      <SmallButtonGroup />
    </Col>
    <StyledCol textAlign="center" sm>
      <DefaultButtonGroup />
    </StyledCol>
    <StyledCol textAlign="center" sm>
      <LargeButtonGroup />
    </StyledCol>
  </Row>
);

export default Example;
