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
      <Tooltip size="small" content="Eat, drink, and be rosemary" placement="top-start">
        <Button>Small</Button>
      </Tooltip>
    </Col>
    <Col textAlign="center">
      <Tooltip size="medium" content="I want to start gardening, but I haven’t botany plants.">
        <Button>Medium</Button>
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
        <Button>Large</Button>
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
        <Button>Extra large</Button>
      </Tooltip>
    </Col>
  </Row>
);

export default Example;
