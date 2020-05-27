/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { UnorderedList } from '@zendeskgarden/react-typography';
import { getColor } from '@zendeskgarden/react-theming';

export interface IPackage {
  version: string;
  name: string;
  peerDependencies: string[];
}

const StyledUnorderedList = styled(UnorderedList)`
  margin: 0 0 ${p => p.theme.space.base * 12}px;
`;

const StyledListItem = styled(UnorderedList.Item)`
  list-style: none;
`;

// Try to get rid of this extra div. Automatically creates a div in UL

const StyledListItemRow = styled.div`
  display: flex;
  margin: 0 0 ${p => p.theme.space.base * 2}px;
  border-bottom: solid 1px ${p => getColor('grey', 300, p.theme)};
  padding: 0 0 ${p => p.theme.space.base * 2}px;
  font-family: ${p => p.theme.fonts.mono};
`;

const StyledListItemLabel = styled.label`
  min-width: ${p => p.theme.space.base * 20}px;
  font-family: ${p => p.theme.fonts.system};
  font-weight: ${p => p.theme.fontWeights.semibold};
`;

export const PackageDescription: React.FC<{ data: IPackage }> = ({ data }) => {
  return (
    <StyledUnorderedList>
      <StyledListItem>
        <StyledListItemRow>
          <StyledListItemLabel>Name</StyledListItemLabel>
          <span>
            {data.version} •{' '}
            <a href="https://github.com/zendeskgarden/react-components/tree/master/packages/avatars">
              View source
            </a>{' '}
            • <a href="https://www.npmjs.com/package/@zendeskgarden/react-avatars">View on NPM</a>
          </span>
        </StyledListItemRow>
      </StyledListItem>
      <StyledListItem>
        <StyledListItemRow>
          <StyledListItemLabel>Install</StyledListItemLabel>
          npm install {data.name}
        </StyledListItemRow>
      </StyledListItem>
      <StyledListItem>
        <StyledListItemRow>
          <StyledListItemLabel>Deps</StyledListItemLabel>
          npm install {data.peerDependencies.join(' ')}
        </StyledListItemRow>
      </StyledListItem>
      <StyledListItem>
        <StyledListItemRow>
          <StyledListItemLabel>Import</StyledListItemLabel>
          import
        </StyledListItemRow>
      </StyledListItem>
    </StyledUnorderedList>
  );
};
