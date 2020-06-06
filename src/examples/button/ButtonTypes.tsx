/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';

const Example = () => {
  return (
    <Grid>
      <Row>
        <Col textAlign="center">
          <Button>Default</Button>
        </Col>
        <Col textAlign="center">
          <Button isPrimary>Primary</Button>
        </Col>
        <Col textAlign="center">
          <Button isBasic>Basic</Button>
        </Col>
      </Row>
    </Grid>
  );
};

export default Example;
