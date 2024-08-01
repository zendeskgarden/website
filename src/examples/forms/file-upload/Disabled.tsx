/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Field, Label, FileUpload, FileList, File } from '@zendeskgarden/react-forms';
import { Grid } from '@zendeskgarden/react-grid';

const Example = () => (
  <Grid.Row justifyContent="center">
    <Grid.Col sm={5}>
      <Field>
        <Label>Upload a photo of your ailing cactus</Label>
        <FileUpload disabled>Choose a file or drag and drop here</FileUpload>
        <FileList>
          <FileList.Item>
            <File>prickly-pear.png</File>
          </FileList.Item>
        </FileList>
      </Field>
    </Grid.Col>
  </Grid.Row>
);

export default Example;
