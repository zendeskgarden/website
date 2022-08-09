/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Tooltip, Title, Paragraph } from '@zendeskgarden/react-tooltips';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Button } from '@zendeskgarden/react-buttons';

const Example = () => (
  <Row>
    <Col textAlign="center">
      <Tooltip type="dark" size="small" content="Eat, drink, and be rosemary">
        <Button size="small" isPrimary>
          Dark tooltip
        </Button>
      </Tooltip>
    </Col>
    <Col textAlign="center">
      <Tooltip
        type="light"
        size="large"
        placement="top-end"
        content={
          <>
            <Title>Words of wisdom</Title>
            <Paragraph>
              I asked the staff at my local garden center what to grow in my garden. They gave me
              some sage advice.
            </Paragraph>
          </>
        }
      >
        <Button isPrimary>Light tooltip</Button>
      </Tooltip>
    </Col>
  </Row>
);

export default Example;
