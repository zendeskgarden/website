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
          <File type="document" aria-label="Document file" tabIndex={0} onKeyDown={handleKeyDown}>
            Plant ecology.doc
            <File.Close onClick={() => alert('File dismissed via mouse')} />
            <Progress value={0} />
          </File>
        </FileList.Item>
        <FileList.Item>
          <File type="image" aria-label="Image file" tabIndex={0} onKeyDown={handleKeyDown}>
            Rose petals.jpg
            <File.Close onClick={() => alert('File dismissed via mouse')} />
            <Progress value={20} />
          </File>
        </FileList.Item>
        <FileList.Item>
          <File type="pdf" aria-label="PDF file" tabIndex={0} onKeyDown={handleKeyDown}>
            Basics of gardening.pdf
            <File.Close onClick={() => alert('File dismissed via mouse')} />
            <Progress value={40} />
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
            <File.Close onClick={() => alert('File dismissed via mouse')} />
            <Progress value={60} />
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
            <File.Close onClick={() => alert('File dismissed via mouse')} />
            <Progress value={80} />
          </File>
        </FileList.Item>
        <FileList.Item>
          <File type="zip" aria-label="ZIP file" tabIndex={0} onKeyDown={handleKeyDown}>
            Landscape.zip
            <Progress value={100} />
          </File>
        </FileList.Item>
      </FileList>
    </Col>
  </Row>
);

export default Example;
