/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';

const StyledUsage = styled.div`
  @media (min-width: ${p => p.theme.breakpoints.sm}) {
    display: flex;
  }
`;

export const Usage: React.FC = props => <StyledUsage {...props} />;
