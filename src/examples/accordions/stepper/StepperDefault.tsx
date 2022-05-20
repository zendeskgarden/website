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

const Example = () => {
  const [step, setStep] = useState(0);

  const onNext = () => setStep(step + 1);
  const onBack = () => setStep(step - 1);

  return (
    <Stepper activeIndex={step}>
      <Stepper.Step key="step-1">
        <Stepper.Label>Choose a good location</Stepper.Label>
        <Stepper.Content>
          Your garden&apos;s success depends on its location, so choose a spot that has healthy
          soil, gets good light, and is easily watered.
          <StyledButtons>
            <Button tabIndex={step === 0 ? -1 : undefined} onClick={onNext}>
              Next
            </Button>
          </StyledButtons>
        </Stepper.Content>
      </Stepper.Step>
      <Stepper.Step key="step-2">
        <Stepper.Label>Plan your garden&apos;s layout</Stepper.Label>
        <Stepper.Content>
          The layout of your garden depends on its purpose. If you&apos;re planting flowers,
          consider aesthetics like color and layout. If you&apos;re growing food, think about
          harvest times and the kinds of pests that might be attracted to your crops.
          <StyledButtons>
            <Button tabIndex={step === 1 ? -1 : undefined} onClick={onBack}>
              Back
            </Button>
            <Button tabIndex={step === 1 ? -1 : undefined} onClick={onNext}>
              Next
            </Button>
          </StyledButtons>
        </Stepper.Content>
      </Stepper.Step>
      <Stepper.Step key="step-3">
        <Stepper.Label>Buy great seeds</Stepper.Label>
        <Stepper.Content>
          Buy clean, hearty, disease-free seeds. Most seed from reliable seed companies will meet
          these specifications.
          <StyledButtons>
            <Button tabIndex={step === 2 ? -1 : undefined} onClick={onBack}>
              Back
            </Button>
          </StyledButtons>
        </Stepper.Content>
      </Stepper.Step>
    </Stepper>
  );
};

export default Example;
