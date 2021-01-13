/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Field, Label, Hint, Input, FileUpload } from '@zendeskgarden/react-forms';
import { Row, Col } from '@zendeskgarden/react-grid';

const Example = () => {
  const onDrop = React.useCallback((acceptedFiles: File[]) => {
    alert(`${acceptedFiles.length} files accepted for upload`);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: ['image/jpeg', 'image/png', 'image/gif'],
    onDrop
  });

  return (
    <Row>
      <Col>
        <Field>
          <Label>Upload a photo of your ailing cactus</Label>
          <Hint>
            Include the entire plant in your photo. Acceptable formats are JPG, PNG, and GIF.
          </Hint>
          <FileUpload {...getRootProps()} isDragging={isDragActive}>
            {isDragActive ? (
              <span>Drop files here</span>
            ) : (
              <span>Choose a file or drag and drop here</span>
            )}
            <Input {...getInputProps()} />
          </FileUpload>
        </Field>
      </Col>
    </Row>
  );
};

export default Example;
