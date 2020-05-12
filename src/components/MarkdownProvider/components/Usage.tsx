/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { MD } from '@zendeskgarden/react-typography';

const StyledUsage = styled.div`
  @media (min-width: ${p => p.theme.breakpoints.sm}) {
    display: flex;
  }
`;

export const Usage: React.FC = props => <StyledUsage {...props} />;

export interface IUsageSectionProps {
  type: string;
}

export const UsageSection: React.FC<{
  type: string;
}> = ({ type, children }) => {
  return (
    <div>
      <MD tag="h4" isBold>
        {type === 'use' ? 'When to use' : 'When NOT to use'}
      </MD>
      <u>{children}</u>
    </div>
  );
};
