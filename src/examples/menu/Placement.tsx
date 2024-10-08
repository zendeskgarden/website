/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback } from 'react';
import { Grid } from '@zendeskgarden/react-grid';
import { Menu, Item, IMenuProps } from '@zendeskgarden/react-dropdowns';

const Example = () => {
  const handleChange = useCallback<NonNullable<IMenuProps['onChange']>>(changes => {
    changes.value && alert(`You chose ${changes.value}`);
  }, []);

  return (
    <Grid.Row justifyContent="center">
      <Grid.Col textAlign="center">
        <Menu
          button="Flowers"
          placement="top"
          fallbackPlacements={['bottom']}
          onChange={handleChange}
        >
          <Item value="acacia">Acacia</Item>
          <Item value="daisy">Daisy</Item>
          <Item value="honeysuckle">Honeysuckle</Item>
        </Menu>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Example;
