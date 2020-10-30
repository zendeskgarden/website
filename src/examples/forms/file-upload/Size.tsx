/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { useDropzone } from 'react-dropzone';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { Field, Label, Input, FileUpload } from '@zendeskgarden/react-forms';
import { Row, Col } from '@zendeskgarden/react-grid';

const StyledCol = styled(Col)`
  ${p => mediaQuery('down', 'xs', p.theme)} {
    margin-top: ${p => p.theme.space.sm};
  }
`;

const Example = () => {
  const onDrop = React.useCallback((acceptedFiles: File[]) => {
    alert(`${acceptedFiles.length} files accepted for upload`);
  }, []);

  const defaultDropzone = useDropzone({
    accept: ['image/jpeg', 'image/png', 'image/gif'],
    onDrop
  });

  const compactDropzone = useDropzone({
    accept: ['image/jpeg', 'image/png', 'image/gif'],
    onDrop
  });

  return (
    <Row justifyContent="center">
      <Col sm={5}>
        <Field>
          <Label>Upload a photo of your ailing cactus</Label>
          <FileUpload {...defaultDropzone.getRootProps()} isDragging={defaultDropzone.isDragActive}>
            {defaultDropzone.isDragActive ? (
              <span>Drop files here</span>
            ) : (
              <span>Choose a file of drag and drop here</span>
            )}
            <Input {...defaultDropzone.getInputProps()} />
          </FileUpload>
        </Field>
      </Col>
      <StyledCol sm={5}>
        <Field>
          <Label>Upload a photo of your ailing cactus</Label>
          <FileUpload
            {...compactDropzone.getRootProps()}
            isDragging={compactDropzone.isDragActive}
            isCompact
          >
            {compactDropzone.isDragActive ? (
              <span>Drop files here</span>
            ) : (
              <span>Choose a file of drag and drop here</span>
            )}
            <Input {...compactDropzone.getInputProps()} />
          </FileUpload>
        </Field>
      </StyledCol>
    </Row>
  );
};

export default Example;
