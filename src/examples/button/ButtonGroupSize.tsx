/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Grid, Row } from '@zendeskgarden/react-grid';
import { ButtonGroup, Button } from '@zendeskgarden/react-buttons';

const SmallButtonGroup = () => {
  const [selectedItem, setSelectedItem] = useState('daisy');

  return (
    <ButtonGroup selectedItem={selectedItem} onSelect={newItem => setSelectedItem(newItem)}>
      <Button value="daisy">Daisy</Button>
      <Button value="orchid">Orchid</Button>
    </ButtonGroup>
  );
};

const DefaultButtonGroup = () => {
  const [selectedItem, setSelectedItem] = useState('azalea');

  return (
    <ButtonGroup selectedItem={selectedItem} onSelect={newItem => setSelectedItem(newItem)}>
      <Button value="azalea">Azalea</Button>
      <Button value="violet">Violet</Button>
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

const Example = () => {
  return (
    <Grid>
      <Row justifyContent="around">
        <SmallButtonGroup />
        <DefaultButtonGroup />
        <LargeButtonGroup />
      </Row>
    </Grid>
  );
};

export default Example;
