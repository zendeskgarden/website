/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { FileList, File } from '@zendeskgarden/react-forms';
import { Progress } from '@zendeskgarden/react-loaders';
import { Row, Col } from '@zendeskgarden/react-grid';
import { KEY_CODES } from '@zendeskgarden/container-utilities';
import { Tooltip } from '@zendeskgarden/react-tooltips';

const handleClick = () => alert('File dismissed via mouse');

const handleKeyDown = (e: React.KeyboardEvent<any>) => {
  if (e.keyCode === KEY_CODES.DELETE || e.keyCode === KEY_CODES.BACKSPACE) {
    e.preventDefault();
    alert('File dismissed via keyboard');
  }
};

const Example = () => (
  <Row justifyContent="center">
    <Col sm={5}>
      <FileList>
        <FileList.Item>
          <File type="generic" aria-label="Generic file" tabIndex={0} onKeyDown={handleKeyDown}>
            Garden file
            <Tooltip content="Stop upload">
              <File.Close aria-label="close" onClick={handleClick} tabIndex={-1} />
            </Tooltip>
            <Progress value={0} aria-hidden="true" />
          </File>
        </FileList.Item>
        <FileList.Item>
          <File type="document" aria-label="Document file" tabIndex={0} onKeyDown={handleKeyDown}>
            Plant ecology.doc
            <Tooltip content="Stop upload">
              <File.Close aria-label="close" onClick={handleClick} tabIndex={-1} />
            </Tooltip>
            <Progress value={16} aria-label="Uploading Plant ecology.doc" />
          </File>
        </FileList.Item>
        <FileList.Item>
          <File type="image" aria-label="Image file" tabIndex={0} onKeyDown={handleKeyDown}>
            Rose petals.jpg
            <Tooltip content="Stop upload">
              <File.Close aria-label="close" onClick={handleClick} tabIndex={-1} />
            </Tooltip>
            <Progress value={32} aria-label="Uploading Rose petals.jpg" />
          </File>
        </FileList.Item>
        <FileList.Item>
          <File type="pdf" aria-label="PDF file" tabIndex={0} onKeyDown={handleKeyDown}>
            Basics of gardening.pdf
            <Tooltip content="Stop upload">
              <File.Close aria-label="close" onClick={handleClick} tabIndex={-1} />
            </Tooltip>
            <Progress value={48} aria-label="Uploading Basics of gardening.pdf" />
          </File>
        </FileList.Item>
        <FileList.Item>
          <File
            type="presentation"
            aria-label="Presentation file"
            tabIndex={0}
            onKeyDown={handleKeyDown}
          >
            Presentation bouquets.ppt
            <Tooltip content="Stop upload">
              <File.Close aria-label="close" onClick={handleClick} tabIndex={-1} />
            </Tooltip>
            <Progress value={64} aria-label="Uploading Presentation bouquets.ppt" />
          </File>
        </FileList.Item>
        <FileList.Item>
          <File
            type="spreadsheet"
            aria-label="Spreadsheet file"
            tabIndex={0}
            onKeyDown={handleKeyDown}
          >
            Seed inventory.xlsx
            <Tooltip content="Stop upload">
              <File.Close aria-label="close" onClick={handleClick} tabIndex={-1} />
            </Tooltip>
            <Progress value={80} aria-label="Uploading Seed inventory.xlsx" />
          </File>
        </FileList.Item>
        <FileList.Item>
          <File type="zip" aria-label="ZIP file" tabIndex={0} onKeyDown={handleKeyDown}>
            Landscape.zip
            <Tooltip content="Remove file">
              <File.Delete aria-label="delete" onClick={handleClick} tabIndex={-1} />
            </Tooltip>
            <Progress value={100} aria-label="Uploading Landscape.zip" />
          </File>
        </FileList.Item>
      </FileList>
    </Col>
  </Row>
);

export default Example;
