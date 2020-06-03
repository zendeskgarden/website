/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { UnorderedList, Span, MD } from '@zendeskgarden/react-typography';
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
  list-style: none;
`;

const StyledListItem = styled(UnorderedList.Item)`
  & > div {
    display: flex;
    margin: ${p => p.theme.space.base * 2.5}px 0;
    border-top: ${p => `${p.theme.borders.sm} ${getColor('grey', 200, p.theme)}`};
    padding: ${p => p.theme.space.base * 2.5}px 0 0;
  }
`;

const StyledListItemLabel = styled(MD)`
  min-width: ${p => p.theme.space.base * 20}px;
`;

const StyledDot = styled(Span)`
  margin: 0 ${p => p.theme.space.xs};
  color: ${p => getColor('grey', 600, p.theme)};
`;

const StyledMono = styled(MD)`
  /* 1px nudge to align mono type with 14px label baseline */
  line-height: 21px;
  color: ${p => getColor('grey', 700, p.theme)};
`;

export const Configuration: React.FC<{ reactPackage: IPackage; propSheets: ComponentDoc[] }> = ({
  reactPackage,
  propSheets
}) => {
  return (
    <StyledUnorderedList>
      <StyledListItem>
        <StyledListItemLabel isBold>Name</StyledListItemLabel>
        {reactPackage.version}
        <StyledDot>•</StyledDot>
        <Anchor
          href={`https://github.com/zendeskgarden/react-components/tree/master/packages/${reactPackage.packageName}`}
        >
          View source
        </Anchor>
        <StyledDot>•</StyledDot>
        <Anchor
          href={`https://www.npmjs.com/package/@zendeskgarden/react-${reactPackage.packageName}`}
        >
          View on npm
        </Anchor>
      </StyledListItem>
      <StyledListItem>
        <StyledListItemLabel isBold>Install</StyledListItemLabel>
        <StyledMono isMonospace>npm install {reactPackage.name}</StyledMono>
      </StyledListItem>
      <StyledListItem>
        <StyledListItemLabel isBold>Deps</StyledListItemLabel>
        <StyledMono isMonospace>
          npm install react react-dom prop-types styled-components @zendeskgarden/react-theming
        </StyledMono>
      </StyledListItem>
      <StyledListItem>
        <StyledListItemLabel isBold>Import</StyledListItemLabel>
        <StyledMono isMonospace>
          import{' '}
          {`{ ${propSheets && propSheets.map(propSheet => propSheet.displayName).join(', ')} }`}{' '}
          from &apos;
          {reactPackage.name}
          &apos;
        </StyledMono>
      </StyledListItem>
    </StyledUnorderedList>
  );
};
