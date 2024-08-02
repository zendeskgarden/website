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
import { Grid } from '@zendeskgarden/react-grid';

const StyledButtons = styled.div`
  margin-top: ${p => p.theme.space.sm};
  padding: ${p => p.theme.shadowWidths.md};

  & > button {
    margin-${p => (p.theme.rtl ? 'right' : 'left')}: ${p => p.theme.space.base * 3}px;

    &:first-child {
      margin-${p => (p.theme.rtl ? 'right' : 'left')}: 0;
    }
  }
`;

const StyledContainer = styled.div`
  margin: ${p => p.theme.space.md} 0 0 0;
`;

const Example = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const onNext = () => setCurrentStep(currentStep + 1);
  const onBack = () => setCurrentStep(currentStep - 1);

  const allSteps = [
    {
      content: `Your garden's success depends on its location, so choose a spot that has
      healthy soil, gets good light, and is easily watered.`,
      buttons: <Button onClick={onNext}>Next</Button>
    },
    {
      content: `The layout of your garden depends on its purpose. If you're planting flowers,
      consider aesthetics like color and layout. If you're growing food, think about
      harvest times and the kinds of pests that might be attracted to your crops.`,
      buttons: (
        <>
          <Button onClick={onBack}>Back</Button>
          <Button onClick={onNext}>Next</Button>
        </>
      )
    },
    {
      content:
        'Buy clean, hearty, disease-free seeds. Most seed from reliable seed companies will meet these specifications.',
      buttons: <Button onClick={onBack}>Back</Button>
    }
  ];

  return (
    <Grid.Row justifyContent="center">
      <Grid.Col sm={10} textAlign="center">
        <Stepper activeIndex={currentStep} isHorizontal>
          <Stepper.Step key="step-1">
            <Stepper.Label>Choose a good location</Stepper.Label>
          </Stepper.Step>
          <Stepper.Step key="step-2">
            <Stepper.Label>Plan your garden&apos;s layout</Stepper.Label>
          </Stepper.Step>
          <Stepper.Step key="step-3">
            <Stepper.Label>Buy great seeds</Stepper.Label>
          </Stepper.Step>
        </Stepper>
        {allSteps.map(
          (step, index) =>
            index === currentStep && (
              <StyledContainer key={index}>
                {step.content}
                <StyledButtons>{step.buttons}</StyledButtons>
              </StyledContainer>
            )
        )}
      </Grid.Col>
    </Grid.Row>
  );
};

export default Example;
