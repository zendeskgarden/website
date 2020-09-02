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

const StyledParagraph = styled.div`
  margin: 0 0 ${p => p.theme.space.sm} 0;
`;

const StyledContainer = styled.div`
  margin: ${p => p.theme.space.md} 0 0 0;
`;

const Example = () => {
  const [currentStep, setStep] = useState(0);

  const onNext = () => setStep(currentStep + 1);
  const onBack = () => setStep(currentStep - 1);

  const allSteps = [
    {
      content: `The success of your garden depends greatly on location.`,
      buttons: <Button onClick={onNext}>Next</Button>
    },
    {
      content: `After choosing a site for your garden, the next step is to imagine how the arrangement of crops will look in the garden.`,
      buttons: (
        <>
          <Button onClick={onBack} style={{ marginRight: '12px' }}>
            Back
          </Button>
          <Button onClick={onNext}>Next</Button>
        </>
      )
    },
    {
      content: `Buy clean, hearty, disease-free seeds. Most seed from reliable seed companies will meet these specifications.`,
      buttons: <Button onClick={onBack}>Back</Button>
    }
  ];

  return (
    <Row justifyContent="center">
      <Col sm={10} textAlign="center">
        <Stepper activeIndex={currentStep} isHorizontal>
          <Stepper.Step key="step-1">
            <Stepper.Label>Make good use of your location</Stepper.Label>
          </Stepper.Step>
          <Stepper.Step key="step-2">
            <Stepper.Label>Plan your Garden layout</Stepper.Label>
          </Stepper.Step>
          <Stepper.Step key="step-3">
            <Stepper.Label>Buy great seeds</Stepper.Label>
          </Stepper.Step>
        </Stepper>
        {allSteps.map(
          (step, index) =>
            index === currentStep && (
              <StyledContainer>
                <StyledParagraph>{step.content}</StyledParagraph>
                {step.buttons}
              </StyledContainer>
            )
        )}
      </Col>
    </Row>
  );
};

export default Example;
