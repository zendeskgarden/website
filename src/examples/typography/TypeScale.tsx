/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { SM, MD, LG, XL, XXL, XXXL } from '@zendeskgarden/react-typography';

const StyledDiv = styled.div`
  margin-bottom: 12px;
`;

const Example = () => (
  <>
    <StyledDiv>
      <SM>&lt;SM&gt; Veggies es bonus vobis proinde vos postulo</SM>
    </StyledDiv>
    <StyledDiv>
      <MD>&lt;MD&gt;Veggies es bonus vobis proinde vos postulo</MD>
    </StyledDiv>
    <StyledDiv>
      <LG>&lt;LG&gt;Veggies es bonus vobis proinde vos postulo</LG>
    </StyledDiv>
    <StyledDiv>
      <XL>&lt;XL&gt;Veggies es bonus vobis proinde vos postulo</XL>
    </StyledDiv>
    <StyledDiv>
      <XXL>&lt;XXL&gt;Veggies es bonus vobis proinde vos postulo</XXL>
    </StyledDiv>
    <XXXL>&lt;XXXL&gt;Veggies es bonus vobis proinde</XXXL>
  </>
);

export default Example;
