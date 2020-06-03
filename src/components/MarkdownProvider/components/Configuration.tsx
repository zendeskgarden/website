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

interface IPackage {
  version: string;
  name: string;
  packageName: string;
}

const StyledUnorderedList = styled(UnorderedList)`
  margin: 0 0 ${p => p.theme.space.xxl};
  border-bottom: ${p => `${p.theme.borders.sm} ${getColor('grey', 200, p.theme)}`};
`;

const StyledListItem = styled(UnorderedList.Item)`
  list-style: none;

  & > div {
    display: flex;
    margin: ${p => p.theme.space.base * 2.5}px 0;
    border-top: ${p => `${p.theme.borders.sm} ${getColor('grey', 200, p.theme)}`};
    padding: ${p => p.theme.space.base * 2.5}px 0 0;
    font-family: ${p => p.theme.fonts.mono};
  }
`;

const StyledListItemLabel = styled.label`
  min-width: ${p => p.theme.space.base * 20}px;
  font-family: ${p => p.theme.fonts.system};
  font-weight: ${p => p.theme.fontWeights.semibold};
`;

const StyledDot = styled(Span)`
  margin: 0 ${p => p.theme.space.sm};
`;

export const Configuration: React.FC<{ reactPackage: IPackage; propSheets: ComponentDoc[] }> = ({
  reactPackage,
  propSheets
}) => {
  return (
    <StyledUnorderedList>
      <StyledListItem>
        <StyledListItemLabel>Name</StyledListItemLabel>
        {reactPackage.version}
        <StyledDot>•</StyledDot>
        <Anchor
          href={`https://github.com/zendeskgarden/react-components/tree/master/packages/${reactPackage.packageName}`}
          target="_blank"
        >
          View source
        </Anchor>
        <StyledDot>•</StyledDot>
        <Anchor
          href={`https://www.npmjs.com/package/@zendeskgarden/react-${reactPackage.packageName}`}
          target="_blank"
        >
          View on NPM
        </Anchor>
      </StyledListItem>
      <StyledListItem>
        <StyledListItemLabel>Install</StyledListItemLabel>
        npm install {reactPackage.name}
      </StyledListItem>
      <StyledListItem>
        <StyledListItemLabel>Deps</StyledListItemLabel>
        npm install react react-dom prop-types styled-components @zendeskgarden/react-theming
      </StyledListItem>
      <StyledListItem>
        <StyledListItemLabel>Import</StyledListItemLabel>
        import{' '}
        {`{ ${propSheets && propSheets.map(propSheet => propSheet.displayName).join(', ')} }`} from
        &apos;
        {reactPackage.name}
        &apos;
      </StyledListItem>
    </StyledUnorderedList>
  );
};
