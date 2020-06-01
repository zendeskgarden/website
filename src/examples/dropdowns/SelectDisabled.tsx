/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Dropdown, Field, Select, Label } from '@zendeskgarden/react-dropdowns';

const StyledField = styled(Field)`
  * {
    /* stylelint-disable-next-line declaration-no-important */
    appearance: none !important;
  }
`;

const Example = () => {
  return (
    <Dropdown>
      <StyledField>
        <Label>Plants</Label>
        <Select disabled>Cactus</Select>
      </StyledField>
    </Dropdown>
  );
};

export default Example;
