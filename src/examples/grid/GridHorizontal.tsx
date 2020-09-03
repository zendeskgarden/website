/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { MD } from '@zendeskgarden/react-typography';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

const Example = () => (
  <Grid debug>
    <Row justifyContent="start">
      <Col size={4}>
        <MD>One of two columns</MD>
      </Col>
      <Col size={4}>
        <MD>One of two columns</MD>
      </Col>
    </Row>
    <Row justifyContent="center">
      <Col size={4}>
        <MD>One of two columns</MD>
      </Col>
      <Col size={4}>
        <MD>One of two columns</MD>
      </Col>
    </Row>
    <Row justifyContent="end">
      <Col size={4}>
        <MD>One of two columns</MD>
      </Col>
      <Col size={4}>
        <MD>One of two columns</MD>
      </Col>
    </Row>
    <Row justifyContent="around">
      <Col size={4}>
        <MD>One of two columns</MD>
      </Col>
      <Col size={4}>
        <MD>One of two columns</MD>
      </Col>
    </Row>
    <Row justifyContent="between">
      <Col size={4}>
        <MD>One of two columns</MD>
      </Col>
      <Col size={4}>
        <MD>One of two columns</MD>
      </Col>
    </Row>
  </Grid>
);

export default Example;
