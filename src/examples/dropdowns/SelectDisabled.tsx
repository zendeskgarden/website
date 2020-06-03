/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Dropdown, Field, Select, Label } from '@zendeskgarden/react-dropdowns';

const Example = () => {
  return (
    <Dropdown>
      <Field>
        <Label>Plants</Label>
        <Select disabled>Cactus</Select>
      </Field>
    </Dropdown>
  );
};

export default Example;
