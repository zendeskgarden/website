/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { getColor } from '@zendeskgarden/react-theming';

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

export const PackageDescription: React.FC<{ data: IPackage }> = ({ data }, props) => {
  return (
    <ConfigContainer>
      <ConfigListItem>
        <ConfigListLabel>Name</ConfigListLabel>
        <pre>
          {data.version} • <a href="https://www.google.com">View source</a> •{' '}
          <a href="https://www.google.com">View on NPM</a>
        </pre>
      </ConfigListItem>
      <ConfigListItem>
        <ConfigListLabel>Install</ConfigListLabel>
        <pre>npm install {data.name}</pre>
      </ConfigListItem>
      <ConfigListItem>
        <ConfigListLabel>Deps</ConfigListLabel>
        <pre>npm install {props.deps}</pre>
      </ConfigListItem>
      <ConfigListItem>
        <ConfigListLabel>Import</ConfigListLabel>
        <pre>
          import {data.name} from {data.name}
        </pre>
      </ConfigListItem>
    </ConfigContainer>
  );
};
