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
      <Row alignItems="center">
        <Col textAlign="center">
          <Button isDanger>Default</Button>
        </Col>
        <Col textAlign="center">
          <Button isPrimary isDanger>
            Primary
          </Button>
        </Col>
        <Col textAlign="center">
          <Button isBasic isDanger>
            Basic
          </Button>
        </Col>
      </Row>
    </Grid>
  );
};

export default Example;
