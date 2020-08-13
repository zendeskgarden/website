/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Field, Label, Range } from '@zendeskgarden/react-forms';

const Example = () => (
  <Field>
    <Label>Flowers</Label>
    <Range step={10} />
  </Field>
);

export default Example;
