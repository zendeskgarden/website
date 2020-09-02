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
  display: grid;
  justify-items: center;
  margin: ${p => p.theme.space.lg} 0 0 0;
`;

const StyledBtnRow = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${p => p.theme.space.sm};
  margin: ${p => p.theme.space.sm} 0;
`;

const Example = () => {
  const [step, setStep] = useState(0);

  const horizontalContent = (index: number) => {
    if (index === 0) {
      return (
        <>
          The success of your garden depends greatly on location.
          <StyledBtnRow>
            <Button onClick={() => setStep(1)}>Next</Button>
          </StyledBtnRow>
        </>
      );
    } else if (index === 1) {
      return (
        <>
          After choosing a site for you garden, the next step is to imagine how the arrangement of
          crops will look in the garden.
          <StyledBtnRow>
            <Button onClick={() => setStep(0)}>Back</Button>
            <Button onClick={() => setStep(2)}>Next</Button>
          </StyledBtnRow>
        </>
      );
    }

    return (
      <>
        Buy clean, hearty, disease-free seeds. Most seed from reliable seed companies will meet
        these specifications.
        <StyledBtnRow>
          <Button onClick={() => setStep(1)}>Back</Button>
        </StyledBtnRow>
      </>
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
        <StyledContent>{horizontalContent(step)}</StyledContent>
      </Col>
    </Row>
  );
};

export default Example;
