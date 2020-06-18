/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import { Grid, Row } from '@zendeskgarden/react-grid';
import { ButtonGroup, Button } from '@zendeskgarden/react-buttons';

const DefaultButtonGroup = () => {
  const [selectedItem, setSelectedItem] = useState('daisy');

  return (
    <ButtonGroup selectedItem={selectedItem} onSelect={newItem => setSelectedItem(newItem)}>
      <Button value="daisy">Daisy</Button>
      <Button value="orchid">Orchid</Button>
      <Button value="lily">Lily</Button>
    </ButtonGroup>
  );
};

const PrimaryButtonGroup = () => {
  const [selectedItem, setSelectedItem] = useState('jasmine');

  return (
    <ButtonGroup selectedItem={selectedItem} onSelect={newItem => setSelectedItem(newItem)}>
      <Button isPrimary value="jasmine">
        Jasmine
      </Button>
      <Button isPrimary value="marigold">
        Marigold
      </Button>
      <Button isPrimary value="sunflower">
        Sunflower
      </Button>
    </ButtonGroup>
  );
};

const Example = () => {
  return (
    <Grid>
      <Row justifyContent="around">
        <DefaultButtonGroup />
        <PrimaryButtonGroup />
      </Row>
    </Grid>
  );
};

export default Example;
