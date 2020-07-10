/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { Code } from '@zendeskgarden/react-typography';

const StyledDiv = styled.div`
  margin-bottom: 12px;
`;

const Example = () => (
  <>
    <StyledDiv>
      <Code size="small">Veggies es bonus vobis</Code>
    </StyledDiv>
    <StyledDiv>
      <Code size="medium" hue="green">
        Veggies es bonus vobis
      </Code>
    </StyledDiv>
    <Code size="large" hue="yellow">
      Veggies es bonus vobis
    </Code>
  </>
);

export default Example;
