/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { UnorderedList, Span } from '@zendeskgarden/react-typography';
import { getColor } from '@zendeskgarden/react-theming';
import { IComponentData } from 'src/templates/types';
import { StyledAnchor } from './Anchor';

interface IPackage {
  version: string;
  name: string;
  packageName: string;
}

const StyledUnorderedList = styled(UnorderedList)`
  margin: 0 0 ${p => p.theme.space.xl};
  border-bottom: ${p => `${p.theme.borders.sm} ${getColor('grey', 200, p.theme)}`};
  list-style: none;
`;

const StyledListItem = styled(UnorderedList.Item)`
  display: flex;
  align-items: baseline;
  margin: ${p => p.theme.space.base * 2.5}px 0;
  border-top: ${p => `${p.theme.borders.sm} ${getColor('grey', 200, p.theme)}`};
  /* stylelint-disable-next-line declaration-no-important */
  padding-top: ${p => p.theme.space.base * 2.5}px !important;
`;

const StyledListItemLabel = styled(Span)`
  min-width: ${p => p.theme.space.base * 20}px;
`;

const StyledDot = styled(Span)`
  margin: 0 ${p => p.theme.space.xs};
  color: ${p => getColor('grey', 600, p.theme)};
`;

const StyledMono = styled(Span).attrs({ isMonospace: true })`
  color: ${p => getColor('grey', 700, p.theme)};
`;

export const Configuration: React.FC<{
  reactPackage: IPackage;
  components: IComponentData[];
}> = ({ reactPackage, components }) => (
  <StyledUnorderedList>
    <StyledListItem>
      <StyledListItemLabel isBold>Name</StyledListItemLabel>
      {reactPackage.version}
      <StyledDot>•</StyledDot>
      <StyledAnchor
        href={`https://github.com/zendeskgarden/react-components/tree/main/packages/${reactPackage.packageName}`}
      >
        View source
      </StyledAnchor>
      <StyledDot>•</StyledDot>
      <StyledAnchor
        href={`https://www.npmjs.com/package/@zendeskgarden/react-${reactPackage.packageName}`}
      >
        View on npm
      </StyledAnchor>
    </StyledListItem>
    <StyledListItem>
      <StyledListItemLabel isBold>Install</StyledListItemLabel>
      <StyledMono>npm install {reactPackage.name}</StyledMono>
    </StyledListItem>
    <StyledListItem>
      <StyledListItemLabel isBold>Deps</StyledListItemLabel>
      <StyledMono>
        npm install react react-dom styled-components
        {reactPackage.name !== '@zendeskgarden/react-theming' && ' @zendeskgarden/react-theming'}
      </StyledMono>
    </StyledListItem>
    {components && (
      <StyledListItem>
        <StyledListItemLabel isBold>Import</StyledListItemLabel>
        <StyledMono>
          import {`{ ${components.map(component => component.name).join(', ')} }`} from &apos;
          {reactPackage.name}
          &apos;
        </StyledMono>
      </StyledListItem>
    )}
  </StyledUnorderedList>
);
