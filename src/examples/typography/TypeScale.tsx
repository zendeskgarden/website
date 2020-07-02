/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { SM, MD, LG, XL, XXL, XXXL } from '@zendeskgarden/react-typography';

const marginBottom = `margin-bottom: 12px;`;

const Example = () => (
  <>
    <SM css={marginBottom}>&lt;SM&gt; Veggies es bonus vobis proinde vos postulo</SM>
    <MD css={marginBottom}>&lt;MD&gt;Veggies es bonus vobis proinde vos postulo</MD>
    <LG css={marginBottom}>&lt;LG&gt;Veggies es bonus vobis proinde vos postulo</LG>
    <XL css={marginBottom}>&lt;XL&gt;Veggies es bonus vobis proinde vos postulo</XL>
    <XXL css={marginBottom}>&lt;XXL&gt;Veggies es bonus vobis proinde vos postulo</XXL>
    <XXXL>&lt;XXXL&gt;Veggies es bonus vobis proinde</XXXL>
  </>
);

export default Example;
