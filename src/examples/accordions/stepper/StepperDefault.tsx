/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Stepper } from '@zendeskgarden/react-accordions';
import { Button } from '@zendeskgarden/react-buttons';
import { Row, Col } from '@zendeskgarden/react-grid';

const StyledContent = styled.div`
  margin: 0 0 ${p => p.theme.space.sm} 0;
`;

const Example = () => {
  const [step, setStep] = useState(0);

  const onNext = () => setStep(step + 1);
  const onBack = () => setStep(step - 1);

  return (
    <Row>
      <Col>
        <Stepper activeIndex={step}>
          <Stepper.Step key="step-1">
            <Stepper.Label>Make good use of your location</Stepper.Label>
            <Stepper.Content>
              <StyledContent>The success of your garden depends greatly on location.</StyledContent>
              <Button onClick={onNext}>Next</Button>
            </Stepper.Content>
          </Stepper.Step>
          <Stepper.Step key="step-2">
            <Stepper.Label>Plan your Garden layout</Stepper.Label>
            <Stepper.Content>
              <StyledContent>
                After choosing a site for your garden, the next step is to imagine how the
                arrangement of crops will look in the garden.
              </StyledContent>
              <Button onClick={onBack} style={{ marginRight: '12px' }}>
                Back
              </Button>
              <Button onClick={onNext}>Next</Button>
            </Stepper.Content>
          </Stepper.Step>
          <Stepper.Step key="step-3">
            <Stepper.Label>Buy great seeds</Stepper.Label>
            <Stepper.Content>
              <StyledContent>
                Buy clean, hearty, disease-free seeds. Most seed from reliable seed companies will
                meet these specifications.
              </StyledContent>
              <Button onClick={onBack}>Back</Button>
            </Stepper.Content>
          </Stepper.Step>
        </Stepper>
      </Col>
    </Row>
  );
};

export default Example;
