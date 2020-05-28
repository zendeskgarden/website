/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { UnorderedList, Span } from '@zendeskgarden/react-typography';
import { Anchor } from '@zendeskgarden/react-buttons';
import { getColor } from '@zendeskgarden/react-theming';
import { ComponentDoc } from 'react-docgen-typescript';

export interface IPackage {
  version: string;
  name: string;
  peerDependencies: string[];
  packageName: string;
}

const StyledUnorderedList = styled(UnorderedList)`
  margin: 0 0 ${p => p.theme.space.base * 12}px;
  border-bottom: solid 1px ${p => getColor('grey', 300, p.theme)};
`;

const StyledListItem = styled(UnorderedList.Item)`
  list-style: none;

  & > :first-child {
    display: flex;
    margin: ${p => p.theme.space.base * 3}px 0;
    border-top: solid 1px ${p => getColor('grey', 300, p.theme)};
    padding: ${p => p.theme.space.base * 3}px 0 0;
    font-family: ${p => p.theme.fonts.mono};
  }
`;

const StyledListItemLabel = styled.label`
  min-width: ${p => p.theme.space.base * 20}px;
  font-family: ${p => p.theme.fonts.system};
  font-weight: ${p => p.theme.fontWeights.semibold};
`;

const StyledSpan = styled(Span)`
  margin-right: ${p => p.theme.space.base * 3}px;
`;

export const PackageDescription: React.FC<{ data: IPackage; components: ComponentDoc[] }> = ({
  data,
  components
}) => {
  return (
    <StyledUnorderedList>
      <StyledListItem>
        <StyledListItemLabel>Name</StyledListItemLabel>
        {/* This is showing the version on this page and not the latest available. Need to fix */}
        <StyledSpan>{data.version}</StyledSpan>
        <StyledSpan>•</StyledSpan>
        <StyledSpan>
          <Anchor
            href={`https://github.com/zendeskgarden/react-components/tree/master/packages/${data.packageName}`}
            target="_blank"
          >
            View source
          </Anchor>
        </StyledSpan>
        <StyledSpan>•</StyledSpan>
        <StyledSpan>
          <Anchor
            href={`https://www.npmjs.com/package/@zendeskgarden/react-${data.packageName}`}
            target="_blank"
          >
            View on NPM
          </Anchor>
        </StyledSpan>
      </StyledListItem>
      <StyledListItem>
        <StyledListItemLabel>Install</StyledListItemLabel>
        npm install {data.name}
      </StyledListItem>
      <StyledListItem>
        <StyledListItemLabel>Deps</StyledListItemLabel>
        npm install {data.peerDependencies.join(' ')}
      </StyledListItem>
      <StyledListItem>
        <StyledListItemLabel>Import</StyledListItemLabel>
        import {`{ ${components && components.map(e => e.displayName).join(', ')} }`} from &apos;
        {data.name}
        &apos;
      </StyledListItem>
    </StyledUnorderedList>
  );
};
