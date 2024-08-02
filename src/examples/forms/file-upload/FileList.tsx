/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { FileList, File } from '@zendeskgarden/react-forms';
import { Progress } from '@zendeskgarden/react-loaders';
import { Grid } from '@zendeskgarden/react-grid';
import { KEYS } from '@zendeskgarden/container-utilities';
import { Tooltip } from '@zendeskgarden/react-tooltips';

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

const Example = () => (
  <Grid.Row justifyContent="center">
    <Grid.Col sm={5}>
      <FileList>
        <FileList.Item>
          <File
            type="generic"
            aria-label="Generic file, press delete to stop upload"
            tabIndex={0}
            onKeyDown={handleFileKeyDown}
          >
            Garden file
            <Tooltip content="Stop upload">
              <File.Close
                aria-label="Stop upload"
                onClick={handleClick}
                onKeyDown={handleCloseKeyDown}
              />
            </Tooltip>
            <Progress value={0} aria-hidden="true" />
          </File>
        </FileList.Item>
        <FileList.Item>
          <File
            type="document"
            aria-label="Document file, press delete to stop upload"
            tabIndex={0}
            onKeyDown={handleFileKeyDown}
          >
            Plant ecology.doc
            <Tooltip content="Stop upload">
              <File.Close
                aria-label="Stop upload"
                onClick={handleClick}
                onKeyDown={handleCloseKeyDown}
              />
            </Tooltip>
            <Progress value={16} aria-label="Uploading Plant ecology.doc" />
          </File>
        </FileList.Item>
        <FileList.Item>
          <File
            type="image"
            aria-label="Image file, press delete to stop upload"
            tabIndex={0}
            onKeyDown={handleFileKeyDown}
          >
            Rose petals.jpg
            <Tooltip content="Stop upload">
              <File.Close
                aria-label="Stop upload"
                onClick={handleClick}
                onKeyDown={handleCloseKeyDown}
              />
            </Tooltip>
            <Progress value={32} aria-label="Uploading Rose petals.jpg" />
          </File>
        </FileList.Item>
        <FileList.Item>
          <File
            type="pdf"
            aria-label="PDF file, press delete to stop upload"
            tabIndex={0}
            onKeyDown={handleFileKeyDown}
          >
            Basics of gardening.pdf
            <Tooltip content="Stop upload">
              <File.Close
                aria-label="Stop upload"
                onClick={handleClick}
                onKeyDown={handleCloseKeyDown}
              />
            </Tooltip>
            <Progress value={48} aria-label="Uploading Basics of gardening.pdf" />
          </File>
        </FileList.Item>
        <FileList.Item>
          <File
            type="presentation"
            aria-label="Presentation file, press delete to stop upload"
            tabIndex={0}
            onKeyDown={handleFileKeyDown}
          >
            Presentation bouquets.ppt
            <Tooltip content="Stop upload">
              <File.Close
                aria-label="Stop upload"
                onClick={handleClick}
                onKeyDown={handleCloseKeyDown}
              />
            </Tooltip>
            <Progress value={64} aria-label="Uploading Presentation bouquets.ppt" />
          </File>
        </FileList.Item>
        <FileList.Item>
          <File
            type="spreadsheet"
            aria-label="Spreadsheet file, press delete to stop upload"
            tabIndex={0}
            onKeyDown={handleFileKeyDown}
          >
            Seed inventory.xlsx
            <Tooltip content="Stop upload">
              <File.Close
                aria-label="Stop upload"
                onClick={handleClick}
                onKeyDown={handleCloseKeyDown}
              />
            </Tooltip>
            <Progress value={80} aria-label="Uploading Seed inventory.xlsx" />
          </File>
        </FileList.Item>
        <FileList.Item>
          <File
            type="zip"
            aria-label="ZIP file, press delete to remove"
            tabIndex={0}
            onKeyDown={handleFileKeyDown}
          >
            Landscape.zip
            <Tooltip content="Remove file">
              <File.Delete
                aria-label="Remove file"
                onClick={handleClick}
                onKeyDown={handleCloseKeyDown}
              />
            </Tooltip>
            <Progress value={100} aria-hidden="true" />
          </File>
        </FileList.Item>
      </FileList>
    </Grid.Col>
  </Grid.Row>
);

export default Example;
