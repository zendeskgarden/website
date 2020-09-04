/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { Stepper } from '@zendeskgarden/react-accordions';
import { ReactComponent as LeafIcon } from '@zendeskgarden/svg-icons/src/12/leaf-stroke.svg';
import { Row, Col } from '@zendeskgarden/react-grid';

const Example = () => (
  <Row justifyContent="center">
    <Col sm={10}>
      <Stepper isHorizontal>
        <Stepper.Step key="step-1">
          <Stepper.Label icon={<LeafIcon />}>Make good use of your location</Stepper.Label>
        </Stepper.Step>
        <Stepper.Step key="step-2">
          <Stepper.Label icon={<LeafIcon />}>Plan your garden&apos;s layout</Stepper.Label>
        </Stepper.Step>
        <Stepper.Step key="step-3">
          <Stepper.Label icon={<LeafIcon />}>Buy great seeds</Stepper.Label>
        </Stepper.Step>
      </Stepper>
    </Col>
  </Row>
);

export default Example;
