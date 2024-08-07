/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { ColorPickerDialog } from '@zendeskgarden/react-colorpickers';
import { Row, Col } from '@zendeskgarden/react-grid';
import { PALETTE } from '@zendeskgarden/react-theming';

const Example = () => (
  <Row>
    <Col textAlign="center">
      <ColorPickerDialog
        defaultColor={PALETTE.blue[700]}
        buttonProps={{
          'aria-label': 'choose your favorite color'
        }}
      />
    </Col>
  </Row>
);

export default Example;
