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
      <Tooltip size="small" content="Eat, drink, and be rosemary" placement="top-start">
        <span>Small</span>
      </Tooltip>
    </Col>
    <Col textAlign="center">
      <Tooltip size="medium" content="I want to start gardening, but I haven’t botany plants.">
        <span>Medium</span>
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
              I was offered a job as a gardener, but I didn’t take it because the celery was too
              low.
            </Paragraph>
          </>
        }
      >
        <span>Large</span>
      </Tooltip>
    </Col>
    <Col textAlign="center">
      <Tooltip
        type="light"
        size="extra-large"
        placement="top-end"
        zIndex={1}
        content={
          <>
            <Title>Garden advice</Title>
            <Paragraph>
              I asked the staff at my local garden center what to grow in my garden. They gave me
              some sage advice.
            </Paragraph>
          </>
        }
      >
        <span>Extra large</span>
      </Tooltip>
    </Col>
  </Row>
);

export default Example;
