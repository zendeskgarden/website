/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Field, MediaInput } from '@zendeskgarden/react-forms';
import { Grid } from '@zendeskgarden/react-grid';
import { ReactComponent as StartIcon } from '@zendeskgarden/svg-icons/src/16/search-stroke.svg';
import { ReactComponent as EndIcon } from '@zendeskgarden/svg-icons/src/16/leaf-stroke.svg';

const Example = () => (
  <Grid.Row justifyContent="center">
    <Grid.Col sm={5}>
      <Field>
        <Field.Label>Prune</Field.Label>
        <MediaInput start={<StartIcon />} end={<EndIcon />} />
      </Field>
    </Grid.Col>
  </Grid.Row>
);

export default Example;
