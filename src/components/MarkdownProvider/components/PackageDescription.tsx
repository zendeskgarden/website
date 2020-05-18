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
}

const StyledUnorderedList = styled(UnorderedList)`
  margin: 0 0 ${p => p.theme.space.base * 12}px;
`;

const StyledListItem = styled(UnorderedList.Item)`
  list-style: none;
`;

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

// The List.Item automatically creates a child div that is kind of annoying

export const PackageDescription: React.FC<{ data: IPackage }> = ({ data }, props) => {
  return (
    <StyledUnorderedList>
      <StyledListItem>
        <StyledListItemRow>
          <StyledListItemLabel>Name</StyledListItemLabel>
          <p>
            {data.version} • <a href="https://www.google.com">View source</a> •{' '}
            <a href="https://www.google.com">View on NPM</a>
          </p>
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
          npm install <span>{props.deps}</span>
        </StyledListItemRow>
      </StyledListItem>
      <StyledListItem>
        <StyledListItemRow>
          <StyledListItemLabel>Import</StyledListItemLabel>
          import {data.name} from {data.name}
        </StyledListItemRow>
      </StyledListItem>
    </StyledUnorderedList>
  );
};
