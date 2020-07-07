/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { SM, MD, LG, Code } from '@zendeskgarden/react-typography';

const StyledDiv = styled.div`
  margin-bottom: 12px;
`;

const Example = () => (
  <>
    <StyledDiv>
      <SM>
        <Code>Veggies es bonus vobis</Code>
      </SM>
    </StyledDiv>
    <StyledDiv>
      <MD>
        <Code hue="green">Veggies es bonus vobis</Code>
      </MD>
    </StyledDiv>
    <LG>
      <Code hue="yellow">Veggies es bonus vobis</Code>
    </LG>
  </>
);

export default Example;
