/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { useDropzone } from 'react-dropzone';
import { KEYS } from '@zendeskgarden/container-utilities';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { Field, Label, Input, FileUpload, FileList, File } from '@zendeskgarden/react-forms';
import { Grid } from '@zendeskgarden/react-grid';
import { Tooltip } from '@zendeskgarden/react-tooltips';

const StyledCol = styled(Grid.Col)`
  ${p => mediaQuery('down', 'xs', p.theme)} {
    margin-top: ${p => p.theme.space.sm};
  }
`;

const StyledFileUpload = styled(FileUpload)`
  min-height: ${p => p.theme.space.base * (p.isCompact ? 15 : 20)}px;
`;

const Example = () => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 'image/*': ['.jpeg', '.png', '.gif'] }
  });

  const handleClick = () => alert('File dismissed via mouse');

  const handleFileKeyDown = (e: React.KeyboardEvent<any>) => {
    if (e.key === KEYS.DELETE || e.key === KEYS.BACKSPACE) {
      e.preventDefault();
      alert('File dismissed via keyboard');
    }
  };

  const handleCloseKeyDown = (e: React.KeyboardEvent<any>) => {
    const keys = [KEYS.SPACE, KEYS.ENTER, KEYS.DELETE, KEYS.BACKSPACE];

    if (keys.includes(e.key)) {
      e.preventDefault();
      alert('File dismissed via keyboard');
    }
  };

  return (
    <Grid.Row justifyContent="center">
      <Grid.Col sm={5}>
        <Field>
          <Label>Upload a photo of your ailing cactus</Label>
          <StyledFileUpload {...getRootProps()} isDragging={isDragActive}>
            {isDragActive ? (
              <span>Drop files here</span>
            ) : (
              <span>Choose a file or drag and drop here</span>
            )}
            <Input {...getInputProps()} />
          </StyledFileUpload>
          <FileList>
            <FileList.Item>
              <File
                type="image"
                tabIndex={0}
                aria-label="Image file, press delete to remove"
                onKeyDown={handleFileKeyDown}
              >
                prickly-pear.png
                <Tooltip content="Remove file">
                  <File.Delete
                    aria-label="Remove file"
                    onClick={handleClick}
                    onKeyDown={handleCloseKeyDown}
                  />
                </Tooltip>
              </File>
            </FileList.Item>
            <FileList.Item>
              <File
                type="image"
                tabIndex={0}
                aria-label="Image file, press delete to remove"
                onKeyDown={handleFileKeyDown}
              >
                saguaro.svg
                <Tooltip content="Remove file">
                  <File.Delete
                    aria-label="Remove file"
                    onClick={handleClick}
                    onKeyDown={handleCloseKeyDown}
                  />
                </Tooltip>
              </File>
            </FileList.Item>
          </FileList>
        </Field>
      </Grid.Col>
      <StyledCol sm={5}>
        <Field>
          <Label>Upload a photo of your ailing cactus</Label>
          <StyledFileUpload {...getRootProps()} isDragging={isDragActive} isCompact>
            {isDragActive ? (
              <span>Drop files here</span>
            ) : (
              <span>Choose a file or drag and drop here</span>
            )}
            <Input {...getInputProps()} />
          </StyledFileUpload>
          <FileList>
            <FileList.Item>
              <File
                type="image"
                tabIndex={0}
                aria-label="Image file, press delete to remove"
                onKeyDown={handleFileKeyDown}
                isCompact
              >
                prickly-pear.png
                <Tooltip content="Remove file">
                  <File.Delete
                    aria-label="Remove file"
                    onClick={handleClick}
                    onKeyDown={handleCloseKeyDown}
                  />
                </Tooltip>
              </File>
            </FileList.Item>
            <FileList.Item>
              <File
                type="image"
                tabIndex={0}
                aria-label="Image file, press delete to remove"
                onKeyDown={handleFileKeyDown}
                isCompact
              >
                saguaro.svg
                <Tooltip content="Remove file">
                  <File.Delete
                    aria-label="Remove file"
                    onClick={handleClick}
                    onKeyDown={handleCloseKeyDown}
                  />
                </Tooltip>
              </File>
            </FileList.Item>
          </FileList>
        </Field>
      </StyledCol>
    </Grid.Row>
  );
};

export default Example;
