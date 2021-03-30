/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { ColorpickerDialog } from '@zendeskgarden/react-colorpickers';
import { Row, Col } from '@zendeskgarden/react-grid';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

const Example = () => (
  <Row justifyContent="center">
    <Col size="auto">
      <ColorpickerDialog
        aria-label="Color picker dialog button"
        defaultColor={DEFAULT_THEME.palette.blue[600]}
      />
    </Col>
  </Row>
);

export default Example;
