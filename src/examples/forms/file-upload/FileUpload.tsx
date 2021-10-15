/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback, useState, memo } from 'react';
import styled from 'styled-components';
import { useDropzone } from 'react-dropzone';
import { KEY_CODES } from '@zendeskgarden/container-utilities';
import {
  Field,
  Label,
  Hint,
  Input,
  FileUpload,
  Message,
  FileList,
  File
} from '@zendeskgarden/react-forms';
import { Progress } from '@zendeskgarden/react-loaders';
import { Row, Col } from '@zendeskgarden/react-grid';

const StyledFileList = styled(FileList)`
  margin-top: ${p => p.theme.space.xs};
`;

const FileItem: React.FC<{ name: string; onRemove: () => void }> = memo(({ name, onRemove }) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    /* simulate file upload progress */
    const interval = setInterval(() => {
      setProgress(value => {
        if (value >= 100) {
          clearInterval(interval);

          return 100;
        }

        return value + 20;
      });
    }, Math.random() * 300 + 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<any>) => {
    if (e.keyCode === KEY_CODES.DELETE || e.keyCode === KEY_CODES.BACKSPACE) {
      e.preventDefault();
      onRemove();
    }
  };

  return (
    <FileList.Item>
      <File
        type="image"
        title={name}
        tabIndex={0}
        aria-label="Image file"
        onKeyDown={handleKeyDown}
      >
        {name}
        <File.Close onClick={onRemove} />
        <Progress value={progress} />
      </File>
    </FileList.Item>
  );
});

const Example = () => {
  const [files, setFiles] = useState<string[]>([]);

  const removeFile = useCallback(
    fileIndex => {
      setFiles(files.filter((_, index) => index !== fileIndex));
    },
    [files]
  );

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        const newFiles = acceptedFiles.map(acceptedFile => acceptedFile.name);

        setFiles([...files, ...newFiles]);
      }
    },
    [files]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: ['image/jpeg', 'image/png', 'image/gif'],
    onDrop
  });

  return (
    <Row justifyContent="center">
      <Col sm={5}>
        <Field>
          <Label>Upload a photo of your ailing cactus</Label>
          <Hint>Include the entire plant in your photo</Hint>
          <FileUpload {...getRootProps()} isDragging={isDragActive}>
            {isDragActive ? (
              <span>Drop files here</span>
            ) : (
              <span>Choose a file or drag and drop here</span>
            )}
            <Input {...getInputProps()} />
          </FileUpload>
          {files.length === 0 ? (
            <Message>Acceptable formats are JPG, PNG, and GIF</Message>
          ) : (
            <StyledFileList>
              {files.map((file, index) => (
                <FileItem key={file} name={file} onRemove={() => removeFile(index)} />
              ))}
            </StyledFileList>
          )}
        </Field>
      </Col>
    </Row>
  );
};

export default Example;
