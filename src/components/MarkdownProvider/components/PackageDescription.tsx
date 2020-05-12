/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { getColor } from '@zendeskgarden/react-theming';
import { MD } from '@zendeskgarden/react-typography';

export interface IPackage {
  version: string;
  name: string;
}

const ConfigContainer = styled.div`
  margin: 0 0 ${p => p.theme.space.base * 12}px;
`;

const ConfigListItem = styled.div`
  display: flex;
  margin: 0 0 ${p => p.theme.space.base * 2}px;
  border-bottom: solid 1px ${p => getColor('grey', 300, p.theme)};
  padding: 0 0 ${p => p.theme.space.base * 2}px;
`;

const ConfigListLabel = styled.p`
  min-width: ${p => p.theme.space.base * 20}px;
  font-weight: ${p => p.theme.fontWeights.semibold};
`;

export const PackageDescription: React.FC<{ data: IPackage }> = ({ data }) => {
  return (
    <ConfigContainer>
      <ConfigListItem>
        <ConfigListLabel>Name</ConfigListLabel>
        <MD isMonospace>
          {data.version} • <a href="https://www.google.com">View source</a> •{' '}
          <a href="https://www.google.com">View on NPM</a>
        </MD>
      </ConfigListItem>
      <ConfigListItem>
        <ConfigListLabel>Install</ConfigListLabel>
        <MD isMonospace>npm install {data.name}</MD>
      </ConfigListItem>
      <ConfigListItem>
        <ConfigListLabel>Deps</ConfigListLabel>
        <MD isMonospace>npm install TBD</MD>
      </ConfigListItem>
      <ConfigListItem>
        <ConfigListLabel>Import</ConfigListLabel>
        <MD isMonospace>
          import {data.name} from {data.name}
        </MD>
      </ConfigListItem>
    </ConfigContainer>
  );
};
