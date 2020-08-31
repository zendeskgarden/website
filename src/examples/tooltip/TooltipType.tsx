/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Tooltip, Title, Paragraph } from '@zendeskgarden/react-tooltips';
import { Row, Col } from '@zendeskgarden/react-grid';

const Example = () => (
  <Row>
    <Col textAlign="center">
      <Tooltip type="dark" size="small" content={'Eat, drink and be rosemary'}>
        <span>Dark tooltip</span>
      </Tooltip>
    </Col>
    <Col textAlign="center">
      <Tooltip
        type="light"
        size="large"
        content={
          <>
            <Title>Words of wisdom</Title>
            <Paragraph>
              I asked the staff at my local garden centre what to grow in my garden. They gave me
              some sage advice.
            </Paragraph>
          </>
        }
      >
        <span>Light tooltip</span>
      </Tooltip>
    </Col>
  </Row>
);

export default Example;
