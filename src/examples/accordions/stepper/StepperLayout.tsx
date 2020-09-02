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
  const [step, setStep] = useState(0);

  const onNext = () => setStep(step + 1);
  const onBack = () => setStep(step - 1);

  const horizontalContent = (index: number) => {
    if (index === 0) {
      return (
        <StyledContainer>
          <StyledParagraph>The success of your garden depends greatly on location.</StyledParagraph>
          <Button onClick={onNext}>Next</Button>
        </StyledContainer>
      );
    } else if (index === 1) {
      return (
        <StyledContainer>
          <StyledParagraph>
            After choosing a site for your garden, the next step is to imagine how the arrangement
            of crops will look in the garden.
          </StyledParagraph>
          <Button onClick={onBack} style={{ marginRight: '12px' }}>
            Back
          </Button>
          <Button onClick={onNext}>Next</Button>
        </StyledContainer>
      );
    }

    return (
      <StyledContainer>
        <StyledParagraph>
          Buy clean, hearty, disease-free seeds. Most seed from reliable seed companies will meet
          these specifications.
        </StyledParagraph>
        <Button onClick={onBack}>Back</Button>
      </StyledContainer>
    );
  };

  return (
    <Row justifyContent="center">
      <Col sm={10} textAlign="center">
        <Stepper activeIndex={step} isHorizontal>
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
        {horizontalContent(step)}
      </Col>
    </Row>
  );
};

export default Example;
