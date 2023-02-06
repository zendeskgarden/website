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

const Example = () => (
  <Row justifyContent="center">
    <Col sm={5}>
      <FileList>
        <FileList.Item>
          <File type="generic" aria-label="Generic file" tabIndex={0} onKeyDown={handleFileKeyDown}>
            Garden file
            <File.Close
              aria-label="Press delete to remove"
              onClick={handleClick}
              onKeyDown={handleCloseKeyDown}
            />
            <Progress value={0} aria-hidden="true" />
          </File>
        </FileList.Item>
        <FileList.Item>
          <File
            type="document"
            aria-label="Document file"
            tabIndex={0}
            onKeyDown={handleFileKeyDown}
          >
            Plant ecology.doc
            <File.Close
              aria-label="Press delete to remove"
              onClick={handleClick}
              onKeyDown={handleCloseKeyDown}
            />
            <Progress value={16} aria-label="Uploading Plant ecology.doc" />
          </File>
        </FileList.Item>
        <FileList.Item>
          <File type="image" aria-label="Image file" tabIndex={0} onKeyDown={handleFileKeyDown}>
            Rose petals.jpg
            <File.Close
              aria-label="Press delete to remove"
              onClick={handleClick}
              onKeyDown={handleCloseKeyDown}
            />
            <Progress value={32} aria-label="Uploading Rose petals.jpg" />
          </File>
        </FileList.Item>
        <FileList.Item>
          <File type="pdf" aria-label="PDF file" tabIndex={0} onKeyDown={handleFileKeyDown}>
            Basics of gardening.pdf
            <File.Close
              aria-label="Press delete to remove"
              onClick={handleClick}
              onKeyDown={handleCloseKeyDown}
            />
            <Progress value={48} aria-label="Uploading Basics of gardening.pdf" />
          </File>
        </FileList.Item>
        <FileList.Item>
          <File
            type="presentation"
            aria-label="Presentation file"
            tabIndex={0}
            onKeyDown={handleFileKeyDown}
          >
            Presentation bouquets.ppt
            <File.Close
              aria-label="Press delete to remove"
              onClick={handleClick}
              onKeyDown={handleCloseKeyDown}
            />
            <Progress value={64} aria-label="Uploading Presentation bouquets.ppt" />
          </File>
        </FileList.Item>
        <FileList.Item>
          <File
            type="spreadsheet"
            aria-label="Spreadsheet file"
            tabIndex={0}
            onKeyDown={handleFileKeyDown}
          >
            Seed inventory.xlsx
            <File.Close
              aria-label="Press delete to remove"
              onClick={handleClick}
              onKeyDown={handleCloseKeyDown}
            />
            <Progress value={80} aria-label="Uploading Seed inventory.xlsx" />
          </File>
        </FileList.Item>
        <FileList.Item>
          <File type="zip" aria-label="ZIP file" tabIndex={0} onKeyDown={handleFileKeyDown}>
            Landscape.zip
            <File.Delete aria-label="delete" onClick={handleClick} onKeyDown={handleCloseKeyDown} />
            <Progress value={100} aria-hidden="true" />
          </File>
        </FileList.Item>
      </FileList>
    </Col>
  </Row>
);

export default Example;
