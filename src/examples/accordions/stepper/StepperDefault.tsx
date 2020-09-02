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

const StyledBtnRow = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${p => p.theme.space.sm};
  justify-content: start;
  margin: ${p => p.theme.space.sm} 0 0 0;
`;

const Example = () => {
  const [step, setStep] = useState(0);

  return (
    <Row>
      <Col>
        <Stepper activeIndex={step}>
          <Stepper.Step key="step-1">
            <Stepper.Label>Make good use of your location</Stepper.Label>
            <Stepper.Content>
              The success of your garden depends greatly on location.
              <StyledBtnRow>
                <Button onClick={() => setStep(1)}>Next</Button>
              </StyledBtnRow>
            </Stepper.Content>
          </Stepper.Step>
          <Stepper.Step key="step-2">
            <Stepper.Label>Plan your Garden layout</Stepper.Label>
            <Stepper.Content>
              After choosing a site for you garden, the next step is to imagine how the arrangement
              of crops will look in the garden.
              <StyledBtnRow>
                <Button onClick={() => setStep(0)}>Back</Button>
                <Button onClick={() => setStep(2)}>Next</Button>
              </StyledBtnRow>
            </Stepper.Content>
          </Stepper.Step>
          <Stepper.Step key="step-3">
            <Stepper.Label>Buy great seeds</Stepper.Label>
            <Stepper.Content>
              Buy clean, hearty, disease-free seeds. Most seed from reliable seed companies will
              meet these specifications.
              <StyledBtnRow>
                <Button onClick={() => setStep(1)}>Back</Button>
              </StyledBtnRow>
            </Stepper.Content>
          </Stepper.Step>
        </Stepper>
      </Col>
    </Row>
  );
};

export default Example;
