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
  display: grid;
  grid-gap: ${p => p.theme.space.base * 6}px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  margin: 0 0 ${p => p.theme.space.base * 9}px;
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
