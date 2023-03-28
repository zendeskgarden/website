/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { useDropzone } from 'react-dropzone';
import { KEY_CODES } from '@zendeskgarden/container-utilities';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { Field, Label, Input, FileUpload, FileList, File } from '@zendeskgarden/react-forms';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Tooltip } from '@zendeskgarden/react-tooltips';

const StyledCol = styled(Col)`
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
    if (e.keyCode === KEY_CODES.DELETE || e.keyCode === KEY_CODES.BACKSPACE) {
      e.preventDefault();
      alert('File dismissed via keyboard');
    }
  };

  const handleCloseKeyDown = (e: React.KeyboardEvent<any>) => {
    const KEYS = [KEY_CODES.SPACE, KEY_CODES.ENTER, KEY_CODES.DELETE, KEY_CODES.BACKSPACE];

    if (KEYS.includes(e.keyCode)) {
      e.preventDefault();
      alert('File dismissed via keyboard');
    }
  };

  return (
    <Row justifyContent="center">
      <Col sm={5}>
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
      </Col>
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
    </Row>
  );
};

export default Example;
