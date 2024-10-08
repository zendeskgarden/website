/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useCallback, useState, memo } from 'react';
import styled from 'styled-components';
import { useDropzone } from 'react-dropzone';
import { KEYS } from '@zendeskgarden/container-utilities';
import { Field, Input, FileUpload, FileList, File } from '@zendeskgarden/react-forms';
import { Progress } from '@zendeskgarden/react-loaders';
import { Grid } from '@zendeskgarden/react-grid';
import { Tooltip } from '@zendeskgarden/react-tooltips';

const StyledFileUpload = styled(FileUpload)`
  min-height: ${p => p.theme.space.base * 20}px;
`;

const FileItem: React.FC<{ name: string; onRemove: () => void }> = memo(({ name, onRemove }) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    /* simulate file upload progress */
    const interval = setInterval(
      () => {
        setProgress(value => {
          if (value >= 100) {
            clearInterval(interval);

            return 100;
          }

          return value + 20;
        });
      },
      Math.random() * 300 + 100
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleFileKeyDown = (e: React.KeyboardEvent<any>) => {
    if (e.key === KEYS.DELETE || e.key === KEYS.BACKSPACE) {
      e.preventDefault();
      onRemove();
    }
  };

  const handleCloseKeyDown = (e: React.KeyboardEvent<any>) => {
    const keys = [KEYS.SPACE, KEYS.ENTER, KEYS.DELETE, KEYS.BACKSPACE];

    if (keys.includes(e.key)) {
      e.preventDefault();
      alert('File dismissed via keyboard');
    }
  };

  const labelAction = progress === 100 ? 'remove' : 'cancel upload';

  return (
    <FileList.Item>
      <File
        type="image"
        title={name}
        aria-label={`Image file, press delete to ${labelAction}`}
        tabIndex={0}
        onKeyDown={handleFileKeyDown}
      >
        {name}
        <Tooltip content={progress === 100 ? 'Remove file' : 'Stop upload'}>
          {progress === 100 ? (
            <File.Delete
              aria-label="Remove file"
              onClick={onRemove}
              onKeyDown={handleCloseKeyDown}
            />
          ) : (
            <File.Close
              aria-label="Stop upload"
              onClick={onRemove}
              onKeyDown={handleCloseKeyDown}
            />
          )}
        </Tooltip>
        <Progress
          value={progress}
          aria-label={`Uploading ${name}`}
          aria-hidden={progress === 100}
        />
      </File>
    </FileList.Item>
  );
});

const Example = () => {
  const [files, setFiles] = useState<string[]>([]);

  const removeFile = useCallback<(index: number) => void>(
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
    accept: { 'image/*': ['.jpeg', '.png', '.gif'] },
    onDrop
  });

  return (
    <Grid.Row justifyContent="center">
      <Grid.Col sm={5}>
        <Field>
          <Field.Label>Upload a photo of your ailing cactus</Field.Label>
          <Field.Hint>Include the entire plant in your photo</Field.Hint>
          <StyledFileUpload {...getRootProps()} isDragging={isDragActive}>
            {isDragActive ? (
              <span>Drop files here</span>
            ) : (
              <span>Choose a file or drag and drop here</span>
            )}
            <Input {...getInputProps()} />
          </StyledFileUpload>
          {files.length === 0 ? (
            <Field.Message>Acceptable formats are JPG, PNG, and GIF</Field.Message>
          ) : (
            <FileList>
              {files.map((file, index) => (
                <FileItem
                  key={file}
                  name={file}
                  onRemove={() => {
                    removeFile(index);
                  }}
                />
              ))}
            </FileList>
          )}
        </Field>
      </Grid.Col>
    </Grid.Row>
  );
};

export default Example;
